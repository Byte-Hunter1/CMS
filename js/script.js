
document.addEventListener('DOMContentLoaded', function() {
  
  // Registration Form Validation
  const registerForm = document.getElementById('registerForm');
  if (registerForm) {
    registerForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const fullName = document.getElementById('fullName');
      const email = document.getElementById('email');
      const studentId = document.getElementById('studentId');
      const password = document.getElementById('password');
      const confirmPassword = document.getElementById('confirmPassword');
      
      let isValid = true;
      
      // Clear previous error messages
      clearErrors();
      
      // Validate Full Name
      if (fullName.value.trim().length < 3) {
        showError(fullName, 'Full name must be at least 3 characters');
        isValid = false;
      }
      
      // Validate Email
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email.value)) {
        showError(email, 'Please enter a valid email address');
        isValid = false;
      }
      
      // Validate Student ID
      if (studentId.value.trim().length < 3) {
        showError(studentId, 'Student ID must be at least 3 characters');
        isValid = false;
      }
      
      // Validate Password
      if (password.value.length < 6) {
        showError(password, 'Password must be at least 6 characters');
        isValid = false;
      }
      
      // Validate Confirm Password
      if (password.value !== confirmPassword.value) {
        showError(confirmPassword, 'Passwords do not match');
        isValid = false;
      }
      
      // If form is valid, redirect to login page
      if (isValid) {
        alert('Registration successful! Please login.');
        window.location.href = 'login.html';
      }
    });
  }
   
  // Login Form Validation
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const email = document.getElementById('email');
      const password = document.getElementById('password');
      
      let isValid = true;
      
      // Clear previous error messages
      clearErrors();
      
      // Validate Email
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email.value)) {
        showError(email, 'Please enter a valid email address');
        isValid = false;
      }
      
      // Validate Password
      if (password.value.length < 6) {
        showError(password, 'Password must be at least 6 characters');
        isValid = false;
      }
      
      // If form is valid, redirect to dashboard
      if (isValid) {
        // In a real application, you would verify credentials with a server
        // For this demo, we'll just redirect to dashboard
        window.location.href = 'dashboard.html';
      }
    });
  }
  
  // Complaint Form Validation
  const complaintForm = document.getElementById('complaintForm');
  if (complaintForm) {
    complaintForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const title = document.getElementById('complaintTitle');
      const category = document.getElementById('category');
      const priority = document.getElementById('priority');
      const description = document.getElementById('description');
      
      let isValid = true;
      
      // Clear previous error messages
      clearErrors();
      
      // Validate Title
      if (title.value.trim().length < 5) {
        showError(title, 'Title must be at least 5 characters');
        isValid = false;
      }
      
      // Validate Category
      if (!category.value) {
        showError(category, 'Please select a category');
        isValid = false;
      }
      
      // Validate Priority
      if (!priority.value) {
        showError(priority, 'Please select a priority level');
        isValid = false;
      }
      
      // Validate Description
      if (description.value.trim().length < 20) {
        showError(description, 'Description must be at least 20 characters');
        isValid = false;
      }
      
      // If form is valid, show success message and redirect
      if (isValid) {
        alert('Complaint submitted successfully!');
        window.location.href = 'dashboard.html';
      }
    });
  }
  
  // Helper Functions

  // Function to show error message
  function showError(input, message) {
    // Add error class to input
    input.classList.add('error');
    
    // Create error message element
    const errorElement = document.createElement('small');
    errorElement.textContent = message;
    errorElement.style.display = 'block';
    errorElement.style.marginTop = '0.5rem';
    errorElement.style.color = '#e74c3c';
    
    // Insert error message after input
    input.parentNode.appendChild(errorElement);
    
    // Remove error class and message on input
    input.addEventListener('input', function() {
      input.classList.remove('error');
      const errorMsg = input.parentNode.querySelector('small');
      if (errorMsg) {
        errorMsg.remove();
      }
    }, { once: true });
  }
  
  // Function to clear all error messages
  function clearErrors() {
    const errorMessages = document.querySelectorAll('.form-group small');
    errorMessages.forEach(msg => msg.remove());
    
    const errorInputs = document.querySelectorAll('.form-group input.error, .form-group select.error, .form-group textarea.error');
    errorInputs.forEach(input => input.classList.remove('error'));
  }
  
  // ============================================
  // Dashboard Statistics Update (if needed)
  // ============================================
  // This function can be used to dynamically update statistics
  // For now, the statistics are static in the HTML
  
  // ============================================
  // Real-time Form Validation (Optional Enhancement)
  // ============================================
  
  // Add real-time validation for email fields
  const emailInputs = document.querySelectorAll('input[type="email"]');
  emailInputs.forEach(input => {
    input.addEventListener('blur', function() {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (this.value && !emailPattern.test(this.value)) {
        if (!this.classList.contains('error')) {
          showError(this, 'Please enter a valid email address');
        }
      }
    });
  });
  
  // Add real-time validation for password confirmation
  const confirmPasswordInput = document.getElementById('confirmPassword');
  if (confirmPasswordInput) {
    const passwordInput = document.getElementById('password');
    confirmPasswordInput.addEventListener('blur', function() {
      if (this.value && this.value !== passwordInput.value) {
        if (!this.classList.contains('error')) {
          showError(this, 'Passwords do not match');
        }
      }
    });
  }
  
});

