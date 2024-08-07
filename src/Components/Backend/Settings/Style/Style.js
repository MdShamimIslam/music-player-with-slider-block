import { __ } from '@wordpress/i18n';
import { PanelBody, PanelRow, __experimentalUnitControl as UnitControl, RangeControl } from '@wordpress/components';
import { BColor, BorderControl, Label, MultiShadowControl, Typography } from '../../../../../../Components';
import { Device } from '../../../../../../Components/Device/Device';
import { updateData } from '../../../../utils/functions';
import { BBoxControl } from '../../../BBoxControl/BBoxControl';
import { Tab } from '../../../Panel/Tab/Tab';


const Style = ({ attributes, setAttributes, device }) => {
    const { style, options } = attributes;
    const { textSl, rangeSl } = options;
    const { musicTitle, musicName, rangeInput, rangeThumb } = style;
    const { width, height, bg, radius, margin, } = rangeInput;
    const { thumbWidth, thumbBg, thumbShadow, thumbOutline, } = rangeThumb;


    return (
        <>
            <PanelBody className='bPlPanelBody' title={__('Music Slider', 'music-player')}>
               

            </PanelBody>

            <PanelBody className='bPlPanelBody' title={__('Music Player', 'music-player')}>
                <Tab
                    options={["title", "name"]}
                    value={textSl}
                    onChange={v => setAttributes({ options: updateData(options, v, "textSl") })}
                />

                {textSl === 'title' ?
                    <>
                        <BColor
                            label={__('Color', 'music-player')}
                            value={musicTitle.color}
                            onChange={v => setAttributes({ style: updateData(style, v, 'musicTitle', "color") })}
                        />
                        <Typography
                            label={__('Typography', 'music-player')}
                            value={musicTitle.typo}
                            onChange={v => setAttributes({ style: updateData(style, v, 'musicTitle', "typo") })}
                            defaults={{ fontSize: 30 }}
                        />
                    </> : <>
                        <BColor
                            label={__('Color', 'music-player')}
                            value={musicName.color}
                            onChange={v => setAttributes({ style: updateData(style, v, 'musicName', "color") })}
                        />
                        <RangeControl
                            className='mt5'
                            label={__('Opacity', 'music-player')}
                            value={musicName.opacity}
                            allowReset
                            onChange={v => setAttributes({ style: updateData(style, v, 'musicName', "opacity") })}
                            min={0}
                            max={1}
                            step={0.1}
                        />
                        <Typography
                            label={__('Typography', 'music-player')}
                            value={musicName.typo}
                            onChange={v => setAttributes({ style: updateData(style, v, 'musicName', "typo") })}
                            defaults={{ fontSize: 20 }}
                        />

                    </>
                }
                <Tab
                    options={["Input", "Thumb"]}
                    value={rangeSl}
                    onChange={v => setAttributes({ options: updateData(options, v, "rangeSl") })}
                />
                {rangeSl === 'input' ?
                    <>
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
                        // onChange={(v) => setAttributes({ style: produce(style, draft => { draft.margin[device] = v }) })}
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

                    </> : <>
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
                    </>
                }



            </PanelBody>

            {/* <PanelBody className='bPlPanelBody' title={__('Range Input', 'music-player')} initialOpen={false}>
            </PanelBody> */}

            {/* <PanelBody className='bPlPanelBody' title={__('Range Thump', 'music-player')} initialOpen={false}>
            </PanelBody> */}

        </>
    )
}

export default Style