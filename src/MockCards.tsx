export interface Cards {
    id: number,
    descricao: string,
    hashTags: string[],
    stage: number
}

let cards: Cards[] = [
    {
        id: 1,
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit1.',
        hashTags: ['#photography', '#travel', '#winter'],
        stage: 1,
    } ,
    {
        id: 2,
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit2.',
        hashTags: ['#photography', '#travel', '#winter'],
        stage: 1
    },
    {
        id: 3,
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit3.',
        hashTags: ['#photography', '#travel', '#winter'],
        stage: 2
    },
    {
        id: 4,
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit4.',
        hashTags: ['#photography', '#travel', '#winter'],
        stage: 3
    },
    {
        id: 5,
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit5.',
        hashTags: ['#photography', '#travel', '#winter'],
        stage: 4
    },
    {
        id: 6,
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit6.',
        hashTags: ['#photography', '#travel', '#winter'],
        stage: 5
    }
];

function LoadCards() {
    
    return cards;
}
  
export default LoadCards;