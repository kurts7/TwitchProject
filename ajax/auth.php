<!--div id="popup-window" style="margin-top: 0px; display: block;">
    <div class="close-popup" title="Закрыть"></div>
    <div class="inner"-->
        <div class="title-trigger">
            <span>Вход</span><a href="/static/signup" class="ajax-popup" ajax_file="register.php" closeable="true" title="Регистрация">Регистрация</a>
        </div>
        <form action="" method="post">
            <div class="placeholder">Имя пользователя</div>
            <input autocomplete="off" name="login" value="" type="text" maxlength="30">
            <div class="placeholder">Пароль</div>
            <input autocomplete="off" name="mypw" value="" type="password" maxlength="30">
            <label>
                <input type="checkbox" value="1" name="remember" checked=""> Запомнить меня здесь
            </label>
            <div class="coward forgot-password"><a href="/static/signup" class="ajax-popup" ajax_file="remind-password.php" closeable="true" title="Восстановить доступ">Возникли проблемы со входом в аккаунт?</a></div>
            <input type="hidden" name="authorize" value="237167f33265d8b4c9aad47228be5869">
            <div class="pre-submit"></div>
            <div class="center">
                <div class="cool-button form-submitter">Войти</div>
            </div>
            <input type="submit" class="hidden">
        </form></div>
<!--/div-->