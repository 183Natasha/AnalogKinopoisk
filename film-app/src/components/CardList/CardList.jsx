import styles from './CardList.module.css';
import Card from '../Card/Card';

function CardList() {
	return (
		<div className={styles['card-list']}>
			<Card></Card>
			<Card></Card>
			<Card></Card>
			<Card></Card>
			<Card></Card>
			<Card></Card>
			<Card></Card>
			<Card></Card>
		</div>

		

	);
}

export default CardList;