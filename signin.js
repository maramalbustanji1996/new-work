document.addEventListener('DOMContentLoaded', function () {
    const signInForm = document.getElementById('signinForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const errorDiv = document.getElementById('error');
    const googleButton = document.querySelector('.social-buttons button:nth-child(1)');
    const facebookButton = document.querySelector('.social-buttons button:nth-child(2)');
    const appleButton = document.querySelector('.social-buttons button:nth-child(3)');

    // Function to validate email format
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Function to validate password
    function validatePassword(password) {
        // Password validation: at least 6 characters
        if (password.length < 6) {
            return 'Password must be at least 6 characters long.';
        }
        // You can add more complex password requirements here.
        return null; // Password is valid
    }

    signInForm.addEventListener('submit', function (event) {
        event.preventDefault();
        errorDiv.innerHTML = ''; // Clear previous errors

        const email = emailInput.value.trim();
        const password = passwordInput.value;

        let hasError = false;

        if (!email) {
            const errorSpan = document.createElement('span');
            errorSpan.textContent = 'Please enter your email address.';
            errorDiv.appendChild(errorSpan);
            hasError = true;
        } else if (!validateEmail(email)) {
            const errorSpan = document.createElement('span');
            errorSpan.textContent = 'Please enter a valid email address.';
            errorDiv.appendChild(errorSpan);
            hasError = true;
        }

        const passwordError = validatePassword(password);
        if (!password) {
            const errorSpan = document.createElement('span');
            errorSpan.textContent = 'Please enter your password.';
            errorDiv.appendChild(errorSpan);
            hasError = true;
        } else if (passwordError) {
            const errorSpan = document.createElement('span');
            errorSpan.textContent = passwordError;
            errorDiv.appendChild(errorSpan);
            hasError = true;
        }

        if (!hasError) {
            errorDiv.textContent = ''; // Clear any potential leftover text
            const successSpan = document.createElement('span');
            successSpan.textContent = `Successfully signed in with email: ${email}`;
            errorDiv.appendChild(successSpan);
            // In a real application, you would submit the form data here
        }
    });

    googleButton.addEventListener('click', function() {
        const messageSpan = document.createElement('span');
        messageSpan.textContent = 'Continue with Google (not implemented yet).';
        errorDiv.innerHTML = ''; // Clear previous message
        errorDiv.appendChild(messageSpan);
        // In a real application, you would initiate the Google Sign-In flow
    });

    facebookButton.addEventListener('click', function() {
        const messageSpan = document.createElement('span');
        messageSpan.textContent = 'Continue with Facebook (not implemented yet).';
        errorDiv.innerHTML = ''; // Clear previous message
        errorDiv.appendChild(messageSpan);
        // In a real application, you would initiate the Facebook Login flow
    });

    appleButton.addEventListener('click', function() {
        const messageSpan = document.createElement('span');
        messageSpan.textContent = 'Continue with Apple (not implemented yet).';
        errorDiv.innerHTML = ''; // Clear previous message
        errorDiv.appendChild(messageSpan);
        // In a real application, you would initiate the Apple Sign-In flow
    });
});