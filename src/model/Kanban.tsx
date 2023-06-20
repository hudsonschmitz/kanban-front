import Coluna from "./Coluna";


interface Kanban {
    idKanban: string;
    colunas: Coluna[];
    nome: string;
}

export default Kanban