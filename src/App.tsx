import React, {useEffect, useState} from 'react';
import './App.css';
import Kanban from "./model/Kanban";
import TableHead from "./TableHead";
import TableColumn from "./TableColumn";
import {Item} from "./model/Item";
import Coluna from "./model/Coluna";

const App: React.FC = () => {
  let itemArrastado: Item;
  let colunaSelecionada: Coluna;
  const [kanban, setKanban] = useState<Kanban>();
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    await fetch('http://localhost:8080/kanban/147')
        .then(response => response.json())
        .then(json => setKanban(json))
        .catch(error => console.error(error));
  }

  const dragStart = (item: Item) => {
      itemArrastado = item;
  }

  const dragEnd = () => {
      mudaItemColuna();
  }

  const dragOver = (event: React.DragEvent<HTMLDivElement>, coluna: Coluna) => {
      colunaSelecionada = coluna;
  }

  const mudaItemColuna = async () => {
      await fetch('http://localhost:8080/kanban/147/item/' + itemArrastado.id + '?idColunaDestino=' + colunaSelecionada.idColuna, {
          method: 'PUT',
          headers: new Headers({
              'Content-Type': 'application/json',
              'Accept': 'application/json'
          })
      })
          .then(response => reload(response))
          .catch(error => console.log(error));
  }

  const reload = async (response: Response) => {
      if(response.status < 400) {
          window.location.reload();
      } else {
          const body = await response.json();
          window.alert(body.message);
      }
  }

  return (
    <div >
      <div className="flex flex-row h-10 center mx-auto w-3/4">
          {kanban?.colunas.map((coluna) => <TableHead key={coluna.idColuna} nome={coluna.nome} />)}
      </div>
      <div className="flex flex-row center mx-auto w-3/4">
          {kanban?.colunas.map((coluna) => <TableColumn key={coluna.idColuna} coluna={coluna} dragStart={dragStart} dragEnd={dragEnd} dragOver={dragOver} />)}
      </div>
      <div className="grid my-4 place-content-center">
        <button className="bg-blue-700 content-center rounded w-16 h-16" ><a href={"/item"}>+</a></button>
      </div>
    </div>
  );
}

export default App;
