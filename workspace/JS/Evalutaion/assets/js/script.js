const navbar = document.getElementById("navbar");
const navbarUl = document.getElementById("navbarUl");
const submitBtn = document.getElementById("submitBtn");
const agencyList = document.getElementById("agencyList");
const resultList = document.getElementById("resultList");
const sortMenu = document.getElementById("sortMenu");

/**
 * Liste des produits
 */
const carList = [
    {
        name: "Peugeot 208",
        img: [
            "Img/vehicule1.png",
            "Img/vehicule1bis.png"
        ],
        description: "Diesel, 5 portes, GPS, AutoRadio, Forfait 1000km (0.5/km supplémentaire).",
        price: 999,
        agency: "Paris"
    },
    {
        name: "Opel Moika",
        img: [
            "Img/vehicule4.png",
            "Img/vehicule4bis.png"
        ],
        description: "Diesel, 5 portes, GPS, AutoRadio, Forfait 1000km (0.4/km supplémentaire).",
        price: 1150,
        agency: "Lille"
    },
    {
        name: "Ford Focus",
        img: [
            "Img/vehicule2.png",
            "Img/vehicule2bis.png"
        ],
        description: "Diesel, 5 portes, GPS, AutoRadio, Forfait 1000km (0.5/km supplémentaire).",
        price: 999,
        agency: ""
    },
    {
        name: "Audi A1",
        img: [
            "Img/vehicule3.png",
            "Img/vehicule3bis.png"
        ],
        description: "Diesel, 5 portes, GPS, AutoRadio, Forfait 1000km (0.55/km supplémentaire).",
        price: 1100,
        agency: "Paris"
    },
    {
        name: "VW Up",
        img: [
            "Img/vehicule5.png",
            "Img/vehicule5bis.png"
        ],
        description: "Diesel, 5 portes, GPS, AutoRadio, Forfait 1000km (0.5/km supplémentaire).",
        price: 1500,
        agency: "Paris"
    },
    {
        name: "Fiat Punto",
        img: [
            "Img/vehicule6.png",
            "Img/vehicule6bis.png"
        ],
        description: "Diesel, 5 portes, GPS, AutoRadio, Forfait 1000km (0.5/km supplémentaire).",
        price: 1200,
        agency: "Paris"
    },
    {
        name: "Jet Privé",
        img: [
            "Img/vehicule7.png",
            "Img/vehicule7bis.png"
        ],
        description: "Kérosène, 16 portes, Parachutes, Forfait 10000km (30/km supplémentaire).",
        price: 680000,
        agency: "Ville"
    }
];


/**
 * Change la visibilité en ajoutant/suprimant la class d-none
 * @param {id}
 */
const changeVisibility = (id) => {
    id.classList.contains("d-none") ? id.classList.remove("d-none") : id.classList.add("d-none");
};


let slideIndex = [];
let slideId = [];
/**
 * change de slide en avant ou en arrière en fonction du parametre 1 ou -1
 * @param {plusIndex}  
 */
const changePic = (plusIndex, slideIdx) => {
    showSlide(slideIndex[slideIdx] += plusIndex, slideIdx);
}
const showSlide = (plusIndex, slideIdx) => {
    let i;
    let x = document.getElementsByClassName(slideId[slideIdx]);
    if (plusIndex > x.length)
        slideIndex[slideIdx] = 1
    if (plusIndex < 1)
        slideIndex[slideIdx] = x.length
    for (i = 0; i < x.length; i++) {
        x[i].classList.add("d-none");
    }
    x[slideIndex[slideIdx] - 1].classList.remove("d-none");
}




let sortedCarList = [];
let selectedAgency = "";
/**
 * Crée les div avec les voitures du tableaux
 * @param {agency, sort}  
 */
const showResult = (agency, sort) => {
    resultList.innerHTML = "";
    sortedCarList = [];
    slideIndex = [];
    slideId = [];

    carList.forEach(e => {
        if (e.agency == agency || agency == "all" || (e.agency == "" && agency != "none"))
            sortedCarList.push(e);
    });

    if (sort == "sortInc") {
        //tri par prix croissant
        sortedCarList.sort((a, b) => (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0));
    } else if (sort == "sortDec") {
        //tri par prix décroissant
        sortedCarList.sort((a, b) => (a.price > b.price) ? -1 : ((b.price > a.price) ? 1 : 0));
    }

    for (let i = 0; i < sortedCarList.length; i++) {

        slideIndex.push(1);
        slideId.push("pic" + i);

        //création de la div du résultat
        let node = document.createElement("DIV");
        node.classList.add("result", "flex");
        if (i >= 4) node.classList.add("d-none");


        //ajout du "s" à résultats quand plus de 1 résultat
        if (i > 0)
            document.getElementById("resultS").classList.remove("d-none")
        else
            document.getElementById("resultS").classList.add("d-none")


        //creation de la div qui contient l'image et ajout de l'image

        //slideDiv
        let slideDiv = document.createElement("DIV");
        slideDiv.classList.add("slideDiv");

        //prev btn
        let prev = document.createElement("DIV");
        prev.classList.add("prev");
        prev.onclick = () => changePic(-1, i);
        prev.innerHTML = '<p>&#10094;</p>';

        //next btn
        let next = document.createElement("DIV");
        next.classList.add("next");
        next.onclick = () => changePic(1, i);
        next.innerHTML = '<p>&#10095;</p>';

        //img de base
        let imgList = sortedCarList[i].img

        let imgDiv = document.createElement("DIV");
        imgDiv.classList.add("imgDiv");

        imgList.forEach(e => {
            let img = document.createElement("IMG");
            img.src = e;
            img.classList.add("pic" + i);
            imgDiv.appendChild(img);
        });



        //append dens l'ordre d'apparition
        slideDiv.appendChild(prev);
        slideDiv.appendChild(imgDiv);
        slideDiv.appendChild(next);

        //boutton
        let btn = document.createElement("button")
        btn.innerHTML = "Réserver et Payer"

        //append de l'image et du boutton
        node.appendChild(slideDiv);
        node.appendChild(btn);

        //nom, description et prix
        let name = document.createElement("H2");
        name.innerHTML = `${sortedCarList[i].name}`
        let description = document.createElement("P");
        description.innerHTML = `${sortedCarList[i].description}`
        let price = document.createElement("P");
        sortedCarList[i].agency != "" ?
            price.innerHTML = `\n${sortedCarList[i].price} € - Agence de ${sortedCarList[i].agency}` :
            price.innerHTML = `\n${sortedCarList[i].price} €`;



        let info = document.createElement("DIV");

        info.appendChild(name);
        info.appendChild(description);
        info.appendChild(price);
        //append name, desc et price
        node.appendChild(info);


        resultList.appendChild(node);
        document.getElementById("resultNum").innerHTML = i + 1;


        showSlide(1, i);
    }
};

//affiche les résultats manquant sur le scroll
document.onscroll = () => {
    let resultListChildren = Array.from(resultList.children);
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight)
        resultListChildren.forEach(e => {
            if (e.classList.contains("d-none"))
                e.classList.remove("d-none")
        });
}


//Detexte le changement d'etat et rappelle la fonction principale selon le choix du tri
sortMenu.onchange = () => {
    if (selectedAgency != "")
        showResult(selectedAgency, sortMenu.value)
}


//Sur un click de la navbar le menu s'affiche ou disparait
navbar.onclick = () => {
    changeVisibility(navbarUl);
};
//Sur un click du boutton submit, annule le refresh automatique et appelle la fonction
//qui affiche les résultats
submitBtn.onclick = (e) => {
    selectedAgency = agencyList.value;
    e.preventDefault();
    showResult(selectedAgency, sortMenu.value);
};

//----------------------------------------------------------------------------------

const backgroundList = [
    'Img/background.jpg',
    'Img/background2.jpg',
    'Img/background3.jpg',
]


let i = 0;
//carrousel du header
const carrousel = () => {
    //je me permets d'utiliser le tagname parce que dans tous les cas, j'aurais toujours un seul header
    document.getElementsByTagName("HEADER")[0].style.background = `url(${backgroundList[i]})`;
    document.getElementsByTagName("HEADER")[0].style.backgroundSize = "cover";
    document.getElementsByTagName("HEADER")[0].style.backgroundPositionY = "center";
    if (i < backgroundList.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout(carrousel, 15000);
}

window.onload = carrousel;