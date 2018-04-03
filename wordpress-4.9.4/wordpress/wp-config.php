<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'skin-shapes-bootstrap-wp');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', '');

/** MySQL hostname */
define('DB_HOST', '127.0.0.1');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '1%I6+9^1EOk/HSIi> eu7X7~N.i>Xlkdn<L>KaLc9J}?Oa4OMB?!FBN^9b>FCxS/');
define('SECURE_AUTH_KEY',  '6W{n?2HTH U=Myo!,Z?a,}:G/_D0# }75mo(vCA[@Ei` z|O>L>Z-*Ui-6Z0dxJ>');
define('LOGGED_IN_KEY',    '6!2kmN:eE.mwc<B>mX[804#g,}tcspWqhByj~tZ-5 dz#,YYa<[B^Hx!{N$GfQ#c');
define('NONCE_KEY',        'kE:C|=Qds6CORO*@_!O1$C6#~TI@l2dHfyOYH`: mU=de;|pGOL&0MSX>D<&U~3&');
define('AUTH_SALT',        'etSke-f`(SjhCz#C/y<%H1EQ(Pr9v9K=n33Tc*SRPbC.X?<F({}eoo7%<ms(/zmv');
define('SECURE_AUTH_SALT', 'VAVr12Tk/oOA?P,_zL:/gF<S_}AI-i;$oQ-1W{Br3y9xk4M&u }4qd:5vF;Nt(]u');
define('LOGGED_IN_SALT',   '@=il <}I8nh3)jrG1!1I@[i?*TjC*e4.lm A)Gp,.AHJjn6|2tt|IK?<Ppr:o}~_');
define('NONCE_SALT',       '0Pf*Qh]EccYW1w[L0z9)MBMd~* q{$W^itD5]C:oJVJkBse]]T+_(yK`Ae7.#%]i');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
