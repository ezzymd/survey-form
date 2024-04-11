// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    // Find all onboarding steps
    const onboardingSteps = document.querySelectorAll('.onboarding_step');

    // Process each onboarding step individually
    onboardingSteps.forEach(function(step) {
        // Find all checkboxes within this step
        const checkboxes = step.querySelectorAll('input[type="checkbox"]');

        // Add a change event listener to each checkbox
        checkboxes.forEach(function(checkbox) {
            checkbox.addEventListener('change', function() {
                // Uncheck all other checkboxes when one is checked
                if (checkbox.checked) {
                    checkboxes.forEach(function(otherCheckbox) {
                        if (otherCheckbox !== checkbox) {
                            otherCheckbox.checked = false;
                        }
                    });
                }

                // Update buttons' pointer-events style based on if any checkbox is checked
                updateButtonStyles(step);
            });
        });

        // Initial update in case of pre-checked options
        updateButtonStyles(step);
    });

    // Function to update next and back button styles
    function updateButtonStyles(step) {
        const anyChecked = [...step.querySelectorAll('input[type="checkbox"]')]
            .some(checkbox => checkbox.checked);

        const nextButton = step.querySelector('.next-step-btn');
        const backButton = step.querySelector('.back-btn');

        if (nextButton) {
            nextButton.style.pointerEvents = anyChecked ? 'auto' : 'none';
        }

        if (backButton) {
            backButton.style.pointerEvents = anyChecked ? 'auto' : 'none';
        }
    }
});

