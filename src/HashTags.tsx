import React from 'react';
import './App.css';

interface Props {
    hashTag: string; // Use a interface criada para definir o tipo da prop
}

const HashTags: React.FC<Props> = ({ hashTag }) => {
    return (
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{hashTag}</span>
    );
};

export default HashTags;