import { moneyFormat } from "@/helpers";
import { useCafe } from "@/hooks/useCafe";
import Image from "next/image";



export default function SummaryList({ item }) {
  
    const { id, price, name, image, quantity } = item;
    const { deleteItem, handleModal, editProduct } = useCafe();

  return (
    <div className="flex gap-5 items-center shadow bg-gradient-to-t from-orange-100/90 to-orange-200/50 text-red-900">
      <div className="w-1/5">
        <Image
          src={`/assets/img/${ image }.jpg`}
          alt={`${ name } image`}
          width={150}
          height={150}
          className="rounded"/>
      </div>
      
      <div className="w-3/5">
        <h3 className="font-bold text-xl">{ name }</h3>
        <p className="font-semibold">{ moneyFormat(price) }</p>
        <p className="font-semibold">Quantity: { quantity }</p>
        <p className="font-bold text-lg text-amber-950">Subtotal: { moneyFormat(quantity * price) }</p>
      </div>

      <div className="w-1/5 px-2">
        <button
          type="button"
          onClick={() => {
            handleModal()
            editProduct( id )
          }}
          className="w-full font-semibold py-1 px-4 rounded-md bg-gradient-to-b from-green-800 to-green-800 text-orange-100 hover:bg-gradient-to-b hover:from-green-700 hover:to-green-800">
            details
        </button>

        <button
          type="button"
          onClick={() => deleteItem( id )}
          className="w-full font-semibold py-1 px-4 rounded-md bg-gradient-to-b from-red-800 to-red-800 text-orange-100 hover:bg-gradient-to-b hover:from-red-700 hover:to-red-800 mt-5">
            delete
        </button>
      </div>

      
    </div>
  )
}
