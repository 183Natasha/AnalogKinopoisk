import './Header.css';
import HeaderLeft from '../HeaderLeft/HeaderLeft';
import HeaderRight from '../HeaderRight/HeaderRight';

function Header() {
	return (	
		<div className='header'>
			<HeaderLeft></HeaderLeft>
			<HeaderRight></HeaderRight>
		</div>	
	);	
}

export default Header;
