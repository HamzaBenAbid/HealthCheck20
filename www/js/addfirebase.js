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

// Sign up and Login 
	$('#signupsub').click(function(){
		
        var inputEmail = $('#Email').val()
		var inputPass = $('#UserPassword').val()
		
		firebase.auth().createUserWithEmailAndPassword(inputEmail, inputPass).catch(function(error) {
			// lets save errors here
			var errorCode = error.code;
			var errorMessage = error.message;
			
        });
        
		alert('Account Created , Please Login with :' + inputEmail)
    })
    


    $('#signinsub').click(function(){
		
		var inputEmail = $('#email').val()
		var inputPass = $('#password').val()
		
		firebase.auth().signInWithEmailAndPassword(
			inputEmail, inputPass
		).catch(function(error) {
			// Handle Errors here.
			var errorCode = error.code;
			var errorMessage = error.message;
			// ...
		});
    })
    


	$('#logout').click(function(){
		firebase.auth().signOut().then(function() {
			alert('test sign out event')
		}, function(error) {
			alert('there was an error: ' + error)
		});
	})





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