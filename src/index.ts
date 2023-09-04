import {readJsonSync} from 'fs-extra';
import 'dotenv/config';

console.log("Hello world");

if (process.argv.includes("--help")){
    console.log("Je vais vous aider");
};


if (process.argv.includes("--name")){
    let nameValueIndex = process.argv.indexOf("--name") + 1;
    console.log(`Bonjour ${process.argv[nameValueIndex]}`);
} else if (process.argv.indexOf("--name") < -1) {
    console.log("Veuillez entrer un prénom");
};



interface IPersonne {
    nom: string,
    prenom: string,
    age: number,
    sexe: string,
};

let personne : IPersonne = {
    nom: "Chemin",
    prenom: "Zelie",
    age: 30,
    sexe: "f",
}

console.log(personne);

personne.nom = "Laforge";
personne.prenom = "Thomas";

console.log(personne)

const p2 = {...personne, nom: "Amir", prenom: "Fatir"}
console.log(p2);


const personJson = readJsonSync('./personne.json');
console.log(personJson);

console.log(`Bonjour ${process.env.USER_NAME}`);
