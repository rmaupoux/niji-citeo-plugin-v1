import { __ } from '@wordpress/i18n';
import { RichText, useBlockProps } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';
import { Icon, addCard, trash } from '@wordpress/icons';
import { useState } from '@wordpress/element';

import './editor.scss';

export default function Edit(props) {
    const { attributes, setAttributes } = props;
    const { faqs } = attributes;
    const blockProps = useBlockProps();
    
    // État temporaire pour stocker l'élément en cours de déplacement
    const [draggedIndex, setDraggedIndex] = useState(null);

    const updateFAQ = (value, index, key) => {
        const newFAQs = [...faqs];
        newFAQs[index][key] = value;
        setAttributes({ faqs: newFAQs });
    };

    const removeFAQ = (index) => {
        const newFAQs = faqs.filter((_, i) => i !== index);
        setAttributes({ faqs: newFAQs });
    };

    const addFAQ = () => {
        const newFAQs = [...faqs, { question: '', answer: '' }];
        setAttributes({ faqs: newFAQs });
    };

    // Gestion du drag and drop
    const handleDragStart = (index) => {
        setDraggedIndex(index);
    };

    const handleDragOver = (event) => {
        event.preventDefault(); // Nécessaire pour permettre le drop
    };

    const handleDrop = (index) => {
        if (draggedIndex === null || draggedIndex === index) return;

        const newFAQs = [...faqs];
        const movedItem = newFAQs.splice(draggedIndex, 1)[0];
        newFAQs.splice(index, 0, movedItem);

        setAttributes({ faqs: newFAQs });
        setDraggedIndex(null);
    };

    return (
        <div {...blockProps} className="faq-block">
            {faqs.map((faq, index) => (
                <div
                    key={index}
                    className="faq-item"
                    draggable="true"
                    onDragStart={() => handleDragStart(index)}
                    onDragOver={handleDragOver}
                    onDrop={() => handleDrop(index)}
                >
                    <div className="faq-content">
                        <RichText
                            tagName="h4"
                            value={faq.question}
                            onChange={(value) => updateFAQ(value, index, 'question')}
                            placeholder={__('Question...', 'faq-block')}
                        />
                        <RichText
                            tagName="p"
                            value={faq.answer}
                            onChange={(value) => updateFAQ(value, index, 'answer')}
                            placeholder={__('Answer...', 'faq-block')}
                        />
                    </div>
                    <Button variant="link" onClick={() => removeFAQ(index)}>
                        <Icon icon={trash} />
                    </Button>
                </div>
            ))}

            <Button variant="secondary" onClick={addFAQ}>
                <Icon icon={addCard} /> Ajouter une option
            </Button>
        </div>
    );
}
