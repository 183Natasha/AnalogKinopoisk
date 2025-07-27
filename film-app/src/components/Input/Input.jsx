import styles from './Input.module.css';
import cn from 'classnames';

function Input({
	placeholder = 'Введите название...', // Дефолтный плейсхолдер
	showIcon = true, // Показывать ли иконку
	className = '' // Дополнительные классы
}) {
    
	return (
		<div className={cn(styles['search-container'], className)}>
			{showIcon && <img src="left-icon.svg" alt="Поиск" className= {styles['search-icon']}  />}
			<input
				type="text"
				placeholder={placeholder}
				className= {styles['search-input']} 
			/>

		</div>
	);

}

export default Input;
