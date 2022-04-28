import React from 'react';
import { plantList } from '../datas/plantList';
import '../styles/ShoppingList.css';
import PlantItem from './PlantItem';

function ShoppingList() {
	const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

	return (
		<div>
			<ul>
				{categories.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul>
			<ul className='lmj-plant-list'>

			{plantList.map(({ id, cover, name, water, light }) => (
					<PlantItem
						id={id}
						cover={cover}
						name={name}
						water={water}
						light={light}
					/>
				))}

				{/* {plantList.map((plant) => (
					<li className='lmj-plant-item' key={plant.id}>
						{plant.name} */}
            {/* {plant.isBestSale ? <span>🔥</span> : null}  */}
						{/* { plant.isSpecialOffer && <div className='lmj-sales'>Soldes</div> } */}
          {/* </li> */}
				{/* ))} */}
			</ul>
		</div>
	)
}

export default ShoppingList