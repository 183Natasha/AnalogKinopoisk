import './App.css';
import Button from './components/Button/Button';
import Paragraf from './components/Paragraf/Paragraf';
import Search_text from './components/Search-text/Search-text';
import Header from './components/Header/Header';


function App() {
	return (
		<div className='app'>
			<Header> </Header>
			
			<Search_text/>
			<Paragraf/>
			<Button/>
		</div>
	);
}

export default App;
