import { getBorderCSS,getBoxCSS, getMultiShadowCSS,getTypoCSS } from '../../../../Components/utils/getCSS';

const Style = ({ attributes, id, device = "desktop" }) => {
	const { style } = attributes;
	const {musicSlider, musicTitle, musicName, rangeInput, rangeThumb } = style;
	const { sliderWidth, sliderHeight, border, overlayBg} = musicSlider;
	const { width, height, bg, radius, margin, } = rangeInput;
	const { thumbWidth, thumbBg, thumbShadow, thumbOutline, } = rangeThumb;

	const mainSl = `#${id}`;
	const blockSl = `${mainSl} .bBlocksMusicPlayer`;
	const swiperSl = `${blockSl} .swiper`;
	const activeSlideSl = `${swiperSl} .activeSlide`;
	const activeOverlaySl = `${swiperSl} .swiper-slide-active .overlay`;
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

				${blockSl}{
					width:${style.width[device] ? style.width[device] : '100%'};
					height:${style.height[device] ? style.height[device] : 'inherit'};
					background:${style.bg};
					${getBorderCSS(style.border)}
				}

				${activeSlideSl}{
					width:${sliderWidth[device]};
					height:${sliderHeight[device]};
					${getBorderCSS(border)}
				}

				${activeOverlaySl} {
					background:${overlayBg};
				}

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