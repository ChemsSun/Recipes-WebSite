const params = new URLSearchParams(window.location.search);
const id = params.get("recettes");

nom = document.getElementById("Nom_recette");
nom.innerText = recettesDB[id - 1].name;
img1 = document.getElementById("img1");
img1.setAttribute("src", "../assets/recettes/" + id + "/1.png");
img1.setAttribute("alt", recettesDB[id - 1].name);
img2 = document.getElementById("img2");
img2.setAttribute("src", "../assets/recettes/" + id + "/2.png");
img2.setAttribute("alt", recettesDB[id - 1].name);
img3 = document.getElementById("img3");
img3.setAttribute("src", "../assets/recettes/" + id + "/3.png");
img3.setAttribute("alt", recettesDB[id - 1].name);
img4 = document.getElementById("img4");
img4.setAttribute("src", "../assets/recettes/" + id + "/4.png");
img4.setAttribute("alt", recettesDB[id - 1].name);

liCategorie = document.getElementById("categorie");
liCategorie.innerText +=recettesDB[id - 1].category;
liPays = document.getElementById("country");
liPays.innerText +=recettesDB[id - 1].country;
liDuree = document.getElementById("duree");
liDuree.innerText +=recettesDB[id - 1].duration;

ingredients = document.getElementById("ingredients");
for (let j = 0; j < recettesDB[id - 1].ingredients.length; j++) {
  li = document.createElement("li");
  li.innerText = recettesDB[id - 1].ingredients[j];
  ingredients.appendChild(li);
}

inst = document.getElementById("inst");
for (let l = 0; l < recettesDB[id - 1].instructions.length; l++) {
  li = document.createElement("li");
  li.innerText = recettesDB[id - 1].instructions[l];
  inst.appendChild(li);
}

// commentaires = document.getElementById("commentaires");
// note = 0;
// for (i = 0; i < recettesDB[id - 1].comments.length; i++) {
//   nom = document.createElement("h3");
//   nom.innerText ="*"+recettesDB[id - 1].comments[i].user+" :";
  // titre=document.createElement("h4"); 
  // titre.innerText="Raiting";
  // titre.id="raiting";
  // rating = document.createElement("h4");
  // rating.innerText +=recettesDB[id - 1].comments[i].rating;
  // note += recettesDB[id - 1].comments[i].rating; //pour calculer la note moyenne a la fin
  
//   commentaire = document.createElement("p");
//   commentaire.innerText = recettesDB[id - 1].comments[i].content;

//   commentaires.appendChild(nom);
//   commentaires.appendChild(titre);
//   commentaires.appendChild(rating);
//   commentaires.appendChild(commentaire);
// }
commentaires = document.getElementById("commentaires");
note = 0;
for (i = 0; i < recettesDB[id - 1].comments.length; i++) {
  comm=document.createElement("div");
  comm.classList.add("contenue");

  nom = document.createElement("h3");
  nom.innerText = recettesDB[id - 1].comments[i].user;
  
  divRaiting = document.createElement("div");
  divRaiting.classList.add("raiting-container");
  
  titre=document.createElement("h4"); 
  titre.innerText="Raiting";
  titre.id="raiting";
  
  rating = document.createElement("h4");
  rating.innerText +=recettesDB[id - 1].comments[i].rating;
  rating.classList.add("rating");
  
  divRaiting.appendChild(titre);
  divRaiting.appendChild(rating);

  note += recettesDB[id - 1].comments[i].rating;
  
  commentaire = document.createElement("p");
  commentaire.innerText = "< "+recettesDB[id - 1].comments[i].content+" >";

  comm.appendChild(nom);
  comm.appendChild(divRaiting);
  comm.appendChild(commentaire);

  commentaires.appendChild(comm);
}

note = note / recettesDB[id - 1].comments.length;
liRating = document.getElementById("note");
liRating.innerText += note;

