var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
         
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();

$('#signupsub').click(function () {
    var nom = $('#fullname').val();
    var email = $('#email2').val();
    var password = $('#password2').val();
    
    //Créer une référence à la base de données
    var firebaseRef = firebase.database().ref();
    if ((nom != "") && (email != "")&&(password != "")){
        var noeud = firebaseRef.push();
        
        noeud.child("nom").set(nom);
        noeud.child("email").set(email);
        noeud.child("password").set(password);
    }
    $('#bilan_submit').click(function () {
        var date = $('#birthdate').val();
        var height = $('#height').val();
        var weight = $('#weight').val();
        var fatratio = $('#fatratio').val();
        
        //Créer une référence à la base de données
        var firebaseRef = firebase.database().ref();
        if ((date != "") && (height != "")&&(weight != "")&&(fatratio != "")){
            var noeud = firebaseRef.push();
            
            noeud.child("date").set(date);
            noeud.child("height").set(height);
            noeud.child("weight").set(weight);
            noeud.child("fatratio").set(fatratio);

        }
    
    
});