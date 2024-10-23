import { __ } from '@wordpress/i18n';
import { RichText, useBlockProps } from '@wordpress/block-editor';

import './editor.scss';

export default function Edit( props ) {
    const { attributes, setAttributes } = props;
    const { faqs } = attributes; // Récupérer les attributs (faqs doit être un tableau)
    const blockProps = useBlockProps();

    // Fonction pour mettre à jour une question ou une réponse spécifique
    const updateFAQ = (value, index, type) => {
        const newFAQs = [...faqs]; // Faire une copie du tableau faqs
        newFAQs[index][type] = value; // Mettre à jour la question ou la réponse
        setAttributes({ faqs: newFAQs }); // Mettre à jour les attributs
    };
	const removeFAQ = (index) => {
        const newFAQs = faqs.filter((_, i) => i !== index); // Garder tous les éléments sauf celui à cet index
        setAttributes({ faqs: newFAQs }); // Mettre à jour les attributs
    };
	


    // Fonction pour ajouter une nouvelle FAQ
    const addFAQ = () => {
        const newFAQs = [...faqs, { question: '', answer: '' }];
        setAttributes({ faqs: newFAQs });
    };

    return (
        <>
            <div {...blockProps} className="faq-block">
                {faqs.length > 0 && faqs.map((faq, index) => (
                    <div key={index} className="faq-item">
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
						<button
							onClick={(value) => removeFAQ(index)}
						>Effacer
							</button>
							

                    </div>
                ))}
                <button onClick={addFAQ}>
                    {__('Ajouter une FAQ', 'faq-block')}
                </button>
            </div>
        </>
    );
}
