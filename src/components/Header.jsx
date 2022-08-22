import React from 'react';
import { BiPhoneCall } from "react-icons/bi";
import {AiOutlineShoppingCart} from "react-icons/ai"
import logo from '../images/logo.png'


const Header = ({setIsShowCart,cart}) => {
    return (
        <div className=' flex items-center justify-between py-1 mx-auto bg-slate-800 text-white py-5  '>
          <div>
          <img className='w-20  h-12 ml-10 cursor-pointer' src={logo} />
          </div>

           <div className='flex items-center'>
           <BiPhoneCall className='text-[30px] mr-2' />
                <div>
                    <p className=''>Call to buy</p>
                    <p>0177777786</p>
                </div>
            </div>

          <div className='flex items-center mr-12'>
           
              <div className='relative' onClick={() => setIsShowCart(true)}>
                <AiOutlineShoppingCart className='text-[24px] cursor-pointer' />
                {cart.length > 0 && (
                  <span className='bg-blue-700 text-white w-5 h-5 rounded-full absolute -top-4 left-2 text-center leading-5 '>{cart.length}</span>
                ) }
                
              </div>
          </div>
        </div>
    );
};

export default Header;