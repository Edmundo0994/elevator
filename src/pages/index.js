import Numpad from '@components/Numpad'
import Floor from '@components/Floor'
import { useEffect, useState } from 'react'
import { useFloorpad } from "@hooks/useFloorPad"
import { useNumpad } from "@hooks/useNumpad"

export default function Home() {
  const {setPressOnFloorpad, unSetPressOnFloorpad, floorpad} = useFloorpad()
  const {direction, currentFloor, setCurrentFloor, numpad} = useNumpad()

  useEffect(() => {
    console.group("Message")
    console.log("Direction: ", direction)
    console.log("FloorPad: ", floorpad)
    console.log("Numpad: ", numpad)
    console.log("CurrentFloor: ", currentFloor)
    console.groupEnd("Message")
    putInMovement()
  }, [floorpad, numpad])

  const putInMovement = async () => {
    const floors = Object.keys(floorpad)
    const pressedFloorBotton = floors.find(floor => floorpad[floor].upPressed === true || floorpad[floor].downPressed === true)
    const pressedNumpadButton = floors.find(button => button.pressed === true)
    console.log(pressedFloorBotton)
  }

  return (
    <div className='main-container'>
      <Numpad />
      <Floor />
    </div>
  )
}
