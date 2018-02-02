<?php
//error_reporting(E_ALL); ini_set('display_errors', 1);

/**
 * Основные параметры.
 *
 * Этот файл содержит следующие параметры: настройки MySQL и ABSPATH.
 *
 */

// ** Параметры MySQL: Эту информацию можно получить у вашего хостинг-провайдера ** //
/** Имя базы данных */
define('DB_NAME', 'fb7925mi_twitch');

/** Имя пользователя MySQL */
define('DB_USER', 'fb7925mi_twitch');

/** Пароль к базе данных MySQL */
define('DB_PASSWORD', 'p4a!T*s@');

/** Имя сервера MySQL */
define('DB_HOST', 'localhost');

/** Кодировка базы данных для создания таблиц. */
define('DB_CHARSET', 'utf8');

/** Схема сопоставления. Не меняйте, если не уверены. */
define('DB_COLLATE', '');

/** Абсолютный путь к директории */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Инициализирует переменные и подключает файлы. */
//require_once(ABSPATH . 'settings.php');
