import { CafeProvider } from '@/context/CafeProvider'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  
  return (
    <CafeProvider>
      <Component {...pageProps} />
    </CafeProvider>
  )
}
