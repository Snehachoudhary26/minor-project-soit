
    // Smooth Scroll Function
    function scrollToSection(id) {
      document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    }

    // Mobile Menu Toggle
    document.getElementById('mobileMenuBtn').addEventListener('click', () => {
      document.querySelector('.nav-links').classList.toggle('active');
    });

    // Tab Switching Function
    function switchTab(tabName) {
      // Remove active class from all tabs
      document.querySelectorAll('.auth-tab').forEach(tab => {
        tab.classList.remove('active');
      });

      // Add active class to clicked tab
      event.target.classList.add('active');

      // Hide all forms
      document.querySelectorAll('.auth-form-container').forEach(form => {
        form.style.display = 'none';
      });

      // Show selected form
      if (tabName === 'student-login') {
        document.getElementById('student-login-form').style.display = 'block';
        scrollToSection('login');
      } else if (tabName === 'signup') {
        document.getElementById('signup-form').style.display = 'block';
        scrollToSection('signup');
      } else if (tabName === 'report') {
        document.getElementById('report-form').style.display = 'block';
        scrollToSection('registration');
      }
    }

    // Image Upload Handler
    function handleImageUpload(input) {
      const preview = document.getElementById('imagePreview');
      const file = input.files[0];

      if (file) {
        const reader = new FileReader();
        
        reader.onload = function(e) {
          preview.innerHTML = `<img src="${e.target.result}" alt="Preview">`;
          preview.classList.add('active');
        };
        
        reader.readAsDataURL(file);
      }
    }

    // Initialize forms visibility
    document.addEventListener('DOMContentLoaded', function() {
      // Show only student login form by default
      document.getElementById('student-login-form').style.display = 'block';
      document.getElementById('signup-form').style.display = 'none';
      document.getElementById('report-form').style.display = 'none';
    });
