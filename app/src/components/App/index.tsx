import React, { useState } from 'react';

import { GlobalStyles } from '../../assets/styles/GlobalStyles';

import Header from '../Header';
import Cards from '../Cards';

import CSV from '../../interfaces/interfaces';

function index() {
  const [csvData, setCsvData] = useState<CSV[]>([]); // Estado para armazenar os dados do CSV

  const handleCsvUpload = (data: CSV[]) => {
    // Esta função será chamada pelo Header para atualizar os dados do CSV
    setCsvData(data);
  };

  return (
    <>
      <GlobalStyles />
      <Header onCsvUpload={handleCsvUpload}/>
      <Cards csvData={csvData}/>
    </>
  );
}

export default index;
