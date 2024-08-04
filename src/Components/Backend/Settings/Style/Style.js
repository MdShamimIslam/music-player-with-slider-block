import { __ } from '@wordpress/i18n';
import { PanelBody, PanelRow, __experimentalUnitControl as UnitControl, RangeControl } from '@wordpress/components';
import { BColor, BorderControl, Label, MultiShadowControl } from '../../../../../../Components';
import { Device } from '../../../../../../Components/Device/Device';
import { updateData } from '../../../../utils/functions';
import { BBoxControl } from '../../../BBoxControl/BBoxControl';


const Style = ({ attributes, setAttributes, device }) => {
    const { style } = attributes;
    const { rangeInput, rangeThumb } = style;
    const { width, height, bg, radius, margin, } = rangeInput;
    const { thumbWidth, thumbBg, thumbShadow, thumbOutline, } = rangeThumb;


    return (
        <>
            <PanelBody className='bPlPanelBody' title={__('Music Swiper', 'music-player')}>
                Music Swiper Style ...
            </PanelBody>

            <PanelBody className='bPlPanelBody' title={__('Range Input', 'music-player')} initialOpen={false}>
                <BColor
                    label={__('Background', 'music-player')}
                    value={bg}
                    onChange={v => setAttributes({ style: updateData(style, v, 'rangeInput', "bg") })}
                />

                <PanelRow>
                    <Label>{__('Width', 'music-player')}</Label>
                    <Device />
                </PanelRow>
                <UnitControl
                    value={width[device]}
                    onChange={(v) => setAttributes({ style: updateData(style, v, 'rangeInput', 'width', device) })}
                />

                <PanelRow>
                    <Label>{__('Height', 'music-player')}</Label>
                    <Device />
                </PanelRow>
                <UnitControl
                    value={height[device]}
                    onChange={(v) => setAttributes({ style: updateData(style, v, 'rangeInput', 'height', device) })}
                />

                <PanelRow>
                    <Label>{__('Margin', 'music-player')}</Label>
                    <Device />
                </PanelRow>
                <BBoxControl
                    label=""
                    values={margin[device]}
                    onChange={v => setAttributes({ style: updateData(style, v, 'rangeInput', "margin", device) })}

                />

                <RangeControl
                    title={__('Border radius', 'music-player')}
                    value={radius}
                    allowReset
                    onChange={v => setAttributes({ style: updateData(style, v, 'rangeInput', "radius") })}
                    min={0}
                    max={20}
                />

            </PanelBody>

            <PanelBody className='bPlPanelBody' title={__('Range Thump', 'music-player')} initialOpen={false}>
                <BColor
                    label={__('Background', 'music-player')}
                    value={thumbBg}
                    onChange={v => setAttributes({ style: updateData(style, v, 'rangeThumb', "thumbBg") })}
                />

                <PanelRow>
                    <Label>{__('Width', 'music-player')}</Label>
                    <Device />
                </PanelRow>
                <UnitControl
                    value={thumbWidth[device]}
                    onChange={(v) => setAttributes({ style: updateData(style, v, 'rangeThumb', 'thumbWidth', device) })}
                />
                <MultiShadowControl
                    className='mt15'
                    label={__('Shadow', 'music-player')}
                    value={thumbShadow}
                    onChange={(v) => setAttributes({ style: updateData(style, v, 'rangeThumb', 'thumbShadow') })}
                />

                <BorderControl
                    label={__('Outline', 'music-player')}
                    value={thumbOutline}
                    onChange={(v) => setAttributes({ style: updateData(style, v, 'rangeThumb', 'thumbOutline') })}
                    defaults={{ radius: "50%" }}
                />

            </PanelBody>

        </>
    )
}

export default Style