import { useRef } from 'react'
import { QueryClient, QueryClientProvider } from "react-query";
import './index.scss'

const App = ({ Component, pageProps}) => {
   const clinetRef = useRef(null)
  const getClient = () => {
      if(!clientRef.current) clinetRef.current = new QueryClient()
    return clinetRef.current
   }
    return (
    <QueryClientProvider Client={getClient()} >
        <Component {...pageProps} />
    </QueryClientProvider>
    )
}
App.getInitialProps = async ({ ctx, Component}) => {
    const pageProps = await Component.getInitialProps ?.(ctx)
    return { pageProps}
}

export default App