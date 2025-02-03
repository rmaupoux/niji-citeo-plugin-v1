import { __ } from '@wordpress/i18n';
import { RichText, useBlockProps } from '@wordpress/block-editor';

export default function save( props ) {
    // const blockProps = useBlockProps.save();
    const { content, textColor } = props.attributes;
    const blockProps = useBlockProps.save();
    


    return (
        <RichText.Content { ...blockProps }
            tagName="p"
            value={content}
            style={{ color: textColor }}
        />
    );
}

