import Elevator from "@common/Elevator"
import { useFloorpad } from "@hooks/useFloorPad"

export default function Floor(){
  const {setPressOnFloorpad, unSetPressOnFloorpad, floorpad} = useFloorpad()
  const floors = Object.keys(floorpad).reverse()
  return(
    <div className="elevadores">
      {floors.map(floor => <Elevator key={floor} floor={floor}/>)}
    </div>
  )
}