import { __ } from '@wordpress/i18n'
import { registerBlockType } from '@wordpress/blocks'
import './style.scss'
import blockIcons from '../icons.js'
/**
 * Internal dependencies
 */
import Edit from './js/edit.js';
import save from './js/save.js';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType('niji-citeo-plugin/riche', {
	icon: blockIcons.icon5,
	/**
	 * @see ./edit.js
	 */
	edit: Edit,
	/**
	 * @see ./save.js
	 */
	save,
});
