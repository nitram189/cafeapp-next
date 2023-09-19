import { moneyFormat } from "@/helpers";
import { useCafe } from "@/hooks/useCafe"
import Image from "next/image";
import { useState } from "react";


export default function ProductModal() {

    const { product, handleModal, handleOrder, order } = useCafe();
    const { id, name, price, image } = product;
    const [ edit, setEdit ] = useState(false);

    const initialQuantity = () => {
      const itemState = order?.find( productState => productState.id === id )
      if( itemState ) {
        setEdit(true)
        return itemState.quantity
      }
      return 1
    }

    const [ quantity, setQuantity ] = useState(initialQuantity);
   

  return (
   <div className="flex gap-5 rounded-lg p-5 bg-gradient-to-t from-orange-100 to-amber-200/50 items-center text-red-900">

      <div className="w-1/5">
        <Image
          src={`/assets/img/${ image }.jpg`}
          alt={`${ name } logo`}
          width={400}
          height={400}
          className="rounded"
          />
      </div>
      
      <div className="flex flex-col gap-3 w-3/5">
        <h3 className="text-2xl font-bold text-red-900">{ name }</h3>
        <p className="text-3xl font-bold text-red-700">{ moneyFormat( price ) }</p>

      <div className="flex gap-3 items-center">
        <button
          onClick={() => {
            if( quantity <= 1 ) return;
            setQuantity( quantity - 1 )
          }}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </button>

        <p className="text-2xl font-medium text-center">{ quantity }</p>

        <button
          onClick={() => {
            if( quantity >= 10 ) return;
            setQuantity( quantity + 1 )
          }}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>

        </button>
      </div>

      <button
        type="button"
        onClick={() => {
            handleModal()
            handleOrder({
              ...product,
              quantity
            })
        }}
        className="font-semibold text-lg w-1/2 text-red-900 border-2 py-1 rounded-md border-red-900 hover:bg-gradient-to-b from-red-700 to-red-900 hover:text-orange-100">
          { edit ? 'save changes'  : 'add to cart' }
      </button>
      </div>

      <button
        onClick={() => handleModal()}
        className="absolute top-5 right-5">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </button>
    </div> 
  )
}
