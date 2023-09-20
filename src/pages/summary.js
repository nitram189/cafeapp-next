
import SummaryList from "@/components/SummaryList";
import { useCafe } from "@/hooks/useCafe";
import Layout from "@/layout/Layout";


export default function Summary() {

  const { order } = useCafe();

  return (
    <Layout page='cart'>
      <div className="p-5">
        <h1 className="text-4xl font-bold text-amber-950">Order</h1>
        <p className="font-bold text-xl text-amber-950 paragraph mt-3">Check and confirm your order </p>
      </div>

      <div className="px-5 grid gap-5">
        { order.length === 0
            ? <p className="text-center text-lg text-amber-950">There are no items to show yet :/</p>
            : (  order?.map( item => (
                <SummaryList
                  key={ item.id }
                  item={ item }/>
            ) ) ) } 
      </div>

    </Layout>
  )
}
