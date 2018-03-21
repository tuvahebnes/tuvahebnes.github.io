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

    let inpFind = document.getElementById("find"); // kobling til søkefeltet
    inpFind.addEventListener("keydown", finnOrd);
    let divResultat = document.getElementById("resultat"); // kobling til div#resultat

    function finnOrd(e) {
        if (e.keyCode === 13) { // bruker trykket return
            let valgt = inpFind.value;
            let ref = firebase.database().ref("vare").orderByChild("navn").equalTo(valgt);
            ref.once("value").then(function (snapshot) {
                let funnet = snapshot.val();
                if (funnet) {
                    // vi fant noe som matcher
                    let htm = Object.entries(funnet).map(([k,v]) => {
                      let felt = Object.entries(v).map(([k,v]) => 
                          `<li>${k} : ${v}</li>`
                      );
                      return `${k} <ul>${felt.join('')}</ul>`;
                    });
                    divResultat.innerHTML = htm;
                } else {
                    divResultat.innerHTML = "Ingen treff (sjekk stor/liten bokstav)";
                }
            });
        }
    }
}