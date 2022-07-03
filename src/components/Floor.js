import Elevator from "@common/Elevator"
import { useFloorpad } from "@hooks/useFloorPad"
import { useNumpad } from "@hooks/useNumpad"

export default function Floor(){
  const {floorpad} = useFloorpad()
  const {direction} = useNumpad()
  const floors = Object.keys(floorpad).reverse()
  return(
    <div className="elevadores">
      {floors.map(floor => 
        <Elevator 
          key={floor} 
          floor={floor}
          direction={direction}
        />)}
    </div>
  )
}