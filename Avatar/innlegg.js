function setup() {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyCygmQIeZT4NiGivy5jsW4zKp-HaIzz0U8",
        authDomain: "webchat-36119.firebaseapp.com",
        databaseURL: "https://webchat-36119.firebaseio.com",
        projectId: "webchat-36119",
        storageBucket: "webchat-36119.appspot.com",
        messagingSenderId: "6239923409"
    };
    firebase.initializeApp(config);

    let divListe = document.getElementById("liste");
    let ref = firebase.database().ref("innlegg");

    function visInnlegg(snapshot) {
        let innleggnr = snapshot.key;
        let info = snapshot.val();
        divListe.innerHTML += `
          <div>
            <ul>
             <li>${info.fornavn} ${info.etternavn}
             <li>Epost : ${info.epost}
             <li>Mobil ${info.adresse}
            </ul>
            ${info.melding}
          </div>
        `;
    }
    ref.on("child_added", visInnlegg);

}


