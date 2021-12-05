<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'test' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         ']pa/62N]Hke;j_mvFtp=PAZ>E122{yYc-M9>b<w6knUS_RZP;2%%*3m<zTcVKtGM' );
define( 'SECURE_AUTH_KEY',  'Lo*KoAc}M1E7wzC$n:br~[GKZu;e7oO+4Kd2L^$r^b-1xK/7iRZ+WSL|*1t&^b2M' );
define( 'LOGGED_IN_KEY',    ':9GKTzZAf}2VA-btc!$ sWx&c>In8rW7dNd9Ys6bOGQ|eXzOe;IJB|o_}6=`u&ji' );
define( 'NONCE_KEY',        ']-|G(:-^Iv%L>: b9r](GrDRGt2^W+QX%n6R)Uosu|Sup*Eh,qnN:jvvMS=+f0xD' );
define( 'AUTH_SALT',        ';<#o=X}ilw[2E7LaEpZj}$6G&$IF5x9{=NYo| g6Z3?u<Ws@)egQ,*sUMhL}3/O1' );
define( 'SECURE_AUTH_SALT', 'nN@VR${2<bY:F(u^m;<ST*v O-yo,r|) MR>6~l|(O -$d;wsG^cfVEeQA:z;#KO' );
define( 'LOGGED_IN_SALT',   'oOr!<fbXM6k&,I!gKk%I.^xsq]g[Ri2 V,eDV^RkcGVcmdkW&^b*gt;h^goH-l9M' );
define( 'NONCE_SALT',       'w6NB;_fP3_hKQr%E`Kfm}Ji2!b=x(kbAXH{;h!TKZfpa<klH^,}1<Zq[rH[T816[' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
