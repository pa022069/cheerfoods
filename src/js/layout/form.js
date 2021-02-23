var FORM_NAME,
    FORM_PHONE,
    FORM_EMAIL,
    FORM_ADDRESS;
var ALL_LINK = "https://www.cheerfoodscampaign.com.tw/product.html";
var dd = new Date()
formFn = function () {
    var re = /^[0]{1}[9]{1}[0-9]{8}$/;
    var emailRule = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;

    function enter() {}

    function leave() {}

    function reset() {}

    function share() {
        var SHAREURL = "https://www.cheerfoodscampaign.com.tw/app/api/Share.php";
        window.location.href = 'https://www.facebook.com/dialog/share?app_id=2183382471805518&href=' + encodeURIComponent(SHAREURL + "?Pic=" + getIndexNum) + "&redirect_uri=" + ALL_LINK + "&t=" + dd.getTime();

        // if (isMobile()) {
        //     window.location.href = 'https://www.facebook.com/dialog/share?app_id=2183382471805518&href=' + encodeURIComponent(SHAREURL + "?Pic=" + getIndexNum) + "&redirect_uri=" + ALL_LINK;
        //     // window.location.href = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(SHAREURL) + "?Pic=" + getIndexNum
        // } else {
        //     window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(SHAREURL) + "?Pic=" + getIndexNum,
        //     'facebook-share-dialog',
        //     'width=600,height=600'
        // );        }
    }

    function sendData() {
        $.ajax({
            url: "app/api/AddForm.php",
            dataType: "json",
            data: {
                "name": FORM_NAME,
                "phone": FORM_PHONE,
                "email": FORM_EMAIL,
                "address": FORM_ADDRESS,
            },
            type: "POST",
            // beforeSend: function () {
            //     //請求前的處理
            // },
            success: function (result) {
                //請求成功時處理
                console.log(result);
                if (result.data.status) {
                    share();
                } else {
                    alert("已重複登入活動！")
                }
            },
            // complete: function () {
            //     //請求完成的處理
            // },
            // error: function () {
            //     //請求出錯處理
            // }
        });
    }

    $(function () {
        $(".form .send").click(function () {
            FORM_NAME = $("#name").val();
            FORM_PHONE = $("#phone").val();
            FORM_EMAIL = $("#email").val();
            FORM_ADDRESS = $("#city").val() + $("#area").val() + $("#address").val();

            if (!$("#agree").is(':checked')) {
                alert("請確認同意活動辦法隱私權條款");
            } else if (!FORM_NAME) {
                alert("請輸入姓名");
            } else if (!FORM_PHONE) {
                alert("請輸入手機");
            } else if (!FORM_EMAIL) {
                alert("請輸入信箱");
            } else if (!$("#city").val()) {
                alert("請選擇縣/市");
            } else if (!$("#area").val()) {
                alert("請選擇地區");
            } else if (!$("#address").val()) {
                alert("請輸入地址");
            } else if (!re.test(FORM_PHONE)) {
                alert("請輸入正確手機格式");
            } else if (!emailRule.test(FORM_EMAIL)) {
                alert("請輸入正確信箱格式");
            } else {
                sendData();
            }
        });
    });
    return {
        enter: function () {
            enter();
        },
        leave: function () {
            leave();
        },
        reset: function () {
            reset();
        }
    }
}

var buildFrom = new formFn();