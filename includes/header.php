<?php
session_start();
chdir($_SERVER['DOCUMENT_ROOT']);
$default_lang = "en"; // default language
$langs=array(
    'ru'=>array('ru','be','uk','ky','ab','mo','et','lv')
); // array of language matching
// put all settings and cookies to separate file
require('includes/functions.php');

if(!isset($_COOKIE['locale'])) {
    $encode = (get_user_lang2($default_lang, $langs) == 'ru') ? 'ru_RU.UTF-8' : 'en_US.UTF-8';
    setcookie('locale', $encode, time() + (86400 * 365), '/');
}
else
    $encode = $_COOKIE['locale'];

setlocale(LC_ALL, $encode);

bindtextdomain('messages', 'locale');

textdomain('messages');
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title><?php echo _("Twitch Star - сервис по бесплатной раскрутке каналов на Twitch.tv"); ?></title>
	<link href="/i/favicon.ico" rel="shortcut icon" type="image/x-icon" />
	<link rel="stylesheet" href="/css/style.css" />
	<script src="/js/jquery-1.11.2.min.js"></script>
	<script src="/js/index.js"></script>
</head>
<body>
<div class="wrapper">
    <div class="container">
        <div class="header">
            <div class="logo f-left">
                <a href="/"><img src="/i/logo.png" alt="Twitch Star"></a><div class="slogan"><?php echo _("бесплатное продвижение ваших каналов"); ?></div>
            </div>
            <!--div class="links f-right">
                <span class="menu-icon hidden"></span><span class="menu-content"><a href="/static/about"><?php echo _("О системе"); ?></a><span class="separator">|</span><a href="" class="menu-popup">ilk7</a><ul class="menu-popup-container hidden"><li><a href="/static/profile"><?php echo _("Профиль"); ?></a></li><li><a href="/ilk7"><?php echo _("Мой канал"); ?></a></li><li><a href="/rating"><?php echo _("Рейтинг"); ?></a></li><li class="separator"></li><li><a href="/loto"><?php echo _("Лотерея"); ?></a></li><li class="separator"></li><li><a href="/?logout"><?php echo _("Выход"); ?></a></li></ul></span>				</div>
            --><?php
chdir($_SERVER['DOCUMENT_ROOT']);?>
            <div class="links f-right">
                <span class="menu-icon hidden"></span><span class="menu-content"><a href="http://twitchstar.com/static/about.php">О системе</a><span class="separator">|</span><a href="http://twitchstar.com/static/login" class="ajax-popup" ajax_file="auth.php" closeable="true" title="Вход">Вход</a><a href="http://twitchstar.com/static/signup" class="cool-button ajax-popup" ajax_file="register.php" closeable="true" title="Регистрация">Регистрация</a></span>				</div>
            <div class="search f-right">
                <form action="/search" method="get">
                    <input placeholder="<?php echo _("Поиск"); ?>" type="text" name="t" maxlength="20"><div class="form-submitter"></div>
                </form>
            </div>
            <div class="clear"></div>
        </div>
    <!--/div-->