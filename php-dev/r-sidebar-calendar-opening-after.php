<?php
/**
 * This is a file stub for rapid development.
 *
 * Replace the HTML below for rapid development.
 *
 * The filename corresponds to the action hook.
 *
 * @package responsive-child-starter
 */

?>

<section>
	<?php
	global $hook_messages; // Global OK will only be used in development stage.
	echo wp_kses_post( $hook_messages['r_sidebar_calendar_opening_after'] );
	?>
</section>
