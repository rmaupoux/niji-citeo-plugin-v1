import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';

export default function save( props ) {
    const blockProps = useBlockProps.save();
    
    blockProps.className += ` bouton-style--${props.attributes.type || 'normal'}`;

    const { attributes: { number, text, title, chapterSign, alignment, textColor, backgroundColor, withRadius, radius, url }, setAttributes, className, isSelected } = props

    return (
        <p { ...blockProps }>
            <a href={ props.attributes.url } title="Bonjour" 
                style={ {
                    // borderRadius: withRadius ? radius : null,
                    backgroundColor: backgroundColor,
                } }
            >
                { props.attributes.text }
            </a>
        </p>
    );
}
