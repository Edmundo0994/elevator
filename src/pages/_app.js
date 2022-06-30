import '../styles/globals.css'
import "../styles/numpad.css"
import { ProviderNumpad } from "@hooks/useNumpad"


function MyApp({ Component, pageProps }) {
  return (
    <>
      <ProviderNumpad>
        <Component {...pageProps} />
      </ProviderNumpad>
    </>
  ) 
}

export default MyApp
