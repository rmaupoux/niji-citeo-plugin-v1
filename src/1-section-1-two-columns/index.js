import { registerBlockType } from '@wordpress/blocks'

import './style.scss'

import blockIcons from '../icons.js';

import Edit from './edit'
import save from './save'

registerBlockType( 'niji-citeo-plugin/innerblocks', {
	icon: blockIcons.icon5,

	edit: Edit,
	save,
} )
