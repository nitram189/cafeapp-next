import { useCafe } from "@/hooks/useCafe";
import Image from "next/image";



export default function Category({ category }) {

    const { id, name, icon } = category;
    const { currentCategory, handleCurrentCategory } = useCafe();


  return (
    <div className={`flex gap-5 px-2 items-center border border-red-950/60 hover:bg-gradient-to-t from-red-700/90 to-red-800/90 duration-100 ease-in rounded ${ currentCategory?.id === id ? 'bg-gradient-to-r from-red-700/90 to-red-800/90' : '' }`}>

      <Image
        src={`/assets/img/icono_${ icon }.svg`}
        alt={`${ name } image`}
        width={50}
        height={50}
        />
    
      <button
        onClick={() => handleCurrentCategory( id )}
        className={`w-full py-5 text-left font-bold text-amber-950 text-lg hover:text-orange-100 duration-100 ease-in ${ currentCategory?.id === id ? 'text-orange-100' : ''}`}
        type="button">
          { name }
      </button>

    </div>
  )
}
