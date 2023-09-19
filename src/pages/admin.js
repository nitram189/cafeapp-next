import useSWR from 'swr'
import AdminLayout from "@/layout/AdminLayout";
import axios from 'axios';
import AdminOrder from '@/components/AdminOrder';


export default function Admin() {

  const fetcher = () => axios('/api/orders').then( info => info.data )
  const { data, error, isLoading } = useSWR('/api/orders', fetcher, { refreshInterval: 100 })


  return (
    <AdminLayout page='admin'>
      <h1 className="text-4xl font-bold text-amber-950">Administration panel</h1>
      <p className="font-bold text-xl text-amber-950 paragraph mt-3">Manage all the orders from here</p>

      { data && data.length 
        ? (data.map(adminOrder => (
            <AdminOrder
              key={ adminOrder.id }
              adminOrder={ adminOrder }/>
        )))
        : <p className='text-center pt-10 text-xl text-orange-900 font-semibold'>There are no orders in the queue :D</p> }

    </AdminLayout>
  )
}
