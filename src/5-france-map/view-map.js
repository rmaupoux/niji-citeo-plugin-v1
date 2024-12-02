
document.addEventListener('DOMContentLoaded', () => {
  const zones = document.querySelectorAll('.zone-item');
  const zonesData = [];
  
  
  zones.forEach((zone) => {
    const titre = zone.getAttribute('data-zone-title');
    let chiffre = zone.getAttribute('data-zone-chiffre');
    let couleur = zone.getAttribute('data-zone-couleur');
    let moyenne = zone.getAttribute('data-moyenne');
  
    chiffre = !isNaN(parseFloat(chiffre)) ? parseFloat(chiffre) : chiffre;
    zonesData.push({ titre, chiffre, couleur, moyenne });
  });
  
    const titreDiv = document.getElementById('title_map');
    const chiffreDiv = document.getElementById('number_map');
    
    const chemins = document.querySelectorAll('.map--img svg [data-index]');
    
    function updateZoneInfo(index) {
      const data = zonesData[index];
      if (data) {
         titreDiv.classList.add('fade-in');
         chiffreDiv.classList.add('fade-in');
  
         titreDiv.textContent = data.titre;
         chiffreDiv.textContent = data.chiffre;
  
         setTimeout(() => {
             titreDiv.classList.remove('fade-in');
             chiffreDiv.classList.remove('fade-in');
         }, 500); 
      }
    }
    
    function resetZoneInfo() {
      titreDiv.classList.add('fade-in');
      chiffreDiv.classList.add('fade-in');
      titreDiv.textContent = 'Moyenne nationale';
      chiffreDiv.textContent = zonesData[0].moyenne;
  
      setTimeout(() => {
          titreDiv.classList.remove('fade-in');
          chiffreDiv.classList.remove('fade-in');
      }, 500); 
    }
    
    chemins.forEach((chemin) => {
      const index = chemin.getAttribute('data-index');
      
      chemin.addEventListener('mouseover', () => updateZoneInfo(index));
      chemin.addEventListener('mouseout', resetZoneInfo);
  
      if (index) {
        chemin.style.fill = zonesData[index].couleur;
      }
    });
    
  
  });
  