import { useNumpad } from "@hooks/useNumpad"
import { useEffect } from "react"

export default function Numpad(){
	const {setFloorNumpad, unSetFloorNumpad, numpad, direction} = useNumpad()
	const floors = Object.keys(numpad)
	useEffect(() => {
		console.log(numpad)
	},[numpad, direction])
	return (
		<div className="contenedor-numpad">
			<div className="indicador">
				<span >0</span>
			</div>
			<div className="numpad">
				<div className="floor">
					{floors.map((floor) => {
						if (floor != "direction"){
							return <button key={floor} onClick={() => setFloorNumpad(floor)} className={numpad[floor] === true ? "selected" : ""}>{floor}</button>
						}
					})}
				</div>
				<span className="direction">Direction = {direction == null ? "Stopped" : direction}</span>
			</div>
		</div>
	)
}