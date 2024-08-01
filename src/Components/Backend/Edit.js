import { useState } from "react";
import { useBlockProps } from '@wordpress/block-editor';
import Style from '../Common/Style';
import Settings from './Settings/Settings';
import MusicPlayerBack from './MusicPlayerBack/MusicPlayerBack';

const Edit = props => {
	const { attributes, setAttributes, clientId } = props;
	const [activeIndex, setActiveIndex] = useState(0);

	return <>
		{/* settings */}
		<Settings
			{...{ attributes, setAttributes }}
			activeIndex={activeIndex}
			setActiveIndex={setActiveIndex}
		/>

		<div {...useBlockProps()}>
			{/* style */}
			<Style attributes={attributes} id={`block-${clientId}`} />
			{/* content */}
			<div className='bBlocksMusicPlayer'>
				<MusicPlayerBack
					{...{ attributes, setAttributes }}
				/>
			</div>
		</div>
	</>;
}
export default Edit;