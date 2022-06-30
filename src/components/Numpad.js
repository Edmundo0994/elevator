import { useNumpad } from "@hooks/useNumpad"
import { useEffect } from "react"

export default function Numpad(){
	const {setFloorNumpad, unSetFloorNumpad, numpad} = useNumpad()
	const floors = Object.keys(numpad)
	useEffect(() => {
		console.log(numpad)
	},[numpad])
	return (
		<div className="contenedor-numpad">
			<div className="indicador">
				<span >0</span>
			</div>
			<div className="numpad">
				<div className="floor">
					{floors.map((floor) => {
						if (floor != "direction"){
							return <button key={floor} onClick={() => setFloorNumpad(floor)}>{floor}</button>
						}
					})}
				</div>
				<span>Direction = {numpad.direction == null ? "Stopped" : numpad.direction}</span>
			</div>
		</div>
	)
}