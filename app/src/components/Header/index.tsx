import React, { ChangeEvent, useRef } from 'react';

import axios from 'axios';

import CSV from '../../interfaces/interfaces';

import {Container} from './styles';

interface HeaderProps {
  onCsvUpload: (data: CSV[]) => void; // Ajuste a tipagem para aceitar uma função que recebe um array de CsvData
}

function index({onCsvUpload}: HeaderProps) {

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      // Faça o que você precisa fazer com o arquivo CSV aqui
      console.log(`Arquivo selecionado: ${file.name}`);
      try {
        const formData = new FormData();
        formData.append('file', file);

        // Envie o arquivo para a API usando o Axios
        const response = await axios.post('http://localhost:3000/api/files', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        // Faça algo com a resposta da API, se necessário
        console.log('Resposta da API:', response.data);
        onCsvUpload(response.data);
      } catch (error) {
        console.error('Erro ao enviar o arquivo:', error);
      }
    }
  };

  return (
    <Container>
      <input
        type="file"
        accept=".csv"
        style={{ display: 'none' }}
        onChange={handleFileUpload}
        ref={fileInputRef}
      />
      <button onClick={() => fileInputRef.current?.click()}>Select CSV</button>
    </Container>
  );
}

export default index;
