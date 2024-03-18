import React from 'react'
// import MenuItemList from './MenuItemList';
import { useDispatch, useSelector } from 'react-redux';
import MenuItemList from './MenuItemList';
import { ClearItem } from '../Utils/CartSlice';

 const Cart = () => {
const CartItems = useSelector((store)=>store.cart.item)
console.log(CartItems)
const dispatch = useDispatch()
const handelclear =()=>
{
dispatch(ClearItem())
}

  return (
    <div className='text-center m-10 flex justify-center'>

    <div className=' w-6/12'>Cart
    <button className='p-2 m-2 bg-black text-white 'onClick={handelclear}>Clear Cart</button>
    {CartItems.length===0 && <h1 className='font-bold text-2xl my-20'>Please Add items to the Cart😒</h1>}
    <MenuItemList items={CartItems}></MenuItemList>
    </div>
    </div>
  )
}
export default Cart;