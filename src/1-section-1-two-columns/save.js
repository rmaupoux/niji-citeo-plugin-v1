import { __ } from '@wordpress/i18n'
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor'


export default function save( props ) {
	const blockProps = useBlockProps.save()
	const { attributes: { number, title, chapterSign, alignment, textColor, backgroundColor, withRadius, radius }, setAttributes, className, isSelected } = props


	return (
		<div { ...blockProps }
		style={ {
			borderRadius: withRadius ? radius : null,
			backgroundColor: backgroundColor,
			textAlign: alignment,
		} }
		
		>
			<InnerBlocks.Content />
		</div>
	)
}
