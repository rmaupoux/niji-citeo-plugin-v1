import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	BlockControls,
	AlignmentToolbar,
	InspectorControls,
    PanelColorSettings,
    InnerBlocks,
} from '@wordpress/block-editor'
import {
	PanelBody,
	ButtonGroup,
	Button,
	ToggleControl,
	RangeControl,
} from '@wordpress/components'

import './editor.scss';

export default function Edit( props ) {
    const blockProps = useBlockProps();
    // const { attributes: { number, title, chapterSign, alignment, textColor, backgroundColor, withRadius, radius }, setAttributes, className, isSelected } = props
    const { attributes, className, setAttributes} = props
    const { number, title, chapterSign, alignment, textColor, backgroundColor, withRadius, radius } = attributes

    // Liste des blocs autorisés
    const ALLOWED_BLOCKS = ['core/image', 'core/heading', 'core/paragraph', 'niji-citeo-plugin/url', 'core/button'];

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
                        ['niji-citeo-plugin/url', { text: __('Premier button', 'niji-plugin') }],
                        ['niji-citeo-plugin/url', { text: __('Second button', 'niji-plugin') }],
                    ]
                ],
			
            ]],
            ['core/column', {}, [
                ['core/image', {}],
            ]],
        ]],
    ];

    return (
        <div { ...blockProps }
				style={ {
					borderRadius: withRadius ? radius : null,
					backgroundColor: backgroundColor,
					textAlign: alignment,
				} }
			>

            <BlockControls>
                <AlignmentToolbar
                    value={ props.attributes.alignment }
                    onChange={ alignment => props.setAttributes( { alignment } ) }
                />
            </BlockControls>
            <InspectorControls>
				
				<PanelBody title={ __( 'Border', 'Border traduction.' ) }>
					<ToggleControl
						label={ __( 'Radius', 'Border traduction.' ) }
						checked={ withRadius }
						onChange={ () => setAttributes( { withRadius: ! withRadius } ) }
					/>

					{ withRadius && (
						<RangeControl
							value={ radius }
							onChange={ radius  => setAttributes( { radius } ) }
							min={ 0 }
							max={ 30 }
							beforeIcon="arrow-down"
							afterIcon="arrow-up"
						/>
					)}
				</PanelBody>
                <PanelColorSettings
					title={ __( 'Colors', 'traduction' ) }
					colorSettings={ [
						{
							value: backgroundColor,
							onChange: backgroundColor => setAttributes( { backgroundColor } ),
							label: __( 'Background color', 'traduction' ),
						},
					] }
				/>
			</InspectorControls>
            <InnerBlocks
                allowedBlocks={ALLOWED_BLOCKS}
                template={BASE_TEMPLATE}
                templateLock= { false }
            />
        </div>
    );
}
