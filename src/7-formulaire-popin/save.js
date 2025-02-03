import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Save({ attributes }) {
    const blockProps = useBlockProps.save();

    return (
        <form {...blockProps} className="custom-form-block">
            <RichText.Content tagName="h2" value={attributes.title} />
            <RichText.Content tagName="p" value={attributes.subtitle} />

            <label>{attributes.selectLabel} <span>*</span></label>
            <select>
                <option value="option1">{attributes.option1Label}</option>
                <option value="option2">{attributes.option2Label}</option>
            </select>

            <label>{attributes.numberLabel} <span>*</span></label>
            <input type="number" placeholder={attributes.numberPlaceholder} />

            <label>{attributes.emailLabel} <span>*</span></label>
            <input type="email" placeholder={attributes.emailPlaceholder} />

            <label>
                <input type="checkbox" name="receive_news" value="true" />
                {attributes.checkboxLabel}
            </label>

            <RichText.Content tagName="p" className="disclaimer" value={attributes.disclaimer} />
        </form>
    );
}
