aleatoireDiv = document.querySelector('.aleatoire');

// Définir le nombre de recettes aléatoires à afficher
nombreRecettes = 3;

// Initialisation de la variable de boucle
let i = 0;

// Boucle pour afficher plusieurs recettes aléatoires
do {
  // Obtenir un nombre aléatoire compris entre 0 et le nombre total de recettes dans la base de données
  randomIndex = Math.floor(Math.random() * recettesDB.length);

  // Récupérer une recette aléatoire de la base de données
  randomRecette = recettesDB[randomIndex];

  // Créer un élément HTML pour afficher la recette aléatoire
  recetteHTML = `
    <div class="recette">
      <h2 id="recette-name">${randomRecette.name}</h2>
      <img id="recette-image" src="${randomRecette.image}" alt="${randomRecette.name}">
      <p id="category-recette">${randomRecette.category}</p>
    </div> 
  `;

  // Ajouter l'élément HTML à la div "aleatoire"
  aleatoireDiv.innerHTML += recetteHTML;

  i++;
} while (i < nombreRecettes);
