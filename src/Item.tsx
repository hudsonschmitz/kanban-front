import React from 'react';
import './App.css';
import HashTags from './HashTags';
import { Item as ItemKanban } from './model/Item';

interface Props {
    item: ItemKanban; // Use a interface criada para definir o tipo da prop
    dragStart: any;
}

const Item: React.FC<Props> = ({ item, dragStart }) => {
    return (
        <div className="border-solid border my-2 max-w-sm rounded overflow-hidden shadow-md dragable-element" key={item.id} draggable onDragStart={(event) => dragStart(item)} >
            <div className="px-3 py-1">
                <p className="text-gray-700 text-base">
                    {item.descricao}
                </p>
            </div>
            <div className="px-2 pt-2 pb-2">
                {!item.hashTags ? null : item.hashTags.map((hashTag, index) =>
                    <HashTags key={index} hashTag={hashTag} />
                )}
            </div>
        </div>
    );
};

export default Item;