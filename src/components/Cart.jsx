import React, { useRef } from 'react';
import {AiFillPlusSquare,AiOutlineMinusSquare } from 'react-icons/ai'


const Cart = ({setIsShowCart,cart,handleAddToCart, handleRemoveFromCart}) => {
  
    const total = (arr) =>{
        return arr.reduce((cal, item) =>{
            return cal + item.price * item.amount;
        }, 0)
    }

    const DollarUsd = new Intl.NumberFormat('en-US',{
        style:'currency',
        currency:'USD',
    })
    const cartRef = useRef()
  const handleCloseCart =() =>{
 cartRef.current.classList.remove('animate-fade-in')
 cartRef.current.classList.add('animate-fade-out')
   setTimeout(() =>{
    setIsShowCart(false)
   }, 300)
  }
    return (
        <div className='fixed inset-0 bg-[rgba(0,0,0,0.7)' 
        // onClick={() => setIsShowCart(false)}>
        onClick={handleCloseCart}>
            <div
            ref={cartRef}
            onClick={(e) => e.stopPropagation()}
             className='bg-white w-[250px] h-full absolute right-0 overflow-y-scroll animate-fade-in' 
             >
                <h1 className='bg-red-400 py-2 text-center text-white'>Cart</h1>
                <div className='flex flex-col items-center px-2 py-4'>
                    {cart.map((item) => (
                     <div key={item.id} className='text-center border-b-[3px] w-full mb-2 flex flex-col items-center'>
                        <img src={item.img} alt={item.name} className='w-[100px] h-[100px]' />
                        <p className='bg-amber-500 text-white rounded-full font-bold w-6 h-6'>{item.amount}</p>
                        <h3 className='text-[0.8rem]'>{item.name}</h3>
                       <div className='flex items-center my-2'>
                       <button onClick={() => handleRemoveFromCart(item.id)}> <AiOutlineMinusSquare  className='text-[30px]'/> </button>
                       <p className='text-red-600  mx-2'>{DollarUsd.format(item.price)}</p>
                       <button onClick={() => handleAddToCart(item)}> <AiFillPlusSquare className='text-[30px]' /> </button>
                       </div>
                    </div>
                    ) )}
                    {cart.length > 0 &&  <p>Total:{DollarUsd.format(total(cart))}</p> }
                   
                </div>
            </div>
            
        </div>
    );
};

export default Cart;