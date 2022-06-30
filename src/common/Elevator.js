import Image from "next/image"
import openElevator from "@images/open.png"

export default function Elevator({floor}){
  return (
    <div className="contenedor-elevador">
      <div className="botones">
        <button>⬆</button>
        <button>⬇</button>
      </div>
      <div className="elevator">
        <div className="elevator-floor">
          <span>Piso {floor}</span>
        </div>
        <div className="elevator-doors">
          <span></span>
          <Image alt='Open elevator' src={openElevator} layout='fill' objectFit='contain' />
        </div>
      </div>
    </div>
  )
}