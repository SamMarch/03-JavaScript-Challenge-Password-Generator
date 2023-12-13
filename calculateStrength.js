// calculateStrength.js
export function calculateStrength(password) {
    let strength = 0;

    // Increase strength level according to the character types found in the password
    if (/[a-z]/.test(password)) strength += 25;
    if (/[A-Z]/.test(password)) strength += 25;
    if (/\d/.test(password)) strength += 25;
    if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(password)) strength += 25;

    return strength;
}