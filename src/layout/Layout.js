import ProductModal from "@/components/ProductModal";
import Sidebar from "@/components/Sidebar";
import Steps from "@/components/Steps";
import { useCafe } from "@/hooks/useCafe";
import Head from "next/head";
import Modal from 'react-modal';
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

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      padding: '0',
      width: '80%'
    },
  };

Modal.setAppElement('#__next');

export default function Layout({ children, page }) {

    const { modal, handleModal } = useCafe();

  return (
    <>
      <Head>
        <title>thecafeapp - { page }</title>
        <meta name="description" content="coffee shop, cakes, pizzas, burgers and more" />
      </Head>

      <div className="sm:flex bg-orange-100">

        <aside className="sm:w-1/4 lg:w-1/5">
          <Sidebar />
        </aside>

        <main className="sm:w-3/4 lg:w-4/5 h-screen overflow-y-scroll pb-10">
          <Steps />
          { children }
        </main>

      </div>
      
      { Modal && (
        <Modal
          isOpen={ modal }
          onRequestClose={ handleModal }
          style={ customStyles }>
            <ProductModal/>
        </Modal>
      )}

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
