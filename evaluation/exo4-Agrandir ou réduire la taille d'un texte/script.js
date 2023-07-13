


// function pour changer la taiile dee text
function increaseFontSize() {
    let section = document.querySelector('section')
    var currentSize = window.getComputedStyle(section, null).getPropertyValue('font-size');
    var newSize = parseInt(currentSize) + 2;
    section.style.fontSize = newSize + 'px';
  }
  
  function decreaseFontSize() {
    let section = document.querySelector('section')
    var currentSize = window.getComputedStyle(section, null).getPropertyValue('font-size');
    var newSize = parseInt(currentSize) - 2;
    section.style.fontSize = newSize + 'px';
  }

    document.getElementById("increase").addEventListener("click", increaseFontSize);
    document.getElementById("decrease").addEventListener("click", decreaseFontSize);


    
//pour la bar de progression

const progressBar = document.getElementById("progressBar");
const progressBarFill = document.getElementById("progressBarFill");

// Fonction pour mettre à jour la barre de progression
function updateProgressBar(progress) {
  progressBarFill.style.width = progress + "%";
}

// Exemple d'utilisation : mettre à jour la barre de progression à 50%
updateProgressBar(50);