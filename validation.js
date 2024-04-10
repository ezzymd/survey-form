
 // Single Select Checkbox
 document.querySelectorAll('.next-step-btn').forEach(function(btn){
    btn.style.pointerEvents ="none";
 })
document.querySelectorAll('.onboarding_step-content input[type="checkbox"]').forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            // Uncheck other checkboxes in the same group
            const groupName = this.getAttribute('data-name');
            document.querySelectorAll(`input[type="checkbox"][data-name="${groupName}"]:not(#${this.id})`).forEach(function(otherCheckbox) {
                otherCheckbox.checked = false;
            });
        }
    });
});

// Dynamically Count Onboarding Steps
const totalSteps = document.querySelectorAll('.onboarding_step').length;
const currentStepCountElement = document.getElementById('current-step-count');
currentStepCountElement.textContent = `1/${totalSteps}`;

// Enable/Disable Next Step Button
document.querySelectorAll('.onboarding_step-content input[type="checkbox"]').forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
        const step = this.closest('.onboarding_step');
        const nextStepButton = step.querySelector('.next-step-btn');
        const anyChecked = step.querySelector('input[type="checkbox"]:checked');
        
        // Update pointer-events based on checkbox state
        nextStepButton.style.pointerEvents = anyChecked ? 'auto' : 'none';
        
        // Update appearance to mimic disabled state if needed
        nextStepButton.classList.toggle('disabled', !anyChecked);
    });
});
