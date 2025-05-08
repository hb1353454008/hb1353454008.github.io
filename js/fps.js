// 显示帧数
if (window.localStorage.getItem("fpson") == undefined || window.localStorage.getItem("fpson") == "1") {
    var rAF = function () {
        return (
            window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            function (callback) {
                window.setTimeout(callback, 1000 / 60);
            }
        );
    }();
    var frame = 0;
    var allFrameCount = 0;
    var lastTime = Date.now();
    var lastFameTime = Date.now();
    var loop = function () {
        var now = Date.now();
        var fs = (now - lastFameTime);
        var fps = Math.round(1000 / fs);

        lastFameTime = now;
        // 不置 0，在动画的开头及结尾记录此值的差值算出 FPS
        allFrameCount++;
        frame++;

        if (now > 1000 + lastTime) {
            var fps = Math.round((frame * 1000) / (now - lastTime));
            if (fps <= 5) {
                var kd = `<span style="color:#bd0000">卡成PPT🤡</span>`
            } else if (fps <= 20) {
                var kd = `<span style="color:#e69388">什么小霸王😖</span>`
            } else if (fps <= 30) {
                var kd = `<span style="color:#dd8223">有点难受😥</span>`
            } else if (fps <=50) {
                var kd = `<span style="color:#9338e6">有点卡顿😅</span>`
            } else if (fps <= 60) {
                var kd = `<span style="color:#3cc32b">还挺流畅😁</span>`
            } else {
                var kd = `<span style="color:#39c5bb">德芙一样😎</span>`
            }
            document.getElementById("fps").innerHTML = `FPS:${fps} ${kd}`;
            frame = 0;
            lastTime = now;
        };

        rAF(loop);
    }

    loop();
} else {
    document.getElementById("fps").style = "display:none!important"
}