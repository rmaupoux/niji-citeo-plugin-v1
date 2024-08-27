import { __ } from '@wordpress/i18n';
import { useBlockProps, MediaUpload, MediaUploadCheck, InspectorControls } from '@wordpress/block-editor';
import { Button, PanelBody } from '@wordpress/components';

export default function Edit({ attributes, setAttributes }) {
    const { images } = attributes;

    const onSelectImages = (newImages) => {
        const updatedImages = newImages.map(image => ({
            id: image.id,
            url: image.url,
            alt: image.alt
        }));
        setAttributes({ images: updatedImages });
    };

    const removeImage = (index) => {
        const newImages = images.filter((img, i) => i !== index);
        setAttributes({ images: newImages });
    };

    return (
        <div { ...useBlockProps() }>
            <InspectorControls>
                <PanelBody title={ __( 'Gallery Settings', 'multi-image-block' ) }>
                    <MediaUploadCheck>
                        <MediaUpload
                            onSelect={ onSelectImages }
                            allowedTypes={ [ 'image' ] }
                            multiple
                            gallery
                            value={ images.map(image => image.id) }
                            render={ ({ open }) => (
                                <Button onClick={ open } isPrimary>
                                    { __( 'Add/Replace Images', 'multi-image-block' ) }
                                </Button>
                            ) }
                        />
                    </MediaUploadCheck>
                </PanelBody>
            </InspectorControls>
            <div className="gallery-preview">
                {images.length === 0 ? (
                    <div className="gallery-placeholder">
                        <p>{ __('Sélectionnez des images pour le slider', 'multi-image-block') }</p>
                        <MediaUploadCheck>
                            <MediaUpload
                                onSelect={ onSelectImages }
                                allowedTypes={ [ 'image' ] }
                                multiple
                                gallery
                                value={ [] }
                                render={ ({ open }) => (
                                    <Button onClick={ open } isPrimary>
                                        { __( 'Add Images', 'multi-image-block' ) }
                                    </Button>
                                ) }
                            />
                        </MediaUploadCheck>
                    </div>
                ) : (
                    images.map((image, index) => (
                        <div key={ index } className="gallery-image">
                            <img src={ image.url } alt={ image.alt } />
                            <Button onClick={ () => removeImage(index) } className="remove-image-button">×</Button>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
