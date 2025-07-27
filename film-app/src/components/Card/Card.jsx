import styles from './Card.styles.css';

function Card() {
	return (
		<div className={styles['card-item']}>
			<div className={styles['rating-button']}>
				<img src="star.svg" alt="Изображение звезды" className={styles['star']}/>
				<p className= {styles['rating-button__star']}>324</p>
			</div>
			
			<img src="blackwidow.svg" alt="Постер фильма" className={styles['poster']} />
			<div className={styles['card-item__block']}>
				<h2 className={styles['card-item__header']}>Black Widow</h2>
				<div className={styles['card-item__favorite']}>
					<img src="like.svg" alt="Знак лайка" className={styles['like']}/>
					<p className={styles['card-item__favorite_text']}>В избранное</p>
				</div>
			</div>
			
			
		</div>
	);
}

export default Card;