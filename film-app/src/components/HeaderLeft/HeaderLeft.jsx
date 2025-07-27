import styles from './HeaderLeft.module.css';

function HeaderLeft() {
	return (	
		<img className={styles['bookmark']} src="/bookmark.svg" alt="Знак закладки" />
	);	
}

export default HeaderLeft;
