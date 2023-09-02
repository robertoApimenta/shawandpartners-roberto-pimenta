import React, { useState, useEffect } from 'react';
import axios from 'axios';
///////////// aquiiiiii
import CSV from '../../interfaces/interfaces';

import {Container, Card, Search} from './styles';

function index({ csvData }: {csvData: CSV[]}) {

  const [search, setSearch] = useState<string>('');

  const [dataSearch, setDataSearch] = useState<CSV[]>([]);

  useEffect(() => {
    // Função para realizar a pesquisa
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/users/?q=${search}`);
        setDataSearch(response.data);
      } catch (error) {
        console.error('Erro ao carregar dados:', error);
      }
    };

    // Realiza a pesquisa ao digitar no campo de entrada (com debounce de 300ms)
    const timerId = setTimeout(() => {
      if (search.trim() !== '') {
        fetchData();
      } else {
        // Se o campo estiver vazio, limpa dataSearch
        setDataSearch([]);
      }
    }, 300);

    return () => clearTimeout(timerId); // Limpa o timer ao desmontar o componente

  }, [search]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const input = e.target.value;
    setSearch(input);
  };

  return (
    <Container>
      {(dataSearch.length > 0 || csvData.length > 0) && ( // Verifica se há dados na pesquisa ou em csvData antes de renderizar o campo de pesquisa
        <Search>
          <input
            placeholder="Search"
            value={search}
            onChange={handleSearch}
          />
        </Search>
      )}

      {search ? (
        // Renderize dataSearch quando houver uma pesquisa
        dataSearch.map((el) => (
          <Card key={el.name}>
            <span><strong>Name:</strong> {el.name}</span>
            <span><strong>City:</strong> {el.city}</span>
            <span><strong>Country:</strong> {el.country}</span>
            <span><strong>Favorite Sport:</strong> {el.favorite_sport}</span>
          </Card>
        ))
      ) : (
        // Renderize csvData quando não houver pesquisa
        csvData.map((el) => (
          <Card key={el.name}>
            <span><strong>Name:</strong> {el.name}</span>
            <span><strong>City:</strong> {el.city}</span>
            <span><strong>Country:</strong> {el.country}</span>
            <span><strong>Favorite Sport:</strong> {el.favorite_sport}</span>
          </Card>
        ))
      )}

    </Container>
  );
}

export default index;
