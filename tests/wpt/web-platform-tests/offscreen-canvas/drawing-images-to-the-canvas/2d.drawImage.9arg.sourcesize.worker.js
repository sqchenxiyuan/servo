// DO NOT EDIT! This test has been generated by tools/gentest.py.
// OffscreenCanvas test in a worker:2d.drawImage.9arg.sourcesize
// Description:
// Note:

importScripts("/resources/testharness.js");
importScripts("/2dcontext/resources/canvas-tests.js");

var t = async_test("");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

var offscreenCanvas = new OffscreenCanvas(100, 50);
var ctx = offscreenCanvas.getContext('2d');

ctx.fillStyle = '#f00';
ctx.fillRect(0, 0, 100, 50);
var promise = new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", '/images/rgrg-256x256.png');
    xhr.responseType = 'blob';
    xhr.send();
    xhr.onload = function() {
        resolve(xhr.response);
    };
});
promise.then(function(response) {
    createImageBitmap(response).then(bitmap => {
        ctx.drawImage(bitmap, 0, 0, 256, 256, 0, 0, 100, 50);
        ctx.fillStyle = '#0f0';
        ctx.fillRect(0, 0, 51, 26);
        ctx.fillRect(49, 24, 51, 26);
        _assertPixelApprox(offscreenCanvas, 0,0, 0,255,0,255, "0,0", "0,255,0,255", 2);
        _assertPixelApprox(offscreenCanvas, 99,0, 0,255,0,255, "99,0", "0,255,0,255", 2);
        _assertPixelApprox(offscreenCanvas, 0,49, 0,255,0,255, "0,49", "0,255,0,255", 2);
        _assertPixelApprox(offscreenCanvas, 99,49, 0,255,0,255, "99,49", "0,255,0,255", 2);
        _assertPixelApprox(offscreenCanvas, 20,20, 0,255,0,255, "20,20", "0,255,0,255", 2);
        _assertPixelApprox(offscreenCanvas, 80,20, 0,255,0,255, "80,20", "0,255,0,255", 2);
        _assertPixelApprox(offscreenCanvas, 20,30, 0,255,0,255, "20,30", "0,255,0,255", 2);
        _assertPixelApprox(offscreenCanvas, 80,30, 0,255,0,255, "80,30", "0,255,0,255", 2);
    }, t_fail);
}).then(t_pass, t_fail);

});
done();
