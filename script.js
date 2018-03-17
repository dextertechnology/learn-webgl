window.addEventListener("load", function setupWebGL (evt) {
    "use strict"

    window.removeEventListener(evt.type, setupWebGL, false);

    var canvas = document.querySelector("#canvas-view");
    var button = document.querySelector("#color-switcher");
    canvas.addEventListener("click", switchColor, false);
    button.addEventListener("click", switchColor, false);

    var gl;

    function switchColor () {
        if (!gl) {
            gl = canvas.getContext("webgl")
            || canvas.getContext("experimental-webgl");
            if (!gl){
                alert("Failed to get WebGL context.\n"
            +"Your browser or device may not support WebGL.");
            return;
            }
            gl.viewport(0,0,
                gl.drawingBufferWidth, gl.drawingBufferHeight);
        }

        var color = getRandomColor();
        gl.clearColor(color[0], color[1], color[2], 1.0);

        gl.clear(gl.COLOR_BUFFER_BIT);
    }

    function getRandomColor() {
        return [Math.random(), Math.random(), Math.random()];
    }
    
}, false);