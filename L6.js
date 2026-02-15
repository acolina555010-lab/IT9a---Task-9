document.addEventListener('DOMContentLoaded', function() {
    const doorButtons = document.querySelectorAll('.door-btn');
    const resultMessage = document.getElementById('resultMessage');
    const resultTitle = document.getElementById('resultTitle');
    const resultText = document.getElementById('resultText');
    
    const correctDoor = Math.floor(Math.random() * 3) + 1;
    console.log(`Correct door is: ${correctDoor}`);
    
    doorButtons.forEach(button => {
        button.addEventListener('click', function() {
            const selectedDoor = parseInt(this.getAttribute('data-door'));
            
            doorButtons.forEach(btn => {
                btn.classList.remove('btn-success', 'btn-danger', 'success-glow', 'error-shake');
                btn.classList.add('btn-warning');
                btn.disabled = false;
            });
            
            doorButtons.forEach(btn => {
                btn.disabled = true;
            });
            
            if (selectedDoor === correctDoor) {
                this.classList.remove('btn-warning');
                this.classList.add('btn-success', 'success-glow');
                
                resultTitle.textContent = "🎉 Success!";
                resultText.textContent = `You chose Door ${selectedDoor} and found the treasure! Congratulations!`;
                resultMessage.className = "alert alert-success";
                resultMessage.style.display = "block";
            } else {
                this.classList.remove('btn-warning');
                this.classList.add('btn-danger', 'error-shake');
                
                resultTitle.textContent = "❌ Wrong Door!";
                resultText.textContent = `Door ${selectedDoor} leads to a dead end. The correct door was ${correctDoor}. Try again!`;
                resultMessage.className = "alert alert-danger";
                resultMessage.style.display = "block";
            }
        });
    });
});