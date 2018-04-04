<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #content div and all content after
 *
 * @package understrap
 */

$the_theme = wp_get_theme();
$container = get_theme_mod( 'understrap_container_type' );
?>

<?php get_sidebar( 'footerfull' ); ?>

<div class="row footer-container">
				<div class="col-md-3 offset-md-1 shipping-privacy footer-content">
					<a href="#" class="footer-link">Shipping</a>
					<span> | </span>
					<a href="#" class="footer-link">Privacy</a>
				</div>
				<div class="col-md-3 offset-md-1">
										<div class="row">


						<div class="col-md-6 col-xs-6 social-links ">					<a href="https://www.instagram.com/skinshapes/"><img class="footer-social-icon footer-content" src="http://localhost:8080/skin-shapes-wordpress/wordpress/wp-content/themes/skin-shapes/images/Instagram_icon.png" ></a>
						</div>

						<div class="col-md-6 col-xs-6 social-links ">
							<a href="https://www.facebook.com/SKINSHAPES/">
							<img class="footer-social-icon footer-content" src="http://localhost:8080/skin-shapes-wordpress/wordpress/wp-content/themes/skin-shapes/images/facebook_icon.png">
							</a>
						</div>
					</div>
				</div>
				<div class="col-md-3 offset-md-1 footer-content">
					<p class="footer-link"><a href="http://scoder.com.au">	&copy; Website by Scoder</a></p>
				</div>
			</div>

</div><!-- #page we need this extra closing tag here -->

<?php wp_footer(); ?>

</body>

</html>

