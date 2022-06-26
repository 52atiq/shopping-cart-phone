import React from 'react';
import { BiPhoneCall } from "react-icons/bi";
import {AiOutlineShoppingCart} from "react-icons/ai"


const Header = ({setIsShowCart,cart}) => {
    return (
        <div className=' flex items-center justify-between py-1  mx-auto bg-red-500 text-white  '>
          <h2 className='ml-10'>Logo</h2>
          <div className='flex items-center mr-12'>
            <div className='flex items-center'>
           <BiPhoneCall className='text-[30px] mr-2' />
                <div>
                    <p className=''>call to buy</p>
                    <p>012358686</p>
                </div>
            </div>
              <div className='relative' onClick={() => setIsShowCart(true)}>
                <AiOutlineShoppingCart className='text-[24px]' />
                {cart.length > 0 && (
                  <span className='bg-blue-700 text-white w-5 h-5 rounded-full absolute -top-4 left-2 text-center leading-5'>{cart.length}</span>
                ) }
                
              </div>
          </div>
        </div>
    );
};

export default Header;