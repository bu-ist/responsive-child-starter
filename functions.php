<?php
/**
 * Theme functions
 *
 * @see  https://github.com/bu-ist/responsive-framework/wiki/Starting-a-new-Child-Theme
 *
 * @package Responsive_Child_Starter
 */

/**
 * Current theme's version.
 *
 * This DOES NOT control the version of Responsive Framework.
 *
 * It represents the version of this child theme and is used to version theme
 * assets (style.css, production.js, etc.) when loaded.
 */
define( 'RESPONSIVE_CHILD_THEME_VERSION', '1.0.0' );

/**
 * Specifies the responsive layout for the theme. Disables the option in the
 * Customizer.
 *
 * Removing this allows the layout to be changed in the Customizer.
 *
 * Available values: `default`, `top-nav`, `side-nav`, `no-nav`.
 *
 * @link https://github.com/bu-ist/responsive-framework-documentation/blob/2x-documentation/code-examples/Changing-Available-Layouts-And-Default-Layout.md
 */
define( 'BU_RESPONSIVE_LAYOUT', 'default' );

/**
 * Specifies the site's branding type. Disables the option in the Customizer.
 *
 * Removing this allows the branding type to be changed in the Customizer.
 *
 * Available values: `logotype`, `signature`, `unbranded`.
 */
define( 'BU_BRANDING_TYPE', 'logotype' );

/**
 * Defines a sidebar position for the theme. Disables the option in the
 * Customizer.
 *
 * Removing this allows the layout to be changed in the Customizer.
 *
 * Available values: `right`, `left`, `bottom`.
 */
define( 'BU_RESPONSIVE_SIDEBAR_POSITION', 'right' );
