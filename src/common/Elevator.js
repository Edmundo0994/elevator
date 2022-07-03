import Image from "next/image"
import openElevator from "@images/open.png"
import closedElevator from "@images/closed.png"
import { useEffect, useRef } from "react"
import { useFloorpad } from "@hooks/useFloorPad"

export default function Elevator({floor, direction}){
  const {setPressOnFloorpad, unSetPressOnFloorpad, floorpad} = useFloorpad()
  const upButton = useRef(null)
  const downButton = useRef(null)

  const handleClick = async (moveTo, target) => {
    if (!direction){
      setPressOnFloorpad(target, moveTo)
    }
  }

  return (
    <div className="contenedor-elevador">
      <div className="botones">
        {floor == 0 && (
          <button onClick={() => handleClick('up', floor)} ref={upButton} className={floorpad[floor].upPressed ? "selected" : ""}>⬆</button>
        )}
        {floor > 0 && floor < 5 &&(
          <>
            <button onClick={() => handleClick('up', floor)} ref={upButton} className={floorpad[floor].upPressed ? "selected" : ""}>⬆</button>
            <button onClick={() => handleClick('down', floor)}  ref={downButton} className={floorpad[floor].downPressed ? "selected" : ""}>⬇</button>  
          </>
        )}
        {floor == 5 && (
          <button onClick={() => handleClick('down', floor)}  ref={downButton} className={floorpad[floor].downPressed ? "selected" : ""}>⬇</button>  
        )}
      </div>
      <div className="elevator">
        <div className="elevator-floor">
          <span>Piso {floor}</span>
        </div>
        <div className="elevator-doors">
          <span></span>
          <Image alt='Open elevator' src={closedElevator} layout='fill' objectFit='contain' />
        </div>
      </div>
    </div>
  )
}