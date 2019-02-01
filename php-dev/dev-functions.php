<?php
/**
 * Development hooks for use in designing sections rapidly.
 * To use change the value for each hook to `true` to display and `false` to hide.
 * Add HTML code into the file name matching the hook.
 *
 * TODO: Delete this function and related templates before going live.
 *
 * @package responsive-child-starter
 */

/**
 * This function adds an anonymous function for each action hook that will include
 * the corresponding file in this directory on the output of the website.
 *
 * To use change the value of the a hook to true for it to be displayed.
 * Change the value of the hook to false to remove it.
 *
 * Go to the corresponding file name in this directory and add your html code for
 * quickly getting into HTML/CSS/SASS development. Add CSS/SASS per usual standards.
 *
 * Using these hooks will put the section you are working on in it's final position
 * on the website. This will allow development with correct margins and placements.
 *
 * When the back end developer begins work, they will copy your code from this sections
 * and place in a permanent template and add code that dynamically populates data.
 * Note: The back end developer will use the hook that you are using make sure the
 * hook you are using is the correct placement!
 *
 * Before the official launch, these development files will be deleted including
 * this entire directory. However, with version control, these files will be preserved
 * in the Git history. If all items are deleted at once you can easily find by
 * looking for closed Pull Request that deleted these files.
 *
 * Note: These sections will appear on all pages! The back end developer will limit
 * the output to appropriate page templates when finalizing the code.
 *
 * Note: If you notice any hooks missing please add them to the $hooks array, create
 * a new section file, and add a new function.
 */
function dev_sections() {

	$hooks = array(

		// Navigation hooks.
		'responsive_primary_nav_before'     => true,
		'responsive_primary_nav_after'      => true,
		'responsive_utility_nav_before'     => true,
		'responsive_utility_nav_after'      => true,
		'responsive_before_mega_nav'        => true,
		'responsive_after_mega_nav'         => true,

		// Branding hooks.
		'r_before_branding_masterplate'     => true,
		'r_after_branding_masterplate'      => true,
		'r_before_bumc_branding_logo'       => true,
		'r_after_bumc_branding_logo'        => true,
		'r_before_branding_disclaimer'      => true,
		'r_after_branding_disclaimer'       => true,
		'r_after_opening_body_tag'          => true,
		'r_before_masthead'                 => true,
		'r_after_masthead'                  => true,
		'r_before_opening_wrapper'          => true,
		'r_after_opening_wrapper'           => true,
		'r_before_opening_container_outer'  => true,
		'r_after_opening_container_outer'   => true,
		'r_before_opening_container_inner'  => true,
		'r_after_opening_container_inner'   => true,

		// Content hooks.
		// Sidebar hooks.
		'r_sidebar_opening_before'          => true,
		'r_sidebar_opening_after'           => true,
		'r_sidebar_closing_before'          => true,
		'r_sidebar_closing_after'           => true,

		// Sidebar bottom hooks.
		'r_sidebar_footbar_opening_before'  => true,
		'r_sidebar_footbar_opening_after'   => true,
		'r_sidebar_footbar_closing_before'  => true,
		'r_sidebar_footbar_closing_after'   => true,

		// Sidebar calendar hooks.
		'r_sidebar_calendar_opening_before' => true,
		'r_sidebar_calendar_opening_after'  => true,
		'r_sidebar_calendar_closing_before' => true,
		'r_sidebar_calendar_closing_after'  => true,

		// Sidebar posts hooks.
		'r_sidebar_posts_opening_before'    => true,
		'r_sidebar_posts_opening_after'     => true,
		'r_sidebar_posts_closing_before'    => true,
		'r_sidebar_posts_closing_after'     => true,

		// Sidebar profiles hooks.
		'r_sidebar_profiles_opening_before' => true,
		'r_sidebar_profiles_opening_after'  => true,
		'r_sidebar_profiles_closing_before' => true,
		'r_sidebar_profiles_closing_after'  => true,

		// Comment hooks.
		'comment_form'                      => true,

		// Footer hooks.
		'r_before_closing_container_inner'  => true,
		'r_after_closing_container_inner'   => true,
		'r_before_closing_container_outer'  => true,
		'r_after_closing_container_outer'   => true,
		'r_before_closing_wrapper'          => true,
		'r_after_closing_wrapper'           => true,
		'r_before_footer_brand_assets'      => true,
		'r_after_footer_brand_assets'       => true,
		'r_before_footer_menus'             => true,
		'r_after_footer_menus'              => true,
		'r_before_closing_body_tag'         => true,
	);

	global $hook_messages; // Global OK will only be used in development stage.
	foreach ( $hooks as $hook => $include ) {
		$git_url                = 'https://github.com/bu-ist/responsive-framework/search?q=' . $hook;
		$message                = '<p>';
		$message               .= 'This is the location for the ';
		$message               .= '<a href="' . esc_url( $git_url ) . '">' . $hook . ' hook.</a>';
		$message               .= '</p>';
		$hook_messages[ $hook ] = $message;
	}

	foreach ( $hooks as $hook => $include ) {
		global $r_git_text_link;
		$r_git_text_link = $hook;
		if ( $include ) {
			add_action( $hook, $hook );
		}
	}
}

// Menu hooks.
/**
 * Action hook for indicated hook.
 */
function responsive_primary_nav_before() {
	include_once 'responsive-primary-nav-before.php';
}

/**
 * Action hook for indicated hook.
 */
function responsive_primary_nav_after() {
	include_once 'responsive-primary-nav-after.php';
}

/**
 * Action hook for indicated hook.
 */
function responsive_utility_nav_before() {
	include_once 'responsive-utility-nav-before.php';
}

/**
 * Action hook for indicated hook.
 */
function responsive_utility_nav_after() {
	include_once 'responsive-utility-nav-after.php';
}

/**
 * Action hook for indicated hook.
 */
function responsive_before_mega_nav() {
	include_once 'responsive-before-mega-nav.php';
}

/**
 * Action hook for indicated hook.
 */
function responsive_after_mega_nav() {
	include_once 'responsive-after-mega-nav.php';
}

// Branding hooks.
/**
 * Action hook for indicated hook.
 */
function r_before_branding_masterplate() {
	include_once 'r-before-branding-masterplate.php';
}

/**
 * Action hook for indicated hook.
 */
function r_after_branding_masterplate() {
	include_once 'r-after-branding-masterplate.php';
}

/**
 * Action hook for indicated hook.
 */
function r_before_bumc_branding_logo() {
	include_once 'r-before-bumc-branding-logo.php';
}

/**
 * Action hook for indicated hook.
 */
function r_after_bumc_branding_logo() {
	include_once 'r-after-bumc-branding-logo.php';
}

/**
 * Action hook for indicated hook.
 */
function r_before_branding_disclaimer() {
	include_once 'r-before-branding-disclaimer.php';
}

/**
 * Action hook for indicated hook.
 */
function r_after_branding_disclaimer() {
	include_once 'r-after-branding-disclaimer.php';
}

// Header Hooks.
/**
 * Action hook for indicated hook.
 */
function r_after_opening_body_tag() {
	include_once 'r-after-opening-body-tag.php';
}

/**
 * Action hook for indicated hook.
 */
function r_before_masthead() {
	include_once 'r-before-masthead.php';
}

/**
 * Action hook for indicated hook.
 */
function r_after_masthead() {
	include_once 'r-after-masthead.php';
}

/**
 * Action hook for indicated hook.
 */
function r_before_opening_wrapper() {
	include_once 'r-before-opening-wrapper.php';
}

/**
 * Action hook for indicated hook.
 */
function r_after_opening_wrapper() {
	include_once 'r-after-opening-wrapper.php';
}

/**
 * Action hook for indicated hook.
 */
function r_before_opening_container_outer() {
	include_once 'r-before-opening-container-outer.php';
}

/**
 * Action hook for indicated hook.
 */
function r_after_opening_container_outer() {
	include_once 'r-after-opening-container-outer.php';
}

/**
 * Action hook for indicated hook.
 */
function r_before_opening_container_inner() {
	include_once 'r-before-opening-container-inner.php';
}

/**
 * Action hook for indicated hook.
 */
function r_after_opening_container_inner() {
	include_once 'r-after-opening-container-inner.php';
}

// Content Hooks.
// Sidebar hooks.
/**
 * Action hook for indicated hook.
 */
function r_sidebar_opening_before() {
	include_once 'r-sidebar-opening-before.php';
}

/**
 * Action hook for indicated hook.
 */
function r_sidebar_opening_after() {
	include_once 'r-sidebar-opening-after.php';
}

/**
 * Action hook for indicated hook.
 */
function r_sidebar_closing_before() {
	include_once 'r-sidebar-closing-before.php';
}

/**
 * Action hook for indicated hook.
 */
function r_sidebar_closing_after() {
	include_once 'r-sidebar-closing-after.php';
}

// Sidebar Bottom.
/**
 * Action hook for indicated hook.
 */
function r_sidebar_footbar_opening_before() {
	include_once 'r-sidebar-footbar-opening-before.php';
}

/**
 * Action hook for indicated hook.
 */
function r_sidebar_footbar_opening_after() {
	include_once 'r-sidebar-footbar-opening-after.php';
}

/**
 * Action hook for indicated hook.
 */
function r_sidebar_footbar_closing_before() {
	include_once 'r-sidebar-footbar-closing-before.php';
}

/**
 * Action hook for indicated hook.
 */
function r_sidebar_footbar_closing_after() {
	include_once 'r-sidebar-footbar-closing-after.php';
}


// Sidebar Calendar hooks.
/**
 * Action hook for indicated hook.
 */
function r_sidebar_calendar_opening_before() {
	include_once 'r-sidebar-calendar-opening-before.php';
}

/**
 * Action hook for indicated hook.
 */
function r_sidebar_calendar_opening_after() {
	include_once 'r-sidebar-calendar-opening-after.php';
}

/**
 * Action hook for indicated hook.
 */
function r_sidebar_calendar_closing_before() {
	include_once 'r-sidebar-calendar-closing-before.php';
}

/**
 * Action hook for indicated hook.
 */
function r_sidebar_calendar_closing_after() {
	include_once 'r-sidebar-calendar-closing-after.php';
}


// Sidebar posts hooks.
/**
 * Action hook for indicated hook.
 */
function r_sidebar_posts_opening_before() {
	include_once 'r-sidebar-posts-opening-before.php';
}

/**
 * Action hook for indicated hook.
 */
function r_sidebar_posts_opening_after() {
	include_once 'r-sidebar-posts-opening-after.php';
}

/**
 * Action hook for indicated hook.
 */
function r_sidebar_posts_closing_before() {
	include_once 'r-sidebar-posts-closing-before.php';
}

/**
 * Action hook for indicated hook.
 */
function r_sidebar_posts_closing_after() {
	include_once 'r-sidebar-posts-closing-after.php';
}

// Sidebar profiles hooks.
/**
 * Action hook for indicated hook.
 */
function r_sidebar_profiles_opening_before() {
	include_once 'r-sidebar-profiles-opening-before.php';
}

/**
 * Action hook for indicated hook.
 */
function r_sidebar_profiles_opening_after() {
	include_once 'r-sidebar-profiles-opening-after.php';
}

/**
 * Action hook for indicated hook.
 */
function r_sidebar_profiles_closing_before() {
	include_once 'r-sidebar-profiles-closing-before.php';
}

/**
 * Action hook for indicated hook.
 */
function r_sidebar_profiles_closing_after() {
	include_once 'r-sidebar-profiles-closing-after.php';
}

// Comment hooks.
/**
 * Action hook for indicated hook.
 */
function comment_form_hook() {
	include_once 'comment-form.php';
}

// Footer hooks.
/**
 * Action hook for indicated hook.
 */
function r_before_closing_container_inner() {
	include_once 'r-before-closing-container-inner.php';
}

/**
 * Action hook for indicated hook.
 */
function r_after_closing_container_inner() {
	include_once 'r-after-closing-container-inner.php';
}

/**
 * Action hook for indicated hook.
 */
function r_before_closing_container_outer() {
	include_once 'r-before-closing-container-outer.php';
}

/**
 * Action hook for indicated hook.
 */
function r_after_closing_container_outer() {
	include_once 'r-before-closing-container-outer.php';
}

/**
 * Action hook for indicated hook.
 */
function r_before_closing_wrapper() {
	include_once 'r-before-closing-wrapper.php';
}

/**
 * Action hook for indicated hook.
 */
function r_after_closing_wrapper() {
	include_once 'r-after-closing-wrapper.php';
}

/**
 * Action hook for indicated hook.
 */
function r_before_footer_brand_assets() {
	include_once 'r-before-footer-brand-assets.php';
}

/**
 * Action hook for indicated hook.
 */
function r_after_footer_brand_assets() {
	include_once 'r-after-footer-brand-assets.php';
}

/**
 * Action hook for indicated hook.
 */
function r_before_footer_menus() {
	include_once 'r-sidebar-footbar-closing-after.php';
}

/**
 * Action hook for indicated hook.
 */
function r_after_footer_menus() {
	include_once 'r-after-footer-menus.php';
}

/**
 * Action hook for indicated hook.
 */
function r_before_closing_body_tag() {
	include_once 'r-before-closing-body-tag.php';
}
