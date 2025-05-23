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
$settings['config_sync_directory'] = '../config/sync';

/**
 * If there is a local settings file, then include it
 */
$local_settings = __DIR__ . "/settings.local.php";
if (file_exists($local_settings)) {
  include $local_settings;
}
/*$databases['default']['default'] = [
  'database' => 'pricing',
  'username' => 'root',
  'password' => '',
  'prefix' => '',
  'host' => 'localhost',
  'port' => '3306',
  'isolation_level' => 'READ COMMITTED',
  'driver' => 'mysql',
  'namespace' => 'Drupal\\mysql\\Driver\\Database\\mysql',
  'autoload' => 'core/modules/mysql\\src\\Driver\\Database\\mysql\\',
];*/
$settings['hash_salt'] = 'Entr0AbxQO5KMJKUB1rTkAyOY1ax6ytDQwR1oh596bq9_wSIzkdeIVpRKb8FJ-rQILdWwnMzXQ';
