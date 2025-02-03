import { __ } from '@wordpress/i18n';
import { RichText, useBlockProps, BlockControls } from '@wordpress/block-editor';
import { ToolbarGroup, ToolbarButton } from '@wordpress/components';

import '../editor.scss';

export default function Edit( props ) {
    const { attributes, setAttributes } = props;
    const blockProps = useBlockProps();

    const { content, textColor } = attributes;

    const onChangeContent = (newContent) => {
        setAttributes({ content: newContent });
    };

    const onChangeTextColor = (newColor) => {
        setAttributes({ textColor: newColor });
    };

    const colorOptions = [
        { name: 'Rouge', color: '#ff0000' },
        { name: 'Vert', color: '#00ff00' },
        { name: 'Bleu', color: '#0000ff' },
    ];


    return (
        <>
                <div {...blockProps} className="faq-block">
                <BlockControls>
                    <ToolbarGroup>
                        {colorOptions.map((color) => (
                            <ToolbarButton
                                key={color.color}
                                style={{
                                    color: '#fff', // Couleur du texte
                                    backgroundColor: color.color, // Arrière-plan
                                    border: '1px solid #ccc', // Optionnel : bordure pour mieux voir le bouton
                                    borderRadius: '4px', // Optionnel : coins arrondis
                                    padding: '4px 8px', // Optionnel : ajuster l'espacement interne
                                }}
                                onClick={() => onChangeTextColor(color.color)}
                                label={`Changer la couleur en ${color.name}`}
                            >
                            </ToolbarButton>
                        ))}
                    </ToolbarGroup>
                </BlockControls>
                <RichText
                    tagName="p"
                    value={content}
                    onChange={onChangeContent}
                    placeholder="Entrez du texte..."
                    style={{ color: textColor }}
                />
                </div>
            </>
    );
}
