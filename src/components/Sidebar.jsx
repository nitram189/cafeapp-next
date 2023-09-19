import { useCafe } from "@/hooks/useCafe";
import Image from "next/image";
import Category from "./Category";


export default function Sidebar() {

    const { categories } = useCafe();

  return (
    <>
      <div className="flex justify-center items-center">
        <Image
          src='/assets/img/logo.svg'
          alt='the cafeapp logo'
          width={200}
          height={200}
          className="p-5"/>
      </div>

      <nav className="mt-5">
        { categories?.map( category => (
            <Category
                key={ category.id }
                category={ category }/>
        ))}
      </nav>
    </>
  )
}
