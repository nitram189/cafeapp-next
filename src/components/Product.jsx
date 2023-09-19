import Image from "next/image";
import { useCafe } from "@/hooks/useCafe";
import { moneyFormat } from "@/helpers";


export default function Product({ product }) {

  const { id, name, price, image } = product;
  const { handleProduct, handleModal } = useCafe();  

  return (
    <div className="flex flex-col gap-5 items-center shadow-xl p-5 bg-orange-50 rounded-lg justify-between">

      <div>
        <Image
          src={`/assets/img/${ image }.jpg`}
          alt={`${ name } logo`}
          width={200}
          height={200}
          className="rounded"
          />
      </div>
      
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-bold text-amber-950">{ name }</h3>
        <p className="text-2xl font-bold text-red-700">{ moneyFormat( price ) }</p>
      </div>

      <div>
        <button
          type="button"
          onClick={() => {
            handleProduct( product )
            handleModal()
          } }
          className="text-xl font-semibold text-red-950 border-2 px-10 py-1 rounded-md border-red-950 hover:bg-gradient-to-b from-red-700 to-red-900 hover:text-orange-100">
            add to cart
        </button>
      </div>
    </div>
  )
}
