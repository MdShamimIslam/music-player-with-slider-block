import React from 'react';
import { PanelBody } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const General = () => {
  return (
    <>
      <PanelBody className='bPlPanelBody' title={__('General Settings', 'b-blocks')} initialOpen={false}>
        General
      </PanelBody>
    </>
  )
}

export default General