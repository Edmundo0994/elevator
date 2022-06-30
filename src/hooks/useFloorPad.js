import { createContext, useState, useContext } from "react";

const FloorpadContext = createContext()

export function ProviderFloorpad({ children }){
    const floorpad = useProviderFloorpad()
    return <FloorpadContext.Provider value={floorpad}>{children}</FloorpadContext.Provider>
}

export const useFloorpad = () => {
    return useContext(FloorpadContext)
}

function useProviderFloorpad(){
  const [floorpad, setFloorpad] = useState({
    0: {upPressed: false, downPressed: false},
    1: {upPressed: false, downPressed: false},
    2: {upPressed: false, downPressed: false},
    3: {upPressed: false, downPressed: false},
    4: {upPressed: false, downPressed: false},
    5: {upPressed: false, downPressed: false},
    6: {upPressed: false, downPressed: false},
  })

  const setPressOnFloorpad = async (floor, direction) => {
    if (direction == "down"){
      const newObject = {...floorpad}
      newObject[floor].downPressed = true
      setFloorpad(newObject)
    } else {
      const newObject = {...floorpad}
      newObject[floor].upPressed = true
      setFloorpad(newObject)
    }
  }

  const unSetPressOnFloorpad = async (floor, direction) => {
    if (direction == "down"){
      const newObject = {...floorpad}
      newObject[floor].downPressed = false
      setFloorpad(newObject)
    } else {
      const newObject = {...floorpad}
      newObject[floor].upPressed = false
      setFloorpad(newObject)
    }
  }

  return {
    setPressOnFloorpad,
    unSetPressOnFloorpad,
    floorpad
  }
}