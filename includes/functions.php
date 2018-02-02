<?php

// check user language interface
function get_user_lang2($default, $langs)
{
    if ($list = isset($_SERVER['HTTP_ACCEPT_LANGUAGE']) ? strtolower($_SERVER['HTTP_ACCEPT_LANGUAGE']) : null) {
        if (preg_match_all('/([a-z]{1,8}(?:-[a-z]{1,8})?)(?:;q=([0-9.]+))?/', $list, $list)) {
            $language = array_combine($list[1], $list[2]);
            foreach ($language as $n => $v)
                $language[$n] = $v ? $v : 1;
            arsort($language, SORT_NUMERIC);
        }
    } else $language = array();
    $languages=array();
    foreach ($langs as $lang => $alias) {
        if (is_array($alias)) {
            foreach ($alias as $alias_lang) {
                $languages[strtolower($alias_lang)] = strtolower($lang);
            }
        }else $languages[strtolower($alias)]=strtolower($lang);
    }
    foreach ($language as $l => $v) {
        $s = strtok($l, '-');
        if (isset($languages[$s]))
            return $languages[$s];
    }
    return $default;
}

?>