import { Item } from "./Item";


interface Coluna {
    idColuna: number;
    nome: string;
    stage: number;
    itens: Item[];
}

export default Coluna