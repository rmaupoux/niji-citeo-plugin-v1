import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';

export default function save( props ) {
    // const blockProps = useBlockProps.save();
    const { faqs } = props.attributes;
    const blockProps = useBlockProps.save();
    
    // blockProps.className += ` bouton-style--${props.attributes.type || 'normal'}`;

    // const { attributes: { number, text, title, chapterSign, alignment, textColor, backgroundColor, withRadius, radius, url }, setAttributes, className, isSelected } = props

    return (
        <div {...blockProps} className="faq-block">
                {faqs.length > 0 &&
                    faqs.map((faq, index) => (
                        <div key={index} className="faq-item">
                            <h4>{faq.question}</h4>
                            <p>{faq.answer}</p>
                        </div>
                    ))}
            </div>
    );
}
