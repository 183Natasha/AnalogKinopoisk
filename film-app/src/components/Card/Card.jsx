import './Card.css';

function Card() {
	return (
		<div className='card-item'>
			<img src="blackwidow.svg" alt="Постер фильма" className='poster' />
			<div className='card-item__block'>
				<h2 className='card-item__header'>Black Widow</h2>
				<div className='card-item__favorite'>
					<img src="like.svg" alt="Знак лайка" className='like'/>
					<p className='card-item__favorite_text'>В избранное</p>
				</div>
			</div>
			
			
		</div>
	);
}

export default Card;