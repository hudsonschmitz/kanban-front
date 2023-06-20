import React from 'react';
import Item from './Item';
import Coluna from "./model/Coluna";


interface Props {
  coluna: Coluna;
  dragStart: any;
  dragEnd: any;
  dragOver: any;
}

const TableColumn: React.FC<Props> = ({ coluna, dragStart, dragEnd, dragOver}) => {
  return (
    <>
      <div className="basis-2/4 border-solid rounded border-2 border-purple-900 " onDragEnd={(event) => dragEnd()} onDragOver={(event) => dragOver(event, coluna)}>
          {coluna.itens.map((item) => <Item key={item.id} item={item} dragStart={dragStart} /> )}
      </div>
    </>
  );
};

export default TableColumn;