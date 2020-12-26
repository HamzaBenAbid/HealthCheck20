const { takePicture } = require("../../plugins/cordova-plugin-camera/src/browser/CameraProxy");

document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    document.getElementById('upload').addEventListener('click',takePicture);

    function takePicture(){
        navigator.camera.getPicture(success,console.error{
            quality:50,
            destinationType:camera.DestinationType.Data_URL
        });
    }
    
    function success(imageData){
        var img=document.getElementById('img1');
        img.src = "data:img"+imageData;
    }
    function error(err){
        console.log("erorr--->"+err);
    }
    
}