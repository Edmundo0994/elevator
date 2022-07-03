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
	const [direction, setDirection] = useState(null)
	const [currentFloor, setCurrentFloor] = useState(0)
	const [numpad, setNumpad] = useState({
		0: false,
		1: false,
		2: false,
		3: false,
		4: false,
		5: false,
		6: false,
		7: false,
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

	const setOnMovement = async (direction) => {
		setDirection(direction)
	}

	return {
		setFloorNumpad,
		unSetFloorNumpad,
		setOnMovement,
		direction,
		setCurrentFloor,
		currentFloor,
		numpad
	}
}