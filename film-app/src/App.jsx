import  './App.css';
// import Button from './components/Button/Button';
// import Paragraf from './components/Paragraf/Paragraf';
import Search_text from './components/Search-part/Search-part';
import Header from './components/Header/Header';
import Card from './components/Card/Card';
import CardList from './components/CardList/CardList';


function App() {
	return (
		<div className='app'>
			<Header/>
			
			<Search_text></Search_text>
			<CardList></CardList>
		</div>
	);
}

export default App;
