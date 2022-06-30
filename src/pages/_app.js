import '@styles/globals.css'
import "@styles/numpad.css"
import "@styles/elevator.css"
import { ProviderNumpad } from "@hooks/useNumpad"
import { ProviderFloorpad } from "@hooks/useFloorPad"


function MyApp({ Component, pageProps }) {
  return (
    <>
      <ProviderNumpad>
        <ProviderFloorpad>
          <Component {...pageProps} />
        </ProviderFloorpad>
      </ProviderNumpad>
    </>
  ) 
}

export default MyApp
