<?php
/**
 * Template Name: Dev-Home
 *
 * @package Responsive_Framework
 */

get_header();
?>

<?php
while ( have_posts() ) :
	the_post();
	?>

	<h1>I'm the dev-home page template.</h1>

	<article id="post-<?php the_ID(); ?>" <?php post_class( 'content-area' ); ?>>

		<?php responsive_the_title(); ?>

		<?php the_content(); ?>

		<?php responsive_share_tools(); ?>

		<?php
		wp_link_pages(
			array(
				'before' => sprintf( '<div class="page-link">%s', esc_html__( 'Pages:', 'responsive-framework' ) ),
				'after'  => '</div>',
			)
		);
		?>

		<?php edit_post_link( __( 'Edit', 'responsive-framework' ), '<span class="edit-link">', '</span>' ); ?>

		<?php responsive_comments(); ?>

	</article>

<?php endwhile; ?>

<?php
get_sidebar();
get_footer();