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
    0: {upPressed: false, floor: 0},
    1: {upPressed: false, downPressed: false, floor: 1},
    2: {upPressed: false, downPressed: false, floor: 2},
    3: {upPressed: false, downPressed: false, floor: 3},
    4: {upPressed: false, downPressed: false, floor: 4},
    5: {downPressed: false, floor: 5},
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
    floorpad,
  }
}