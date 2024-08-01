
import { useBlockProps } from '@wordpress/block-editor';
import Style from '../Common/Style';
import Settings from './Settings/Settings';
import MusicPlayerBack from './MusicPlayerBack/MusicPlayerBack';

const Edit = props => {
	const { attributes, setAttributes, clientId } = props;

	return <>
		{/* settings */}
		<Settings {...{ attributes, setAttributes }} />

		<div {...useBlockProps()}>
			{/* style */}
			<Style attributes={attributes} id={`block-${clientId}`} />
			{/* content */}
			<div className='bBlocksMusicPlayer'>
				<MusicPlayerBack attributes={attributes} setAttributes={setAttributes}/>
			</div>
		</div>
	</>;
}
export default Edit;