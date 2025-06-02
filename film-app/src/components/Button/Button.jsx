import './Button.css';

function Button() {
	const handleClick = () => {
		console.log('Кнопка нажата!');
	};
	return (		
		<button className='button accent' onClick={handleClick}>Искать</button>
	);
}

export default Button;
