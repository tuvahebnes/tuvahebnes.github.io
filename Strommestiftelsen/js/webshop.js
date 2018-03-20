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

    let divListe = document.getElementById("liste");
    let ref = firebase.database().ref("vare");

    
    function visVare(snapshot) {
        let navn = snapshot.key;
        let info = snapshot.val();
        divListe.innerHTML += `
          <div>
            <span><b>${info.navn}</b> <i>${info.pris}</i></span>
            
          </div>
        `;
    }
    ref.on("child_added", visVare);

    
}

