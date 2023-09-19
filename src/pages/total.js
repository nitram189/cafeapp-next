import { moneyFormat } from "@/helpers";
import { useCafe } from "@/hooks/useCafe";
import Layout from "@/layout/Layout";
import { useEffect, useState } from "react";

export default function index() {

  const { order, total, handleTotal, userName, handleUserName, postOrder } = useCafe();

  useEffect(() => {
    const totalToPay = order.reduce((total, item) => ( item.price * item.quantity ) + total, 0);
    handleTotal( totalToPay )
  }, [ order ]);

  useEffect(() => {
     grayButton()
  }, [ order, userName ])

  const grayButton = () => {
    return order.length === 0 || userName.length <= 2
   }

  return (
    <Layout page='total'>
     <div className="p-5">
       <h1 className="text-4xl font-bold text-amber-950">Total</h1>
       <p className="font-bold text-xl text-amber-950 paragraph mt-3">Please enter your name and proceed to the counter</p>

       <form
        className="mt-5 bg-orange-50 w-3/4 lg:w-1/2 rounded p-5 grid gap-5 text-amber-950"
        onSubmit={ postOrder }>

        <div className="flex flex-col gap-3">
          <label
            htmlFor="name"
            className="font-semibold">Name</label>
          <input
            type="text"
            id="name"
            value={ userName}
            onChange={e => handleUserName( e.target.value )}
            autoComplete="off"
            className="px-2 bg-transparent border-b border-red-800 outline-orange-300 text-lg" /> 
        </div>

        <div>
          <p className="font-semibold text-xl">Total to pay: { moneyFormat(total) }</p>
        </div>

        <div>
          <button 
            type="submit"
            disabled={ grayButton() }
            className={`text-lg w-1/2 border-2 rounded ${ grayButton() ? 'border-gray-300 text-gray-300 font-semibold bg-gray-100' : 'font-semibold border-2 border-amber-950 rounded hover:bg-gradient-to-b from-red-700 to-red-900 hover:text-orange-100'}`}>
              confirm order
          </button>
        </div>
       </form>

     </div>

     
     
    </Layout>
  )
}
