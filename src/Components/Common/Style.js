import { getBoxCSS, getMultiShadowCSS,getTypoCSS } from '../../../../Components/utils/getCSS';

const Style = ({ attributes, id, device = "desktop" }) => {
	const { style } = attributes;
	const { musicTitle, musicName, rangeInput, rangeThumb } = style;
	const { width, height, bg, radius, margin, } = rangeInput;
	const { thumbWidth, thumbBg, thumbShadow, thumbOutline, } = rangeThumb;

	const mainSl = `#${id}`;
	const blockSl = `${mainSl} .bBlocksMusicPlayer`;
	const musicPlayerSl = `${blockSl} .music-player`;
	const musicTitleSl = `${musicPlayerSl} .title`;
	const musicNameSl = `${musicPlayerSl} .name`;

	const rangeInputSl = `${musicPlayerSl} #progress`;
	const rangeThumbSl = `${rangeInputSl}::-webkit-slider-thumb`;

	return <style dangerouslySetInnerHTML={{
		__html: `
				${getTypoCSS('', musicTitle.typo)?.googleFontLink}
        		${getTypoCSS(musicTitleSl, musicTitle.typo)?.styles}

				${getTypoCSS('', musicName.typo)?.googleFontLink}
        		${getTypoCSS(musicNameSl, musicName.typo)?.styles}

				${musicTitleSl} {
					color:${musicTitle.color};
				}

				${musicNameSl} {
					color:${musicName.color};
					opacity:${musicName.opacity};
				}

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