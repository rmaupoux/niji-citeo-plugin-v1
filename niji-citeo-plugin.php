<?php
/**
 * Plugin Name:       Niji Citeo Plugin
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       niji-citeo-plugin
 *
 * @package NijiCiteoPlugin
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
function niji_citeo_register_all_blocks() {
    $build_dir = __DIR__ . '/build/';
    if ( ! is_dir( $build_dir ) ) {
        return;
    }

    $dirs = scandir( $build_dir );
    foreach ( $dirs as $dir ) {
        if ( $dir === '.' || $dir === '..' ) {
            continue;
        }
        $block_json = $build_dir . $dir . '/block.json';
        if ( file_exists( $block_json ) ) {
            register_block_type( $build_dir . $dir );
        }
    }
}
add_action( 'init', 'niji_citeo_register_all_blocks' );

function niji_citeo_enqueue_block_assets() {
    // Handle du script enregistré automatiquement pour le bloc
    $script_handle = 'niji-citeo-plugin-faqs-editor-script'; 

    // Vérifiez si le script est enregistré avant de le localiser
    if (wp_script_is($script_handle, 'registered')) {
        wp_localize_script(
            $script_handle,
            'totoData', 
            array(
                'toto' => __( 'bonjour', 'niji-citeo-plugin' ), 
            )
        );
    }
}
add_action( 'enqueue_block_assets', 'niji_citeo_enqueue_block_assets' );

// Ajout de JS pour le carrousel uniquement si le bloc est présent sur la page (front)
function niji_citeo_enqueue_carousel_assets() {
    if ( is_admin() ) {
        return; // Ne rien faire dans l'admin
    }
    global $post;
    if ( isset( $post ) && has_block( 'niji-citeo-plugin/2-section-carrousel', $post ) ) {
        wp_enqueue_script(
            '2-section-carrousel-script',
            plugins_url( 'src/2-section-carrousel/slider.js', __FILE__ ),
            array(), 
            1.0, 
            true // Charger dans le footer
        );
    }
}
add_action( 'wp_enqueue_scripts', 'niji_citeo_enqueue_carousel_assets' );