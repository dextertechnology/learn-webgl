window.addEventListener("load", function setupWebGL (evt) {
    "use strict"

    window.removeEventListener(evt.type, setupWebGL, false);

    var paragraph = document.querySelector("p"),
    canvas = document.querySelector("canvas");

    var gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");

    if (!gl) {
        paragraph.innerHTML = "Failed to get WebGL context. " + "Your browser or device may not support WebGL.";
        return;
    }

    paragraph.innerHTML = "Congratulation! Your browser supports WebGL. ";

    gl.viewport(0, 0,
    gl.drawingBufferWidth, gl.drawingBufferHeight);
    gl.clearColor(0.0, 0.8, 0.7, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    
}, false);