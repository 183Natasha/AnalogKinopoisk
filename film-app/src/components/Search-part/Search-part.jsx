import dtyles from './Search-part.module.css';
import Paragraf from '../Paragraf/Paragraf';
import Button from '../Button/Button';
import Input from '../Input/Input';

function Search_text() {
	return (	
		<div className='search-part'>
			<h1 className='head-text'>Поиск</h1>
			<Paragraf/>
			<div className='searchNew'>
				<Input/>
				<Button/>
			</div>
			
		</div>	
		
	);
}

export default Search_text;
