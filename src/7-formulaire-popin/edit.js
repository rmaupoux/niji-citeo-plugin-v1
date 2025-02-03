import { useBlockProps, RichText } from '@wordpress/block-editor';
import { TextControl, CheckboxControl, SelectControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

export default function Edit({ attributes, setAttributes }) {
    const blockProps = useBlockProps();

    // Met à jour les options du sélecteur
    const handleSelectChange = (value) => {
        // Ajoutez ici la logique pour gérer la sélection de l'utilisateur si nécessaire
    };

    return (
        <form {...blockProps} className="custom-form-block">
            <RichText
                tagName="h2"
                value={attributes.title}
                onChange={(value) => setAttributes({ title: value })}
                placeholder={__('Enter form title...', 'custom')}
            />

            <RichText
                tagName="p"
                value={attributes.subtitle}
                onChange={(value) => setAttributes({ subtitle: value })}
                placeholder={__('Enter form subtitle...', 'custom')}
            />

            <label><RichText
                // label={__('Select Field Label', 'custom')}
                tagName="span"
                value={attributes.selectLabel}
                onChange={(value) => setAttributes({ selectLabel: value })}
            />
             <span>*</span></label>
            <SelectControl
                value="option1"
                options={[
                    { label: attributes.option1Label || __('Enseignant', 'custom'), value: 'option1' },
                    { label: attributes.option2Label || __('Parent', 'custom'), value: 'option2' },
                ]}
                onChange={handleSelectChange}
            />

            <TextControl
                label={__('Option 1 Label', 'custom')}
                value={attributes.option1Label}
                onChange={(value) => setAttributes({ option1Label: value })}
                placeholder={__('Enter option 1 label...', 'custom')}
            />

            <TextControl
                label={__('Option 2 Label', 'custom')}
                value={attributes.option2Label}
                onChange={(value) => setAttributes({ option2Label: value })}
                placeholder={__('Enter option 2 label...', 'custom')}
            />

            <TextControl
                label={__('Number Field Label', 'custom')}
                value={attributes.numberLabel}
                onChange={(value) => setAttributes({ numberLabel: value })}
            />
            <label>{attributes.numberLabel} <span>*</span></label>
            <TextControl
                type="number"
                placeholder={attributes.numberPlaceholder}
                onChange={(value) => setAttributes({ numberPlaceholder: value })}
            />

            <TextControl
                label={__('Email Field Label', 'custom')}
                value={attributes.emailLabel}
                onChange={(value) => setAttributes({ emailLabel: value })}
            />
            <label>{attributes.emailLabel} <span>*</span></label>
            <TextControl
                type="email"
                placeholder={attributes.emailPlaceholder}
                onChange={(value) => setAttributes({ emailPlaceholder: value })}
            />

            <CheckboxControl
                label={attributes.checkboxLabel}
                checked={true}
                onChange={() => {}}
            />

            <RichText
                tagName="p"
                className="disclaimer"
                value={attributes.disclaimer}
                onChange={(value) => setAttributes({ disclaimer: value })}
                placeholder={__('Enter disclaimer text...', 'custom')}
            />
        </form>
    );
}
