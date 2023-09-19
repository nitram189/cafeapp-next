import axios from "axios";
import { useRouter } from "next/router";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";


export const CafeContext = createContext();

export const CafeProvider = ({ children }) => {

    const [ categories, setCategories ] = useState([]);
    const [ currentCategory, setCurrentCategory ] = useState({});
    const [ product, setProduct ] = useState({});
    const [ modal, setModal ] = useState( false );
    const [ order, setOrder ] = useState([]);
    const [ total, setTotal ] = useState(0);
    const [ userName, setUserName ] = useState('');

    const router = useRouter();

    useEffect(() => {
      getCategories();
    }, []);
    
    useEffect(() => {
      setCurrentCategory( categories[0] )
    }, [ categories ]);

    const getCategories = async () => {
      try {
        const { data } = await axios('/api/categories')
        setCategories( data )
      } 
      catch (error) {
        console.log(error)  
      }
    }

    const handleCurrentCategory = id => {
      const selectedCategory = categories?.find( category => category.id === id )
      setCurrentCategory( selectedCategory )
      router.push('/')
    }
    const handleProduct = item => {
      setProduct( item )
    }
    const handleModal = () => {
      setModal( !modal )
    }

    const handleOrder = newProduct => {
      if( order.some( productState => productState.id === newProduct.id)){
        const updatedOrder = order.map( productState => productState.id === newProduct.id ? newProduct : productState )
        setOrder( updatedOrder )
        toast.success('order updated :)')
      }
      else {
        setOrder([...order, newProduct])
        toast.success('new item added :)')
      }
    }
    const editProduct = id => {
      const selectedProduct = order.find( itemState => itemState.id === id );
      setProduct( selectedProduct )
    }
    const deleteItem = id => {
      const updatedOrder = order.filter( itemState => itemState.id !== id );
      setOrder( updatedOrder )
    }
    const handleTotal = moneyValue => {
      setTotal( moneyValue )
    }
    const handleUserName = user => {
      setUserName( user )
    }

    const postOrder = async e => {
      e.preventDefault();
      try {
        await axios.post('/api/orders', {
          order,
          userName,
          total,
          date: new Date().toString()
        })

        setCurrentCategory(categories[0]);
        setOrder([]);
        setTotal(0);
        setUserName('');

        toast.success( 'order succesufully created' );
        setTimeout(()=> {
          router.push('/')
        }, 3000)
      }
      

      catch (error) {
        
      }
    }

    return (
      <CafeContext.Provider
        value={{
          categories,
          currentCategory,
          handleCurrentCategory,
          handleProduct,
          product,
          handleModal,
          modal,
          handleOrder,
          order,
          editProduct,
          deleteItem,
          total,
          handleTotal,
          userName,
          handleUserName,
          postOrder
        }}>
          { children }
      </CafeContext.Provider>
    )
}