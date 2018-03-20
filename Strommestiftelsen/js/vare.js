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

    let spanGiver = document.getElementById("varevelger");

    let ref = firebase.database().ref("vare");

    ref.once("value").then(function (snapshot) {
        let varene = snapshot.val();
        if (varene) {
            let dropBox = makeDrop(varene);
            spanVarer.innerHTML = dropBox;

            let drpVare = document.getElementById("varenr");
            
        }
    }
