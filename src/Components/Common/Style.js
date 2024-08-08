import { getBorderCSS,getBoxCSS, getMultiShadowCSS,getTypoCSS } from '../../../../Components/utils/getCSS';

const Style = ({ attributes, id, device = "desktop" }) => {
	const { style } = attributes;
	const {align,musicSlider, musicTitle, musicName, rangeInput, rangeThumb } = style;
	const { sliderWidth, sliderHeight, border, overlayBg} = musicSlider;
	const { width, height, radius, margin, } = rangeInput;
	const { thumbWidth, thumbBg, thumbShadow, thumbOutline, } = rangeThumb;

	const idSl = `#${id}`;
	const mainSl = '.wp-block-mpws-music-player';
	const blockSl = `${idSl} .bBlocksMusicPlayer`;
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

				${mainSl}{
					text-align:${align[device]};
				}

				${blockSl}{
					background:${style.bg};
					${getBorderCSS(style.border)}
					width:${style.width[device] ? style.width[device] : '100%'};
					height:${style.height[device] ? style.height[device] : 'inherit'};
				}

				${activeSlideSl}{
					${getBorderCSS(border)}
					width:${sliderWidth[device]};
					height:${sliderHeight[device]};
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
					border-radius:${radius}px;
					margin: ${getBoxCSS(margin[device])};
				}

				${rangeThumbSl} {
					background:${thumbBg};
					width:${thumbWidth[device]};
					border-radius:${thumbOutline.radius};
					box-shadow: ${getMultiShadowCSS(thumbShadow)};
					outline: ${thumbOutline.width} ${thumbOutline.style} ${thumbOutline.color};
				}

				@media only screen and (min-width:641px) and (max-width: 1024px){
					${mainSl}{
						text-align:${align.tablet};
					}

					${blockSl}{
						width:${style.width.tablet ? style.width.tablet : '100%'};
						height:${style.height.tablet ? style.height.tablet : 'inherit'};
					}

					${activeSlideSl}{
						width:${sliderWidth.tablet};
						height:${sliderHeight.tablet};
					}

					${rangeInputSl} {
						width:${width.tablet};
						height: ${height.tablet};
						margin: ${getBoxCSS(margin.tablet)};
					}

					${rangeThumbSl} {
						width:${thumbWidth.tablet};
				    }
				}

				 @media only screen and (max-width:640px){
					${mainSl}{
						text-align:${align.mobile};
					}
						
					${blockSl}{
						width:${style.width.mobile ? style.width.mobile : '100%'};
						height:${style.height.mobile ? style.height.mobile : 'inherit'};
					}

					${activeSlideSl}{
						width:${sliderWidth.mobile};
						height:${sliderHeight.mobile};
					}

					${rangeInputSl} {
						width:${width.mobile};
						height: ${height.mobile};
						margin: ${getBoxCSS(margin.mobile)};
					}

					${rangeThumbSl} {
						width:${thumbWidth.mobile};
				    }
				 }

	    `}} />;
}
export default Style;