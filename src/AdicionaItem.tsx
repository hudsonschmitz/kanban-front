import React, {useState} from "react";


const AdicionaItem: React.FC = () => {
  const [descricao, setDescricao] = useState('')
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescricao(event.target.value);
  }
  const adicionaItem = () => {

   fetch('http://localhost:8080/kanban/147/item/', {
      method: 'POST',
      body: JSON.stringify({descricao, hashTags: null, idColuna: 599}),
      headers: new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    })
  }
  return (
    <>
      <div className="w-full max-w-xs mx-auto grid place-content-center">
        <form className="bg-white shadow-md rounded w-screen px-8 pt-6 pb-8 mb-4">
          <div className="mb-4 w-full">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="descricao">
              Descrição
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="descricao" type="text" placeholder="Descrição" onChange={(event) => onChange(event)} />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button" onClick={(event) => adicionaItem()}>
              Criar
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AdicionaItem;