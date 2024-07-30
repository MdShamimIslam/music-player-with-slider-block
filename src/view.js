import { createRoot } from 'react-dom/client';
import './style.scss';
import Style from './Components/Common/Style';
import MusicPlayer from './Components/Frontend/MusicPlayer';


document.addEventListener('DOMContentLoaded', () => {
	const musicPlayerEls = document.querySelectorAll('.wp-block-b-blocks-music-player');
	musicPlayerEls.forEach(musicPlayerEl => {
		const attributes = JSON.parse(musicPlayerEl.dataset.attributes);

		createRoot(musicPlayerEl).render(<>
			{/* style */}
			<Style attributes={attributes} id={musicPlayerEl.id} />
			{/* content */}
			<div className='bBlocksMusicPlayer'>
				<MusicPlayer attributes={attributes} />
			</div>
		</>);

		musicPlayerEl?.removeAttribute('data-attributes');
	});
});