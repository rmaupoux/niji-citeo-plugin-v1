import { __ } from '@wordpress/i18n'
import { useBlockProps, URLInput,BlockControls,
AlignmentToolbar } from '@wordpress/block-editor'
import { TextControl,ToolbarGroup, ToolbarButton } from '@wordpress/components'
import { Fragment } from '@wordpress/element'

import './editor.scss'

export default function Edit( props ) {
	const blockProps = useBlockProps()

	// On ajoute notre classe personnalisée
	// blockProps.className += ` is-${props.attributes.type}`

	// blockProps.className += props.attributes.type ? ` bouton-style--${props.attributes.type}` : ' bouton-style--normal';
	blockProps.className += ` bouton-style--${props.attributes.type || 'normal'}`;

	// La fonction qui met à jour la valeur

	return (
		<div { ...blockProps }>
			{ props.isSelected ? (

				<Fragment>

				<BlockControls>
				<AlignmentToolbar
					value={ props.attributes.alignment }
					onChange={ alignment => props.setAttributes( { alignment } ) }
				/>

				<ToolbarGroup>
					<ToolbarButton
						icon="arrow-left"
						label={ __( 'Gauche', 'new-gutenberg-block' )  }
						className='new-gutenberg-block-toolbar-blue'
						onClick={ () => props.setAttributes( { type: 'gauche' } ) }
						isPressed={ props.attributes.type == 'gauche' }
					/>

					<ToolbarButton
						icon="arrow-right"
						label={ __( 'Droite', 'new-gutenberg-block' )  }
						className='new-gutenberg-block-toolbar-blue'
						onClick={ () => props.setAttributes( { type: 'droite' } ) }
						isPressed={ props.attributes.type == 'droite' }
					/>

					
				</ToolbarGroup>
			</BlockControls>

					<TextControl
						placeholder={ __( 'Link Label', 'new-gutenberg-block' ) }
						value={ props.attributes.text }
						onChange={ text => props.setAttributes( { text } ) }
					/>

					<URLInput
						value={ props.attributes.url }
						onChange={ (url, post) => props.setAttributes( { url, text: (post && post.title) || props.attributes.text  } ) }
						__nextHasNoMarginBottom={true}  
					/>
				</Fragment>
			) : (
				<p>
					<a href={ props.attributes.url }>
						{ props.attributes.text || __( 'Edit link',  'new-gutenberg-block' ) }
					</a>
				</p>
			)
			}
		</div>
	)
}
