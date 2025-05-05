<?php

/**
 * Load services definition file.
 */
$settings['container_yamls'][] = __DIR__ . '/services.yml';

/**
 * Include the Pantheon-specific settings file.
 *
 * n.b. The settings.pantheon.php file makes some changes
 *      that affect all environments that this site
 *      exists in.  Always include this file, even in
 *      a local development environment, to ensure that
 *      the site settings remain consistent.
 */
include __DIR__ . "/settings.pantheon.php";

/**
 * Skipping permissions hardening will make scaffolding
 * work better, but will also raise a warning when you
 * install Drupal.
 *
 * https://www.drupal.org/project/drupal/issues/3091285
 */
// $settings['skip_permissions_hardening'] = TRUE;
/*$settings['config_sync_directory'] = '../config/sync';

$settings['hash_salt'] = 'votre_cle_secrete_unique_ici';
$databases['default']['default'] = [
    'database' => 'pricing',
    'username' => 'root',
    'password' => '', // (vide par défaut dans XAMPP)
    'host' => '127.0.0.1',
    'port' => '3306',
    'driver' => 'mysql',
];*/
/**
 * If there is a local settings file, then include it
 */
$local_settings = __DIR__ . "/settings.local.php";
if (file_exists($local_settings)) {
  include $local_settings;
}
