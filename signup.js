const form = document.getElementById('signupForm');
const errorDiv = document.getElementById('error');

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

form.addEventListener('submit', function (e) {
    e.preventDefault();
    errorDiv.innerHTML = ''; // Clear previous errors

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword')?.value; // Optional confirm password

    if (!name || !email || !username || !password || (document.getElementById('confirmPassword') && !confirmPassword)) {
        const errorSpan = document.createElement('span');
        errorSpan.textContent = 'Please fill in all required fields.';
        errorDiv.appendChild(errorSpan);
        return;
    }

    if (!validateEmail(email)) {
        const errorSpan = document.createElement('span');
        errorSpan.textContent = 'Please enter a valid email address.';
        errorDiv.appendChild(errorSpan);
        return;
    }

    if (password.length < 6) {
        const errorSpan = document.createElement('span');
        errorSpan.textContent = 'Password must be at least 6 characters long.';
        errorDiv.appendChild(errorSpan);
        return;
    }

    if (document.getElementById('confirmPassword') && password !== confirmPassword) {
        const errorSpan = document.createElement('span');
        errorSpan.textContent = 'Passwords do not match.';
        errorDiv.appendChild(errorSpan);
        return;
    }

    const successSpan = document.createElement('span');
    successSpan.textContent = `Welcome, ${name}! Your artist account has been created 🎉`;
    errorDiv.appendChild(successSpan);
    form.reset();
});