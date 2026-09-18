// Hjärt-funktion//


const hearts = document.querySelectorAll('.heart-icon');


hearts.forEach(heart => {
    
    
heart.addEventListener('click', function(event) {
        
       
 event.preventDefault(); 
        
       
 this.classList.toggle('empty'); 
});
});