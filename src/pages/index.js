

import Product from "@/components/Product";
import { useCafe } from "@/hooks/useCafe";
import Layout from "@/layout/Layout";

export default function Index() {

  const { currentCategory } = useCafe();

  return (
    <Layout page={ currentCategory?.name }>
      <div className="p-5">
        <h1 className="text-4xl font-bold text-amber-950">{ currentCategory?.name }</h1>
        <p className="font-bold text-xl text-amber-950 paragraph mt-3">Start selecting your favorites</p>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          { currentCategory?.products?.map( product => (
            <Product
              key={ product.id }
              product={ product }/>
          ))}
        </div>
      </div>
    </Layout>
  )
}
