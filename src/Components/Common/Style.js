import { getBoxCSS, getMultiShadowCSS } from '../../../../Components/utils/getCSS';

const Style = ({ attributes, id, device = "desktop" }) => {
	const { style } = attributes;
	const { rangeInput, rangeThumb } = style;
	const { width, height, bg, radius, margin, } = rangeInput;
	const { thumbWidth, thumbBg, thumbShadow, thumbOutline, } = rangeThumb;

	const mainSl = `#${id}`;
	const blockSl = `${mainSl} .bBlocksMusicPlayer`;
	const musicPlayerSl = `${blockSl} .music-player`;
	const rangeInputSl = `${musicPlayerSl} #progress`;
	const rangeThumbSl = `${rangeInputSl}::-webkit-slider-thumb`;

	return <style dangerouslySetInnerHTML={{
		__html: `

				${rangeInputSl} {
					width:${width[device]};
					height: ${height[device]};
					background:${bg};
					border-radius:${radius}px;
					margin: ${getBoxCSS(margin[device])};
				}
				${rangeThumbSl} {
					background:${thumbBg};
					width:${thumbWidth[device]};
					border-radius:${thumbOutline.radius};
					outline: ${thumbOutline.width} ${thumbOutline.style} ${thumbOutline.color};
					box-shadow: ${getMultiShadowCSS(thumbShadow)};
				}

	    `}} />;
}
export default Style;