DeviceOrientation = function (_target, _spped) {
    if (window.DeviceOrientationEvent) {
        window.addEventListener('deviceorientation', function (event) {
            var alpha = event.alpha,
                beta = event.beta,
                gamma = event.gamma,
                a = Math.round(alpha),
                b = Math.round(beta),
                g = Math.round(gamma);
            //   var a = document.getElementById('alpha'),
            //   		b = document.getElementById('beta'),
            //   		g = document.getElementById('gamma'),

            // a = Math.round(alpha);
            // b = Math.round(beta);
            // g = Math.round(gamma);
            if (b < 50 && b > -50) {
                TweenMax.set(_target, {
                    y: -b / _spped
                });
            }
            if (g < 30 && g > -30) {
                TweenMax.set(_target, {
                    x: -g / _spped
                });
            }
        }, false);
    } else {
        // document.querySelector('body').innerHTML = '你的瀏覽器不支援喔';
    }
}
var new_device_0 = new DeviceOrientation($(".layer-4"), 1.5);