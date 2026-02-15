document.addEventListener('DOMContentLoaded', function() {
    let coins = 0;
    const coinCountElement = document.getElementById('coinCount');
    const increaseBtn = document.getElementById('increaseBtn');
    const decreaseBtn = document.getElementById('decreaseBtn');
    
    function updateDisplay() {
        coinCountElement.textContent = coins;
        coinCountElement.classList.add('animate__animated', 'animate__pulse');
        
        setTimeout(() => {
            coinCountElement.classList.remove('animate__animated', 'animate__pulse');
        }, 300);
    }
    
    increaseBtn.addEventListener('click', function() {
        coins++;
        updateDisplay();
    });
    
    decreaseBtn.addEventListener('click', function() {
        if (coins > 0) {
            coins--;
            updateDisplay();
        } else {
            coinCountElement.classList.add('animate__animated', 'animate__shakeX');
            setTimeout(() => {
                coinCountElement.classList.remove('animate__animated', 'animate__shakeX');
            }, 300);
        }
    });
    
    updateDisplay();
});