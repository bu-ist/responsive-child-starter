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
 * 1.0.0 should be reserved for the official site launch.
 * @link https://semver.org/
 */
define( 'RESPONSIVE_CHILD_THEME_VERSION', '0.0.1' );

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


/**
 * Development hooks for use in designing sections rapidly.
 * TODO: Delete this function and related templates before going live.
 */
function dev_sections(){

	// Branding
	function r_before_branding_masterplate(){
		include_once 'php-dev/r_before_branding_masterplate.php';
	}
	add_filter( 'r_before_branding_masterplate', 'r_before_branding_masterplate');

	function r_after_branding_masterplate(){
		include_once 'php-dev/r_after_branding_masterplate.php';
	}
	add_filter( 'r_after_branding_masterplate', 'r_after_branding_masterplate');

	function r_before_bumc_branding_logo(){
		include_once 'php-dev/r_before_bumc_branding_logo.php';
	}
	add_filter( 'r_before_bumc_branding_logo', 'r_before_bumc_branding_logo');

	function r_after_bumc_branding_logo(){
		include_once 'php-dev/r_after_bumc_branding_logo.php';
	}
	add_filter( 'r_after_bumc_branding_logo', 'r_after_bumc_branding_logo');

	function r_before_branding_disclaimer(){
		include_once 'php-dev/r_before_branding_disclaimer.php';
	}
	add_filter( 'r_before_branding_disclaimer', 'r_before_branding_disclaimer');

	function r_after_branding_disclaimer(){
		include_once 'php-dev/r_after_branding_disclaimer.php';
	}
	add_filter( 'r_after_branding_disclaimer', 'r_after_branding_disclaimer');

	// Header Hooks
	function r_after_opening_body_tag(){
		include_once 'php-dev/r_after_opening_body_tag.php';
	}
	add_filter( 'r_after_opening_body_tag', 'r_after_opening_body_tag');

	function r_before_masthead(){
		include_once 'php-dev/r_before_masthead.php';
	}
	add_filter( 'r_before_masthead', 'r_before_masthead');

	function r_after_masthead(){
		include_once 'php-dev/r_after_masthead.php';
	}
	add_filter( 'r_after_masthead', 'r_after_masthead');

	function r_before_opening_wrapper(){
		include_once 'php-dev/r_before_opening_wrapper.php';
	}
	add_filter( 'r_before_opening_wrapper', 'r_before_opening_wrapper');

	function r_after_opening_wrapper(){
		include_once 'php-dev/r_after_opening_wrapper.php';
	}
	add_filter( 'r_after_opening_wrapper', 'r_after_opening_wrapper');

	function r_before_opening_container_outer(){
		include_once 'php-dev/r_before_opening_container_outer.php';
	}
	add_filter( 'r_before_opening_container_outer', 'r_before_opening_container_outer');

	function r_after_opening_container_outer(){
		include_once 'php-dev/r_after_opening_container_outer.php';
	}
	add_filter( 'r_after_opening_container_outer', 'r_after_opening_container_outer');

	function r_before_opening_container_inner(){
		include_once 'php-dev/r_before_opening_container_inner.php';
	}
	add_filter( 'r_before_opening_container_inner', 'r_before_opening_container_inner');

	function r_after_opening_container_inner(){
		include_once 'php-dev/r_after_opening_container_inner.php';
	}
	add_filter( 'r_after_opening_container_inner', 'r_after_opening_container_inner');


	// Content Hooks

	// Sidebar
	function r_sidebar_opening_before(){
		include_once 'php-dev/r_sidebar_opening_before.php';
	}
	add_filter( 'r_sidebar_opening_before', 'r_sidebar_opening_before');

	function r_sidebar_opening_after(){
		include_once 'php-dev/r_sidebar_opening_after.php';
	}
	add_filter( 'r_sidebar_opening_after', 'r_sidebar_opening_after');

	function r_sidebar_closing_before(){
		include_once 'php-dev/r_sidebar_closing_before.php';
	}
	add_filter( 'r_sidebar_closing_before', 'r_sidebar_closing_before');

	function r_sidebar_closing_after(){
		include_once 'php-dev/r_sidebar_closing_after.php';
	}
	add_filter( 'r_sidebar_closing_after', 'r_sidebar_closing_after');


	// Sidebar Bottom
	function r_sidebar_footbar_opening_before(){
		include_once 'php-dev/r_sidebar_footbar_opening_before.php';
	}
	add_filter( 'r_sidebar_footbar_opening_before', 'r_sidebar_footbar_opening_before');

	function r_sidebar_footbar_opening_after(){
		include_once 'php-dev/r_sidebar_footbar_opening_after.php';
	}
	add_filter( 'r_sidebar_footbar_opening_after', 'r_sidebar_footbar_opening_after');

	function r_sidebar_footbar_closing_before(){
		include_once 'php-dev/r_sidebar_footbar_closing_before.php';
	}
	add_filter( 'r_sidebar_footbar_closing_before', 'r_sidebar_footbar_closing_before');

	function r_sidebar_footbar_closing_after(){
		include_once 'php-dev/r_sidebar_footbar_closing_after.php';
	}
	add_filter( 'r_sidebar_footbar_closing_after', 'r_sidebar_footbar_closing_after');

	// Sidebar Calendar
	function r_sidebar_calendar_opening_before(){
		include_once 'php-dev/r_sidebar_calendar_opening_before.php';
	}
	add_filter( 'r_sidebar_calendar_opening_before', 'r_sidebar_calendar_opening_before');

	function r_sidebar_calendar_opening_after(){
		include_once 'php-dev/r_sidebar_calendar_opening_after.php';
	}
	add_filter( 'r_sidebar_calendar_opening_after', 'r_sidebar_calendar_opening_after');

	function r_sidebar_calendar_closing_before(){
		include_once 'php-dev/r_sidebar_calendar_closing_before.php';
	}
	add_filter( 'r_sidebar_calendar_closing_before', 'r_sidebar_calendar_closing_before');

	function r_sidebar_calendar_closing_after(){
		include_once 'php-dev/r_sidebar_calendar_closing_after.php';
	}
	add_filter( 'r_sidebar_calendar_closing_after', 'r_sidebar_calendar_closing_after');

	// Sidebar Posts
	function r_sidebar_posts_opening_before(){
		include_once 'php-dev/r_sidebar_posts_opening_before.php';
	}
	add_filter( 'r_sidebar_posts_opening_before', 'r_sidebar_posts_opening_before');

	function r_sidebar_posts_opening_after(){
		include_once 'php-dev/r_sidebar_posts_opening_after.php';
	}
	add_filter( 'r_sidebar_posts_opening_after', 'r_sidebar_posts_opening_after');

	function r_sidebar_posts_closing_before(){
		include_once 'php-dev/r_sidebar_posts_closing_before.php';
	}
	add_filter( 'r_sidebar_posts_closing_before', 'r_sidebar_posts_closing_before');

	function r_sidebar_posts_closing_after(){
		include_once 'php-dev/r_sidebar_posts_closing_after.php';
	}
	add_filter( 'r_sidebar_posts_closing_after', 'r_sidebar_posts_closing_after');


	// Sidebar Profiles
	function r_sidebar_profiles_opening_before(){
		include_once 'php-dev/r_sidebar_profiles_opening_before.php';
	}
	add_filter( 'r_sidebar_profiles_opening_before', 'r_sidebar_profiles_opening_before');

	function r_sidebar_profiles_opening_after(){
		include_once 'php-dev/r_sidebar_profiles_opening_after.php';
	}
	add_filter( 'r_sidebar_profiles_opening_after', 'r_sidebar_profiles_opening_after');

	function r_sidebar_profiles_closing_before(){
		include_once 'php-dev/r_sidebar_profiles_closing_before.php';
	}
	add_filter( 'r_sidebar_profiles_closing_before', 'r_sidebar_profiles_closing_before');

	function r_sidebar_profiles_closing_after(){
		include_once 'php-dev/r_sidebar_profiles_closing_after.php';
	}
	add_filter( 'r_sidebar_profiles_closing_after', 'r_sidebar_profiles_closing_after');


//	 Comment Hooks
	function comment_form_hook(){
		include_once 'php-dev/comment_form.php';
	}
	add_filter( 'comment_form', 'comment_form_hook');


	// Footer hooks
	function r_before_closing_container_inner(){
		include_once 'php-dev/r_before_closing_container_inner.php';
	}
	add_filter( 'r_before_closing_container_inner', 'r_before_closing_container_inner');

	function r_after_closing_container_inner(){
		include_once 'php-dev/r_after_closing_container_inner.php';
	}
	add_filter( 'r_after_closing_container_inner', 'r_after_closing_container_inner');

	function r_before_closing_container_outer(){
		include_once 'php-dev/r_before_closing_container_outer.php';
	}
	add_filter( 'r_before_closing_container_outer', 'r_before_closing_container_outer');

	function r_after_closing_container_outer(){
		include_once 'php-dev/r_before_closing_container_outer.php';
	}
	add_filter( '	r_after_closing_container_outer', '	r_after_closing_container_outer');

	function r_before_closing_wrapper(){
		include_once 'php-dev/r_before_closing_wrapper.php';
	}
	add_filter( 'r_before_closing_wrapper', 'r_before_closing_wrapper');

	function r_after_closing_wrapper(){
		include_once 'php-dev/r_after_closing_wrapper.php';
	}
	add_filter( 'r_after_closing_wrapper', 'r_after_closing_wrapper');

	function r_before_footer_brand_assets(){
		include_once 'php-dev/r_before_footer_brand_assets.php';
	}
	add_filter( 'r_before_footer_brand_assets', 'r_before_footer_brand_assets');

	function r_after_footer_brand_assets(){
		include_once 'php-dev/r_after_footer_brand_assets.php';
	}
	add_filter( 'r_after_footer_brand_assets', 'r_after_footer_brand_assets');

	function r_before_footer_menus(){
		include_once 'php-dev/r_sidebar_footbar_closing_after.php';
	}
	add_filter( 'r_before_footer_menus', 'r_before_footer_menus');

	function r_after_footer_menus(){
		include_once 'php-dev/r_after_footer_menus.php';
	}
	add_filter( 'r_after_footer_menus', 'r_after_footer_menus');

	function r_before_closing_body_tag(){
		include_once 'php-dev/r_before_closing_body_tag.php';
	}
	add_filter( 'r_before_closing_body_tag', 'r_before_closing_body_tag');

}
add_filter( 'after_setup_theme', 'dev_sections' );
