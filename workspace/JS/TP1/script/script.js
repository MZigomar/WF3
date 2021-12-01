
let ligne = 60;
let colonne = 180;
let taux = 15; // taux de cellule vivante au départ


let mondeAlea = function (nbLig, nbCol, taux) {
    let x = new Array(nbLig);
    for (let i = 0; i < nbLig; i++)
        x[i] = new Array(nbCol);

    for (let i = 1; i < nbLig - 1; i++)
        for (let j = 1; j < nbCol - 1; j++) {
            x[i][j] = Math.round((Math.random() * 100) / (200 - taux * 2));
            //console.log("x : "+x[i][j]);
        }

    return x;
};

// la grille de cellule avec un ensemble fixe (le carré) et un clignotant
let monde = mondeAlea(ligne, colonne, taux)
// fonction créeant un tableau à deux dimensions de nbLig lignes et nbCol colonnes, initialisé avec la valeur value
// il est conseillé de commencer avec un tableau à une dimension dans lequel on ajoute progressivement chacune des lignes, représentées sous la forme d'un tableau à une dimension de nombres

let mondeVide = function (nbLig, nbCol, value) {
    let x = new Array(nbLig);
    for (let i = 0; i < nbLig; i++)
        x[i] = new Array(nbCol);

    for (let i = 0; i < nbLig; i++)
        for (let j = 0; j < nbCol; j++)
            x[i][j] = value;

    return x;
};
// il vaut mieux avoir un tableau temporaire lors du calcul de la génération suivante ;)
let mondeTMP = mondeVide(ligne, colonne, 0);

// fonction prenant en paramètre un tableau à deux dimensions contenant des 0 et 1 qui affiche le tableau sous forme de caractère dans la <tt>div</tt> d'<tt>id</tt> égal à <tt>GOLScreen</tt>
let affiche = function (m) {
    let screen = document.getElementById("output");
    screen.style['font-family'] = 'monospace';
    screen.innerHTML = '';
    for (let idxL = 0; idxL < m.length; idxL++) {
        let ligne = "";
        for (let idxC = 0; idxC < m[0].length; idxC++) {
            ligne += (m[idxL][idxC] === 0 ? '.' : '●');
        }
        let node = document.createTextNode(ligne);
        screen.appendChild(node);
        let newLine = document.createElement("br");
        screen.appendChild(newLine);
    }
}

// calcul le nombre de cellules vivantes autour de la cellule de coordonnées (lig, col)
let voisins = function (lig, col) {
    let n = 0;
    for (let i = lig - 1; i <= lig + 1; i++)
        if (i >= 0 && i < monde.length)
            for (let j = col - 1; j <= col + 1; j++)
                if (j >= 0 && j < monde[i].length)
                    if (i != lig || j != col)
                        if (monde[i][j] == 1)
                            n++;
    return n;
}

// détermine l'état d'une cellule à la génération suivante, le premier paramètre vaut 0 ou 1 (état de la cellule actuelle et le second correspond au nombre de cellules vivantes l'entourant
let evolution = function (vivante, nbVoisins) {
    if (vivante == 0)
        if (nbVoisins == 3)
            return 1;
        else
            return 0;
    else
        if (nbVoisins == 2 || nbVoisins == 3)
            return 1;

        else
            return 0;
}

// effectue un pas de simulation, en parcourant monde et initialisant mondeTMP avec les cellules de la génération suivante, puis recopie mondeTmp dans monde
let simule = function () {
    for (let i = 1; i < monde.length - 1; i++)
        for (let j = 1; j < monde[i].length - 1; j++)
            mondeTMP[i][j] = evolution(monde[i][j], voisins(i, j));

    for (let i = 1; i < monde.length - 1; i++)
        for (let j = 1; j < monde[i].length - 1; j++)
            monde[i][j] = mondeTMP[i][j];
}

// appelle toutes les secondes la fonction passée en premier paramètre
for (let i = 0; i < 99999; i++) {
    setTimeout(function () { affiche(monde); simule(); }, 100 * i);
}

			//console.log("voisin [1,1]="+voisins(1,1));