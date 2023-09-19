import Head from "next/head";
import Image from "next/image";
import { ToastContainer } from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';

const contextClass = {
    success: "bg-gradient-to-r from-red-700/90 to-red-900/90 text-lg",
    error: "bg-red-600",
    info: "bg-gray-600",
    warning: "bg-orange-400",
    default: "bg-indigo-600",
    dark: "bg-white-600 font-gray-300",
  };

export default function AdminLayout({ children, page }) {

    
  return (
    <>
      <Head>
        <title>thecafeapp - { page }</title>
        <meta name="description" content="coffee shop, cakes, pizzas, burgers and more" />
      </Head>

      <div className="sm:flex bg-orange-100">

        <aside className="sm:w-1/4 lg:w-1/5">
          <Image
            src='/assets/img/logo.svg'
            alt='the cafeapp logo'
            width={200}
            height={200}
            className="p-5"/>
        </aside>

        <main className="sm:w-3/4 lg:w-4/5 h-screen overflow-y-scroll p-5">
          { children }
        </main>

      </div>
      
    <ToastContainer
      toastClassName={({ type }) => contextClass[type || "default"] +
        " relative flex p-1 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer"
      }
      bodyClassName={() => "font-white block p-3"}
      position="bottom-left"
      autoClose={3000}/>

    </>
  )
}
