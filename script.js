// Hjärt-funktion//

// 1. Letar upp alla element på sidan som har klassen "heart-icon"
const hearts = document.querySelectorAll('.heart-icon');

// 2. Loopar igenom dem så att koden gäller för ALLA fyra hjärtan
hearts.forEach(heart => {
    
    // 3. Skapar en funktion som lyssnar efter ett mus-klick
    heart.addEventListener('click', function(event) {
        
        // 4. Stoppar länken! Säger åt webbläsaren att stanna kvar på sidan 
        // och inte öppna den nya sidan när man klickar på just hjärtat.
        event.preventDefault(); 
        
        // 5. Strömbrytaren: Växlar mellan ifyllt (lägger till klassen "liked") 
        // och bara kontur (tar bort klassen "liked") vid varje klick.
        this.classList.toggle('empty'); 
    });
});