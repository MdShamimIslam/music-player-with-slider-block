import { useEffect, useRef, useState } from 'react';
import { useBlockProps } from '@wordpress/block-editor';
import { tabController } from '../../../../Components/utils/functions';
import Style from '../Common/Style';
import Settings from './Settings/Settings';
import SwiperSlider from './SwiperSlider/SwiperSlider';
import { musics } from '../../utils/options';
import MusicPlayerBack from './MusicPlayerBack/MusicPlayerBack';

const Edit = props => {
	const { attributes, setAttributes, clientId, isSelected } = props;
	const [activeIndex, setActiveIndex] = useState(0);
	const [isPlaying, setIsPlaying] = useState(false);
	const audioRef = useRef(null);
	const swiperRef = useRef(null);

	useEffect(() => tabController(), [isSelected]);

	const playTrack = (index) => {
		const audio = audioRef.current;
		setActiveIndex(index);
		audio.src = musics[index].source;
		if (isPlaying) {
			audio.play();
		}
	};

	return <>
		<Settings
			{...{ attributes, setAttributes }}
			activeIndex={activeIndex}
			setActiveIndex={setActiveIndex}
		/>

		<div {...useBlockProps()}>

			<Style attributes={attributes} id={`block-${clientId}`} />

			<div className="bBlocksMusicPlayer">
				
				<SwiperSlider
					ref={swiperRef}
					playTrack={playTrack}
					attributes={attributes}
				/>

				<MusicPlayerBack
					attributes={attributes}
					setAttributes={setAttributes}
					audioRef={audioRef}
					isPlaying={isPlaying}
					setIsPlaying={setIsPlaying}
					activeIndex={activeIndex}
					setActiveIndex={setActiveIndex}
					swiperRef={swiperRef}
				/>

			</div>
		</div>
	</>;
}
export default Edit;