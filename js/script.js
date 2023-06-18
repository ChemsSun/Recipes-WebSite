function catalogue() {
    var recette = document.getElementById("recettes"); //Affecter a recette le div où on veut mettre les recettes
    for (var i = 0; i < recettesDB.length; i++) {
      var n = 0;
      var cata = document.createElement("div");      
      cata.classList.add("elem");

      var disc = document.createElement("div");
      disc.classList.add("disc");

      var image = document.createElement("div");
      image.classList.add("image");
      var img = document.createElement("img");
      img.setAttribute("src", "/assets/recettes/" + recettesDB[i].id + "/2.png");
  
      var nam = document.createElement("a");
      nam.setAttribute("href", "details.html?recettes=" + recettesDB[i].id);
      nam.innerText =recettesDB[i].name;

      var country = document.createElement("h3");
      country.innerText ="Pays: "+recettesDB[i].country;
  
      var duration = document.createElement("h4");
      duration.innerText ="Durée: "+recettesDB[i].duration;
  
      var category = document.createElement("h4");
      category.innerText ="Catégorie: "+recettesDB[i].category;
  
      var note = document.createElement("h4");
      for (var j = 0; j < recettesDB[i].comments.length; j++) {
        n += recettesDB[i].comments[j].rating;
      }
      note.innerText ="Raithing: "+n / recettesDB[i].comments.length;   //Calcule du Note globale de la recette
  
      image.appendChild(img);
  
      disc.appendChild(nam);
      disc.appendChild(country);
      disc.appendChild(category);
      disc.appendChild(duration);
      disc.appendChild(note);
  
      cata.appendChild(image); //Cat Div qui contient l'image et la discription de chaque recettes
      cata.appendChild(disc);

      recette.appendChild(cata); //On met le div "Cata" dans le grand div "recette"
    }
  }
  /***************Fonction de filtrage des recettes par catégorie***********/
  function filterByCategory() {
    var category = document.querySelector("#categoryFilter").value;
    var recettes = document.querySelectorAll("#recettes .elem");
    
    for (var i = 0; i < recettes.length; i++) {
      var currentCategory = recettes[i].querySelector(".disc h4:nth-of-type(1)").textContent.replace("Category: ", "");
      console.log("Current category:", currentCategory);
      if (category === "Tous" || currentCategory === category) {
        recettes[i].style.display = "";
      } else {
        recettes[i].style.display = "none";
      }
    }
  }
  
  
  // ****************Fonction de recherche *********************
  function recherche() {
    var input = document.getElementById("search");
    var filter = input.value.toUpperCase();
    var recettes = document.getElementById("recettes");
    var recettesDiv = recettes.getElementsByClassName("elem");
    var recetteExiste = false; // vérifier si une recette est actuellement affichée
    
    for (var i = 0; i < recettesDiv.length; i++) {
      var name = recettesDiv[i].getElementsByTagName("a")[0];
      if (name.innerText.toUpperCase().indexOf(filter) > -1) {
        recettesDiv[i].style.display = "";
        recetteExiste = true;
      } else {
        recettesDiv[i].style.display = "none";
      }
    }
    
   // Si aucune recette n'est actuellement affichée et que le message n'existe pas déjà, ajouter un nouvel élément avec un message
    if (!recetteExiste && !document.getElementById("no-recipe-message")) {
      var message = document.createElement("h2");
      message.classList.add("message_erreur");
      message.setAttribute("id", "no-recipe-message");
      message.innerText = "Sorry, Recette introuvable 😕";
      recettes.appendChild(message);
    }
   // Si au moins une recette est affichée et que le message existe, supprimez-le
    else if (recetteExiste && document.getElementById("no-recipe-message")) {
      recettes.removeChild(document.getElementById("no-recipe-message"));
    }
  }
    
  
  