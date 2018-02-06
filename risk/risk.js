function setup() {
    var config = {
        apiKey: "AIzaSyCaP4ZioclQZqv6UiGIGGfyif814-zt8Xs",
        authDomain: "risk-20efe.firebaseapp.com",
        databaseURL: "https://risk-20efe.firebaseio.com",
        projectId: "risk-20efe",
        storageBucket: "risk-20efe.appspot.com",
        messagingSenderId: "569127932061"
      };
      firebase.initializeApp(config);

      let database = firebase.database();

      let land = database.ref("land");
      land.on("child_added", visLand)

      let kort = database.ref("kort");
      kort.on("child_added", visKort)

      let spiller = database.ref("spiller");
      spiller.on("child_added", visSpiller)
}

function visLand(snapshot) {
    let land = snapshot.key;
    let divTarget = document.getElementById("land");
    divTarget.innerHTML += `<div class="box">${land}</div>`
}

function visKort(snapshot) {
    let kort = snapshot.key;
    let divTarget = document.getElementById("kort");
    divTarget.innerHTML += `<div>${kort}</div>`
}

function visSpiller(snapshot) {
    let spiller = snapshot.val();
    let divTarget = document.getElementById("spiller");
    divTarget.innerHTML += 
    `<div>
    <br>Navn ${spiller.navn}
    <br>Farge ${spiller.farge}
    <br>Alder ${spiller.alder}
    </div>`
}