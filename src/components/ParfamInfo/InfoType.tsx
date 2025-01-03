import { useState } from "react";

import { useStore } from '@nanostores/react';
import { selectedSize } from '../../store';

import type { Type } from "@/interfaces/parfam-with-images.interface";


export interface Props {
  types: Type[];
}

const InfoType: React.FC<Props> = ({ types }) => {

  const size = useStore(selectedSize);

  const handleSelect = (newSize: string) => {
      selectedSize.set(newSize); 
  };

  return (
    <div className="flex sm:flex-row flex-col gap-4">
      {types.map((type) => (
        <div
          key={type.size}
          className = 'lg:w-1/4 md:w-1/3 sm:w-1/2 w-full cursor-pointer'         
        >
          <div 
          className={`h-full p-6 rounded-lg border-2 flex flex-col relative overflow-hidden ${
            size === type.size ? "border-principal" : "border-gray-400"
          }`}
          onClick={() => handleSelect(type.size)}
          >
            <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
              PRESENTACIÓN
            </h2>
            <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
              <span>{type.size}</span>
              <span className="text-lg ml-1 font-normal text-gray-500">/ML</span>
            </h1>
            <p className="flex items-center text-gray-600">S/ {type.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InfoType;