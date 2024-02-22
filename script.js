function getCookie(name) {
  const cookies = document.cookie.split(";");
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    const cookieParts = cookie.split("=");
    if (cookieParts[0] === name) {
      return decodeURIComponent(cookieParts[1]);
    }
  }
  return null;
}

// Function to handle registration form submission
document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("registrationForm")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent form submission

      // Get input values
      var name = document.getElementById("name").value;
      var email = document.getElementById("email").value;
      var password = document.getElementById("password").value;
      var confirmPassword = document.getElementById("confirmPassword").value;

      console.log("Displaying user details" + name, email, password);

      // Check if passwords match
      if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
      }

      // Save details to cookies
      // document.cookie = "name=" + name + "; email=" + email + "; password=" + password;
      document.cookie = "name = " + name;
      document.cookie = "email = " + email;
      document.cookie = "password = " + password;
      window.location.href = "login.html";

      // const emailFromCookie = getCookie('email');
      // console.log('Email from cookie:', emailFromCookie);

      // const nameFromCookie = getCookie('name');
      // console.log('Name from cookie:', nameFromCookie);

      // Optionally, you can redirect the user to a welcome page or display a confirmation message
    });
});
