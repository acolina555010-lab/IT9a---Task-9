document.addEventListener('DOMContentLoaded', function() {
    let currentLevel = 1;
    const maxLevel = 6;
    
    const levelElement = document.getElementById('currentLevel');
    const levelUpBtn = document.getElementById('levelUpBtn');
    
    levelUpBtn.addEventListener('click', function() {
        if (currentLevel < maxLevel) {
            currentLevel++;
            
            levelElement.textContent = currentLevel;
            
            levelElement.classList.add('animate__animated', 'animate__bounce');
            
            setTimeout(() => {
                levelElement.classList.remove('animate__animated', 'animate__bounce');
            }, 1000);
            
            if (currentLevel === maxLevel) {
                levelUpBtn.disabled = true;
                levelUpBtn.textContent = "Max Level Reached!";
                levelUpBtn.classList.remove('btn-success');
                levelUpBtn.classList.add('btn-secondary');
            }
            
            console.log(`Level increased to: ${currentLevel}`);
        }
    });
    
    document.addEventListener('keydown', function(event) {
        if ((event.key === 'l' || event.key === 'L') && !levelUpBtn.disabled) {
            levelUpBtn.click();
        }
    });
    
    levelUpBtn.addEventListener('mouseenter', function() {
        if (!levelUpBtn.disabled) {
            this.title = `Click to level up from ${currentLevel} to ${currentLevel + 1}`;
        }
    });
});