export function checkPasswordStrength(password) {
  const errors = [];

  if ( 20 < password.length < 6) {
    errors.push(
      "Password must be at least 8 characters long not greater than 20 characters."
    );
  }
  if (!/[A-Z]/.test(password)) {
    errors.push("Password must contain at least one uppercase letter.");
  }
  if (!/[a-z]/.test(password)) {
    errors.push("Password must contain at least one lowercase letter.");
  }
  if (!/[0-9]/.test(password)) {
    errors.push("Password must contain at least one digit.");
  }
  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    errors.push("Password must contain at least one special character.");
  }

  if (errors.length === 0) {
    return { success: true, message: "Password is strong." };
  } else {
    return { success: false, errors: errors };
  }
}
