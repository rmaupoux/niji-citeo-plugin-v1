import { registerBlockType } from '@wordpress/blocks';
import dsCiteocomIcon from '../icons.js';

import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit.js';
import save from './save.js';

registerBlockType( 'notre-impact/map', {

	/**
	 * @see ../assets/icons/icons.js
	 */
		icon: dsCiteocomIcon.logoCiteo,
	/**
	 * @see ./edit.js
	 */
	edit: Edit,

	/**
	 * @see ./save.js
	 */
	save,
} );

