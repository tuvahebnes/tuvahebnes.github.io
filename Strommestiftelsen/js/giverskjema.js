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
    let spanGiver = document.getElementById("givervelger");
    let divTransaksjon = document.getElementById("transaksjon");

    let ref = firebase.database().ref("giver");

    ref.once("value").then(function (snapshot) {
        let giverene = snapshot.val();
        if (giverene) {
            let dropBox = makeDrop(giverene);
            spanGiver.innerHTML = dropBox;

            let drpGiver = document.getElementById("givernr");
            drpGiver.addEventListener("change", visTransaksjon);
        }
    });

    function visTransaksjon(e) {
        let valgt = +document.getElementById("givernr").value;
        let ref = firebase.database().ref("transaksjon").orderByChild("givernr").equalTo(valgt);
        ref.once("value").then(function (snapshot) {
            let transaksjonene = snapshot.val();
            if (transaksjonene) {
                let transaksjonnr = Object.keys(transaksjonene);
                let transaksjonliste = `<ul>` +
                    transaksjonnr.map(e => `
                    <li>${transaksjonene[e].belop} </li>`).join("")
                    + `</ul>`;
                divTransaksjon.innerHTML = transaksjonliste;

            }
        });
    }


    function makeDrop(giverene) {
        let box = '<select id="givernr">';
        let givernr = Object.keys(giverene);
        let navn = givernr.map(e =>
            `<option value="${e}">${giverene[e].fornavn} ${giverene[e].etternavn}</option>`);
        box += navn.join("") + "</select>";
        return box;
    }

}
