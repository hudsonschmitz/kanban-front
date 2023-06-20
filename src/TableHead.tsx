import React from 'react';
import './App.css';

interface Props {
    nome: string
}

const TableHead: React.FC<Props> =  ({nome}: Props) => {
  return (
      <div className="basis-1/4 border-solid rounded border-2 border-purple-900 flex justify-center">{nome}</div>
  );
};

export default TableHead;