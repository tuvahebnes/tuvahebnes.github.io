function setup() {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyDLPMlPMmSi-dgpeoFwgvMvVSh1uTXN7fA",
        authDomain: "webshop-f3b3d.firebaseapp.com",
        databaseURL: "https://webshop-f3b3d.firebaseio.com",
        projectId: "webshop-f3b3d",
        storageBucket: "webshop-f3b3d.appspot.com",
        messagingSenderId: "245365387140"
    };
    firebase.initializeApp(config);

    let divListe = document.getElementById("liste");
    let ref = firebase.database().ref("plante");

    
    function visPlante(snapshot) {
        let navn = snapshot.key;
        let info = snapshot.val();
        divListe.innerHTML += `
          <div>
            <h2>${info.navn}</h2>
            Pris: ${info.pris}
            <br> Produsent: ${info.produsent}
            <br> ${info.bilde}
          </div>
        `;
    }
    ref.on("child_added", visPlante);

}
