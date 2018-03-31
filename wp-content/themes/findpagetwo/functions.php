<?php
add_action( 'wp_enqueue_scripts', 'enqueue_child_theme_styles', PHP_INT_MAX);
add_action( 'wp_enqueue_scripts','add_anim_script');


function enqueue_child_theme_styles() {
  wp_enqueue_style( 'parent-style', get_template_directory_uri().'/style.css' );
}


function add_anim_script() {
    wp_register_script('anim_script', get_stylesheet_directory_uri(). '/js/anim.js', array( 'jquery' ));
    wp_enqueue_script('anim_script');
}  

?>