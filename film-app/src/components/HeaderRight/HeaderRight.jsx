import styles from './HeaderRight.module.css';

function HeaderRight() {
	return (	
		<div className='headerRight'>
			<div className='search-films'>Поиск фильмов</div>
			<div className='my-films'>Мои фильмы</div>
			<div className='broken-text'>
                Войти
				<img className='broken' src="/broken.svg" alt="Знак выхода" />
			</div>
			
		</div>	
	);	
}

export default HeaderRight;
