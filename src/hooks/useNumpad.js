import { createContext, useState, useContext } from "react";

const NumpadContext = createContext()

export function ProviderNumpad({ children }){
    const numpad = useProviderNumpad()
    return <NumpadContext.Provider value={numpad}>{children}</NumpadContext.Provider>
}

export const useNumpad = () => {
    return useContext(NumpadContext)
}

function useProviderNumpad(){
    const [numpad, setNumpad] = useState({
        0: false,
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
        direction: null,
    })

    const setFloorNumpad = async (floor) => {
        const newNumpad = {...numpad}
        newNumpad[floor] = true
        setNumpad(newNumpad)
    }

    const unSetFloorNumpad = async (floor) => {
        const newNumpad = {...numpad}
        newNumpad[floor] = false
        setNumpad(newNumpad)
    }

    const setDirection = async (direction) => {
        const newNumpad = {...numpad}
        newNumpad.direction = direction;
        setNumpad(newNumpad)
    }


    return {
        setFloorNumpad,
        unSetFloorNumpad,
        setDirection,
        numpad
    }
}