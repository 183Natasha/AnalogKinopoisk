import styles from'./Button.module.css';
import cn from 'classnames';

function Button() {
	const handleClick = () => {
		console.log('Кнопка нажата!');
	};
	return (		
		<button className={cn(styles['button'], styles['accent'])} onClick={handleClick}>Искать</button>
	);
}

export default Button;
