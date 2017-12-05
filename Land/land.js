function setup() {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyBh8ywZA2HGYWA52DZl-MqLNQWd5F-GPhI",
        authDomain: "civcountries-b37bd.firebaseapp.com",
        databaseURL: "https://civcountries-b37bd.firebaseio.com",
        projectId: "civcountries-b37bd",
        storageBucket: "civcountries-b37bd.appspot.com",
        messagingSenderId: "696728409784"
    };
    firebase.initializeApp(config);

    let divListe = document.getElementById("liste");
    let ref = firebase.database().ref("nations");

    function visLand(snapshot) {
        let land = snapshot.val();
        divListe.innerHTML +=`
            <div>${land.capital}</div>
        `;
    }

    ref.on("child_added", visLand);

}