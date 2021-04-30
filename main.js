let personnage = {
    nom: "Doe",
    prenom: "John",
    sePresenter() {
        console.log("Bonjour je m'appelle " + this.nom + " " + this.prenom);
    }
}

personnage.sePresenter();

let fonctionAge = {
    nom: "Doe",
    age() { 
        let info = prompt("Entrez l'age de Doe");
        this.age = info;
        alert(`${this.nom} a ${this.age} ans`)
    }
}

fonctionAge.age();