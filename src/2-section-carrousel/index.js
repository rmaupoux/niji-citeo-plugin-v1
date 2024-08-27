import { registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
import Save from './save';
import './style.scss';
import './editor.scss';

import blockIcons from '../icons.js'

registerBlockType('multi-image-block/gallery', {
    icon: blockIcons.icon5,
    category: 'media',
    attributes: {
        images: {
            type: 'array',
            default: [],
            source: 'query',
            selector: '.gallery-image',
            query: {
                url: { source: 'attribute', selector: 'img', attribute: 'src' },
                alt: { source: 'attribute', selector: 'img', attribute: 'alt' },
                id: { source: 'attribute', selector: 'img', attribute: 'data-id' }
            }
        }
    },
    edit: Edit,
    save: Save,
});



// Initialiser le slider lorsque le DOM est prêt
// document.addEventListener('DOMContentLoaded', () => {
//     initSlider();
// });