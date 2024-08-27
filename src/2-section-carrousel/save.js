import { useBlockProps } from '@wordpress/block-editor';

export default function Save({ attributes }) {
    const { images } = attributes;

    return (
        <div { ...useBlockProps.save() }>
            <div className="multi-image-gallery">
                {images.map((image, index) => (
                    <div key={ index } className="gallery-image">
                        <img src={ image.url } alt={ image.alt } data-id={ image.id } />
                    </div>
                ))}
            </div>
        </div>
    );
}
