document.addEventListener('DOMContentLoaded', function() {
    const nameForm = document.getElementById('nameForm');
    const nameInput = document.getElementById('nameInput');
    const successMessage = document.getElementById('successMessage');
    const errorMessage = document.getElementById('errorMessage');
    const userNameSpan = document.getElementById('userName');
    const nextBtn = document.getElementById('nextBtn');
    
    nameForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const name = nameInput.value.trim();
        
        if (name === '') {
            successMessage.style.display = 'none';
            errorMessage.style.display = 'block';
            nextBtn.style.display = 'none';
        } else {
            errorMessage.style.display = 'none';
            userNameSpan.textContent = name;
            successMessage.style.display = 'block';
            nextBtn.style.display = 'inline-block';
        }
    });
    
    nameInput.addEventListener('input', function() {
        if (this.value.trim() !== '') {
            errorMessage.style.display = 'none';
        }
    });
});