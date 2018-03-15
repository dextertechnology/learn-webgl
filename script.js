window.addEventListener("load", function() {
    var paragraph = this.document.querySelector("p"),
    button = document.querySelector("button");

    button.addEventListener("click", detectWebGLContext, false);
    function detectWebGLContext () {
        var canvas = document.createElement("canvas");

        var gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");

        if (gl && gl instanceof WebGLRenderingContext) {
            paragraph.innerHTML = "Congratulation! Everython looks good.";
        } else {
            paragraph.innerHTML = "Failes to get WebGL context";
        }
    }
}, false);