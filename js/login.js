document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
  
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();
  
      // Perform your login logic here, for example, checking username and password.
  
      // If login is successful, redirect to dashboard.html
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
  
      // Replace this condition with your actual login validation
      if (username === "dsu" && password === "12345") {    
        window.location.href = "index.html";
      } else {
        alert("Invalid username or password. Please try again.");
      }
    });
  });
  