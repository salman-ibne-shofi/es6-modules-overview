import { useEffect, useState } from "react";
import "./App.css";
import Watch from "./Components/Watch/Watch";

function App() {
	const [watches, setWatches] = useState([]);

	// useEffect(() => {
	// 	fetch("watches.json")
	// 		.then((res) => res.json())
	// 		.then((data) => setWatches(data));
	// }, []);
	useEffect(() => {
		fetch(
			"https://raw.githubusercontent.com/salman-ibne-shofi/weatches-data/main/watches.json"
		)
			.then((res) => res.json())
			.then((data) => setWatches(data));
	}, []);

	//   const watches = [
	//     {id: 1, name: 'Apple Watch', price: 200},
	//     {id: 2, name: 'Samsu Watch', price: 200},
	//     {id: 3, name: 'MI Watch', price: 200},
	//   ]

	// const watches = [
	//     {
	//         "id": 1,
	//         "name": "Apple Watch Series 9",
	//         "price": 399
	//     },
	//     {
	//         "id": 2,
	//         "name": "Samsung Galaxy Watch 6",
	//         "price": 349
	//     },
	//     {
	//         "id": 3,
	//         "name": "Garmin Forerunner 265",
	//         "price": 499
	//     },
	//     {
	//         "id": 4,
	//         "name": "Fitbit Versa 4",
	//         "price": 229
	//     },
	//     {
	//         "id": 5,
	//         "name": "Huawei Watch GT 3 Pro",
	//         "price": 369
	//     }
	// ]

	return (
		<>
			<h1>Vite + React</h1>
			{watches.map((watch) => (
				<Watch key={watch.id} watch={watch}></Watch>
			))}
		</>
	);
}

export default App;
