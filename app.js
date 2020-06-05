document.addEventListener("DOMContentLoaded", function () {
    var friendsList= [
        "Dan",
        "Dash",
        "Chase",
        "Ben",
        "Alex"
    ];

    var locationList = [
        "the Bridge",
        "the Holodeck",
        "Engineering",
        "the Captain's Quaters",
        "the Brig",
        "the MedBay",
        "the Transporter Bay",
        "the Shuttle Bay",
        "the Mess Hall",
        "Construction Area Deck 133B",
    ]

    var weaponList = [
        "a phaser",
        "a bat'leth",
        "Q's stupid logic",
        "a photon torpedo to the face",
        "an interstellar gamma ray burst",
        "some tribbles",
        "an angry baby Khan",
        "a time paradox ",
        "one very lusty Spock",
        "Borg-induced assimilation",
        "an 'accidental' fall into the Dilithium core",
        "an 'unfortunate' transporter miscalculation",
        "an 'unavoidable' airlock purge",
        "uncompatible alien babe snoo-snoo",
        "Romulan Ale poisoning",
        "a reprogammed synth unit",
        "the Vulcan Death Pinch",
        "Whoopi Goldberg",
        "3D Chess rulebook",
        "Ferengi Q-tip"
    ]

    for (var i = 1; i < 100; i++) {
        var div = document.createElement("div");
        document.body.appendChild(div);
        var h3 = document.createElement("h3");
        h3.innerText = `Accusation ${i}`;
        div.appendChild(h3);
        var details = alertDetails(i)
        h3.addEventListener("click", details)
    };
    
    function alertDetails(i) {
        return function() {
            alert(`Accusation ${i}: I accuse ${friendsList[i % friendsList.length]}, with ${weaponList[i % weaponList.length]} in ${locationList[i % locationList.length]}.`)
        };
    };
});