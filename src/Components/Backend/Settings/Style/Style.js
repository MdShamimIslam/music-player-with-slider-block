import React from 'react';
import { PanelBody } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const Style = () => {
  return (
    <>
      <PanelBody className='bPlPanelBody' title={__('Style Settings', 'b-blocks')} initialOpen={false}>
        Style 
      </PanelBody>
    </>
  )
}

export default Style