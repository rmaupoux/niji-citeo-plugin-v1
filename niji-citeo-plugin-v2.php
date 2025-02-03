<?php
/**
 * Plugin Name:       Niji Citeo Plugin V2
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       niji-citeo-plugin
 *
 * @package CreateBlock
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_niji_citeo_plugin_block_init() {
	register_block_type( __DIR__ . '/build/1-section-1-two-columns' );
	register_block_type( __DIR__ . '/build/2-section-carrousel' );
	register_block_type( __DIR__ . '/build/3-button-style' );
	register_block_type( __DIR__ . '/build/4-faq' );
	register_block_type( __DIR__ . '/build/5-france-map' );
	register_block_type( __DIR__ . '/build/6-PanelColorSettings-demo' );
	register_block_type( __DIR__ . '/build/7-formulaire-popin' );
}
add_action( 'init', 'create_block_niji_citeo_plugin_block_init' );

function niji_citeo_enqueue_block_assets() {
    // Handle du script enregistré automatiquement pour le bloc
    $script_handle = 'niji-citeo-plugin-faqs-editor-script'; 

    // Vérifiez si le script est enregistré avant de le localiser
    if (wp_script_is($script_handle, 'registered')) {
        wp_localize_script(
            $script_handle,
            'totoData', 
            array(
                'toto' => 'bonjour', 
            )
        );
    }
}
add_action( 'enqueue_block_assets', 'niji_citeo_enqueue_block_assets' );




// Ajout de Js pour le carousel
function my_plugin_enqueue_assets() {
    wp_enqueue_script(
        '2-section-carrousel-script',
        plugins_url( 'src/2-section-carrousel/slider.js', __FILE__ ),
        array(), 
        1.0, 
        true // Charger dans le footer
    );
}
add_action( 'wp_enqueue_scripts', 'my_plugin_enqueue_assets' );