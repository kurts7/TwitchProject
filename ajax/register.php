<?php
session_start();
if(isset($_POST["register"])){

    //require '/config.php';

    if(isset($_POST["login"])){ $r_login = $_POST["login"]; }
    if(isset($_POST["email"])){ $r_email = $_POST["email"]; }
    if(isset($_POST["mypw"])){ $r_password1 = $_POST["mypw"]; }
    if(isset($_POST["mypw2"])){ $r_password2 = $_POST["mypw2"]; }
        //md5($_POST["r_password"]); }

    echo "<div class=\"title-trigger\">
            <a href=\"/static/login\" class=\"ajax-popup\" ajax_file=\"auth.php\" closeable=\"true\" title=\"Вход\">Вход</a><span>Регистрация</span>
        </div>
        <form action=\"\" method=\"post\">
            <div class=\"error\">Такого канала не существует</div>
            <div class=\"placeholder\">Название канала на twitch.tv</div>
            <input class=\"with-under-comment\" autocomplete=\"off\" name=\"login\" value=\"\" type=\"text\" maxlength=\"30\" tabindex=\"1\">
            <div class=\"field-under-comment\">Еще нет канала на twitch.tv? <a href=\"http://twitch.tv/signup\" target=\"_blank\" rel=\"nofollow\">Зарегистрируйтесь</a>.</div>
            <div class=\"placeholder\">Email</div>
            <input autocomplete=\"off\" name=\"email\" value=\"\" type=\"email\" maxlength=\"50\" tabindex=\"2\">
            <div class=\"placeholder\">Пароль</div>
            <input class=\"with-under-comment\" autocomplete=\"off\" name=\"mypw\" value=\"\" type=\"password\" maxlength=\"30\" tabindex=\"3\">
            <div class=\"field-under-comment\">Не менее 6 и не более 30 символов.</div>
            <div class=\"placeholder\">Пароль еще раз</div>
            <input autocomplete=\"off\" name=\"mypw2\" value=\"\" type=\"password\" maxlength=\"30\" tabindex=\"4\">
            <div class=\"google-recaptcha loader-02 normal\">
                <script src=\"https://www.google.com/recaptcha/api.js\"></script>
                <div class=\"g-recaptcha\" data-size=\"normal\" data-sitekey=\"6Le3dxkUAAAAAGFDsrH-d1iNr4XAohLqZOPtxBA0\"></div>
            </div>
            <input type=\"hidden\" name=\"register\" value=\"".session_id()."\">
            <div class=\"pre-submit\"></div>
            <div class=\"center\">
                <div class=\"cool-button form-submitter\">Зарегистрироваться</div>
            </div>
            <input type=\"submit\" class=\"hidden\">
        </form></div>";
}else{
    echo "<div class=\"title-trigger\">
            <a href=\"/static/login\" class=\"ajax-popup\" ajax_file=\"auth.php\" closeable=\"true\" title=\"Вход\">Вход</a><span>Регистрация</span>
        </div>
        <form action=\"\" method=\"post\">
            <div class=\"placeholder\">Название канала на twitch.tv</div>
            <input class=\"with-under-comment\" autocomplete=\"off\" name=\"login\" value=\"\" type=\"text\" maxlength=\"30\" tabindex=\"1\">
            <div class=\"field-under-comment\">Еще нет канала на twitch.tv? <a href=\"http://twitch.tv/signup\" target=\"_blank\" rel=\"nofollow\">Зарегистрируйтесь</a>.</div>
            <div class=\"placeholder\">Email</div>
            <input autocomplete=\"off\" name=\"email\" value=\"\" type=\"email\" maxlength=\"50\" tabindex=\"2\">
            <div class=\"placeholder\">Пароль</div>
            <input class=\"with-under-comment\" autocomplete=\"off\" name=\"mypw\" value=\"\" type=\"password\" maxlength=\"30\" tabindex=\"3\">
            <div class=\"field-under-comment\">Не менее 6 и не более 30 символов.</div>
            <div class=\"placeholder\">Пароль еще раз</div>
            <input autocomplete=\"off\" name=\"mypw2\" value=\"\" type=\"password\" maxlength=\"30\" tabindex=\"4\">
            <div class=\"google-recaptcha loader-02 normal\">
                <script src=\"https://www.google.com/recaptcha/api.js\"></script>
                <div class=\"g-recaptcha\" data-size=\"normal\" data-sitekey=\"6Le3dxkUAAAAAGFDsrH-d1iNr4XAohLqZOPtxBA0\"></div>
            </div>
            <input type=\"hidden\" name=\"register\" value=\"".session_id()."\">
            <div class=\"pre-submit\"></div>
            <div class=\"center\">
                <div class=\"cool-button form-submitter\">Зарегистрироваться</div>
            </div>
            <input type=\"submit\" class=\"hidden\">
        </form></div>";
}