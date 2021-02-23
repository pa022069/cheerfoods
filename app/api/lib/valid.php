<?php

//驗證信箱
function isEmail($str)
{
    if (filter_var($str, FILTER_VALIDATE_EMAIL)) {
        return true; // valid
    } else {
        return false; // invalid
    }
}

// 驗證台灣手機號碼
function isPhone($str)
{
    if (preg_match("/^09[0-9]{2}-[0-9]{3}-[0-9]{3}$/", $str)) {
        return true; // 09xx-xxx-xxx
    } else if (preg_match("/^09[0-9]{2}-[0-9]{6}$/", $str)) {
        return true; // 09xx-xxxxxx
    } else if (preg_match("/^09[0-9]{8}$/", $str)) {
        return true; // 09xxxxxxxx
    } else {
        return false;
    }
}

?>
