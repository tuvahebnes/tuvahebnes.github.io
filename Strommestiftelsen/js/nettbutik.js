function setup() {
    // Initialize Firebase
   var config = {
     apiKey: "AIzaSyC3-mrZuR2a48KNpx3Og9p35Fe5TmO_3U4",
     authDomain: "strommestiftelsen-4807a.firebaseapp.com",
     databaseURL: "https://strommestiftelsen-4807a.firebaseio.com",
     projectId: "strommestiftelsen-4807a",
     storageBucket: "strommestiftelsen-4807a.appspot.com",
     messagingSenderId: "447502500108"
   };

    firebase.initializeApp(config);

    let database = firebase.database();

    let inpLand = document.getElementById("vare");

    let btnLagreLand = document.getElementById("lagrevare");
    btnLagreLand.addEventListener("click", lagreVare);


    function lagreVare(e) {
        let vare = inpLand.value;
        let ref = database.ref("vare/" + vare);
        ref.set({ vareid });
    }



}