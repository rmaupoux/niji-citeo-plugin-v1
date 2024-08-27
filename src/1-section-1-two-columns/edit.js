import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit() {
    const blockProps = useBlockProps();

    // Liste des blocs autorisés
    const ALLOWED_BLOCKS = ['core/image', 'core/heading', 'core/paragraph', 'niji-citeo-plugin-v1/url', 'core/button'];

    // Template de blocs avec deux colonnes
    const BASE_TEMPLATE = [
        ['core/columns', {}, [
            ['core/column', {}, [
                ['core/heading', { placeholder: __('Your title here', 'niji-plugin') }],
                ['core/paragraph', { placeholder: __('Your content here', 'niji-plugin') }],
                ['core/group',  // Utilisation du bloc group pour encapsuler les boutons
                    { 
                        className: 'custom-button-group'  // Classe personnalisée pour styliser le groupe si nécessaire
                    },
                    [
                        ['niji-citeo-plugin-v1/url', { text: __('Premier button', 'niji-plugin') }],
                        ['niji-citeo-plugin-v1/url', { text: __('Second button', 'niji-plugin') }],
                    ]
                ],
			
            ]],
            ['core/column', {}, [
                ['core/image', {}],
            ]],
        ]],
    ];

    return (
        <div {...blockProps}>
            <InnerBlocks
                allowedBlocks={ALLOWED_BLOCKS}
                template={BASE_TEMPLATE}
                templateLock= { false }
            />
        </div>
    );
}
