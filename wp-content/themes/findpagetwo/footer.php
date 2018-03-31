			<!-- footer -->
			<footer class="footer" role="contentinfo">

				<!-- copyright -->
				<p class="copyright">
					&copy; <?php echo date('Y'); ?> Copyright <?php bloginfo('name'); ?>.
				</p>
				<!-- /copyright -->

			</footer>
			<!-- /footer -->

		</div>
		<!-- /wrapper -->

		<?php wp_footer(); ?>
		<?php the_field('footer_script'); ?>
		<!-- analytics -->


	</body>
</html>
