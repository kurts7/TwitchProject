<!--div id="popup-window" style="margin-top: 0px; display: block;">
    <div class="close-popup" title="Закрыть"></div>
    <div class="inner"-->
        <div class="title-trigger">
            <a href="/static/signup" class="ajax-popup" ajax_file="auth.php" closeable="true" title="Вход">Вход</a><a href="/static/signup" class="ajax-popup" ajax_file="register.php" closeable="true" title="Регистрация">Регистрация</a>
        </div>
        <form action="" method="post">
            <div class="placeholder">Имя пользователя <nobr>(как на twitch.tv)</nobr></div>
            <input autocomplete="off" name="login" value="" type="text" maxlength="30">
            <div class="placeholder">Email</div>
            <input autocomplete="off" name="email" value="" type="email" maxlength="50">
            <div class="google-recaptcha loader-02 normal">
                <script src="https://www.google.com/recaptcha/api.js"></script>
                <div class="g-recaptcha" data-size="normal" data-sitekey="6Le3dxkUAAAAAGFDsrH-d1iNr4XAohLqZOPtxBA0"></div>
            </div>
            <input type="hidden" name="remind_password" value="237167f33265d8b4c9aad47228be5869">
            <div class="pre-submit"></div>
            <div class="center">
                <div class="cool-button form-submitter">Восстановить доступ</div>
            </div>
            <input type="submit" class="hidden">
        </form>
    </div>
<!--/div-->