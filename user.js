//déclaraton des variables

//cas norrmaux
console.log("");



let alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "@",
  ".",
  "-",
  "_",
];

let tabChiffres = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const LETTRES_MIN = 3;

checkName = function (userName) {
  //
  for (let i = 0; i < userName.length; i++) {
    if (userName[i] === " ") {
      throw "error";
    }
  }

  //nom < LETTRE_MIN alors erreur
  if (userName.length < LETTRES_MIN) {
    throw "error";
  }
  //nom commence par un chiffre alors erreur
  if (!isNaN(userName[0])) {
    throw "error";
  }

  //ajoute verification si contient des chiffres et des lettres
  for (let i = 0; i < userName.length; i++) {
    if (!alphabet.includes(userName[i]) && !tabChiffres.includes(userName[i])) {
      throw "error";
    }
  }
  //ajoute verification si contient des chiffres et des lettres

  return userName;
};


//cas normaux
try {
  checkName("bov"); //3 lettres = ok
  console.log(1, true);
} catch (error) {
  console.log(1, false);
}

try {
  checkName("bob25calice@piof.com"); //commence par une lettre et contient des chiffres et des lettres = ok
  console.log(2, true);
} catch (error) {
  console.log(2, false);
}

console.log("CAS D'ERREUR");
//cas d"erreur
try {
  checkName("bz");
  console.log(1, false); //2caractères = erreur
} catch (error) {
  console.log(1, true);
}

try {
  checkName("123bob");
  console.log(2, false); //commence par un chiffre = erreur
} catch (error) {
  console.log(2, true);
}

try {
  checkName("bob dylan"); //contient un espace = erreur
  console.log(3, false);
} catch (error) {
  console.log(3, true);
}

try {
  checkName("bo!"); //contient un caractère spécial = erreur
  console.log(4, false);
} catch (error) {
  console.log(4, true);
}
