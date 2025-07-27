import styles from './Header.module.css';
import HeaderLeft from '../HeaderLeft/HeaderLeft';
import HeaderRight from '../HeaderRight/HeaderRight';

function Header() {
	return (	
		<div className={styles['header']}>
			<HeaderLeft></HeaderLeft>
			<HeaderRight></HeaderRight>
		</div>	
	);	
}

export default Header;
