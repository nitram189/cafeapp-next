import { moneyFormat } from "@/helpers";
import axios from "axios";
import Image from "next/image";
import { toast } from "react-toastify";


export default function AdminOrder({ adminOrder }) {

  const { id, name, total, order } = adminOrder;

  const completeOrder = async () => {
    try {
      const { data } = await axios.post(`/api/orders/${ id }`)
      toast.success('Order completed :)')
    }
    catch (error) {
      console.log(error)
      toast.success('Ups! Something went wrong :/')
    }
  }
  

  return (
    <div className="border border-red-800 p-5 mt-5 rounded bg-orange-50">
      
      <div className="border-b pb-2 border-red-700">
        <h3 className="font-semibold text-xl text-red-950">Order: { id }</h3>
        <p className="font-semibold text-xl text-red-950">Customer: { name }</p>
      </div>

      <div>
        { order.map( command => (
            <div
              key={ command.id }
              className="flex p-3 shadow rounded">
              <div>
                <Image
                  src={`/assets/img/${ command.image }.jpg`}
                  alt={`${ command.name } image`}
                  width={70}
                  height={70}
                  className="rounded" />
              </div>
              <div className="p-3">
                <h3 className="font-semibold text-xl text-amber-950">{ command.name }</h3>
                <p  className="font-semibold text-xl text-amber-900">Quantity: { command.quantity }</p>
              </div>
            </div>
        ))}
          <div className="pt-5 sm:flex justify-between">

            <p className="text-2xl font-semibold text-red-950">Total to pay: {moneyFormat( total )}</p>

            <button
              type="button"
              onClick={ completeOrder }
              className="text-xl font-semibold border-2 px-5 py-1 rounded-md border-red-950 bg-gradient-to-b from-red-700 to-red-900 text-orange-100 hover:bg-gradient-to-b hover:from-red-600 hover:to-red-800 sm:mt-0 mt-5">
                complete order
            </button>
          </div>
      </div>
    </div>
  )
}
