import styles from './Search-part.module.css';
import Paragraf from '../Paragraf/Paragraf';
import Button from '../Button/Button';
import Input from '../Input/Input';

function Search_text() {
	return (	
		<div className= {styles['search-part']} >
			<h1 className= {styles['head-text']} >Поиск</h1>
			<Paragraf/>
			<div className={styles['searchNew']} >
				<Input/>
				<Button/>
			</div>
			
		</div>	
		
	);
}

export default Search_text;
