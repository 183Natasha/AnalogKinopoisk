import './Input.css';

function Input({
	placeholder = 'Введите название...', // Дефолтный плейсхолдер
	showIcon = true, // Показывать ли иконку
	className = '' // Дополнительные классы
}) {
    
	return (
		<div className={`search-container ${className}`}>
			{showIcon && <img src="left-icon.svg" alt="Поиск" className="search-icon" />}
			<input
				type="text"
				placeholder={placeholder}
				className="search-input"
			/>
  
		</div>
	);

}

export default Input;
