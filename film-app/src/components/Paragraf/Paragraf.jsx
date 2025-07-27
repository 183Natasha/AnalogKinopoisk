import styles from './Paragraf.module.css';
import cn from 'classnames';

function Paragraf() {
	return (		
		<p className={cn(styles['paragraf'], styles['paragraf-16'])}>
			Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.
		</p>
	);
}

export default Paragraf;
