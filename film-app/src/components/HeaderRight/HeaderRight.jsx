import styles from './HeaderRight.module.css';

function HeaderRight() {
	return (	
		<div className={styles['headerRight']}>
			<div className={styles['search-films']}>Поиск фильмов</div>
			<div className={styles['my-films']}>Мои фильмы</div>
			<div className={styles['broken-text']}>
                Войти
				<img className={styles['broken']} src="/broken.svg" alt="Знак выхода" />
			</div>
			
		</div>	
	);	
}

export default HeaderRight;
