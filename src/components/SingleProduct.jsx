import React from 'react';

const SingleProduct = ({product, handleAddToCart}) => {
    const DollarUsd = new Intl.NumberFormat('en-US',{
        style:'currency',
        currency:'USD',
    })



    return (
        <div className='flex-1 flex flex-col self-stretch items-center min-w-[250px] border-2 border-lime-100 px-2 mr-2 mb-2 rounded-lg'>
         <div className='w-[100px]'>
              <img className='w-full h-full' src={product.img} alt={product.name} />
        </div>
        <h3>{product.name}</h3>
        <p className='text-red-700 font-bold'>{DollarUsd.format(product.price)}</p>
        <button
        onClick={() => handleAddToCart(product)}
         className='bg-gray-900 w-full rounded-lg text-white py-1 mt-auto hover:bg-slate-700 hover:text-red-500'> Buy now</button>
        </div>
    );
};

export default SingleProduct;