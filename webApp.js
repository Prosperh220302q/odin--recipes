     const form = document.getElementById('myForm');
     const submitButton = document.getElementById('submitBtn');
   
     submitButton.addEventListener('click', function() {
       // Call your function here
       validateForm();
       // Submit the form
       form.submit();
     });

function validateForm() {
    var username = document.forms["myForm"]["firstname"].value;
    var email = document.forms["myForm"]["email"].value;
    var password = document.forms["myForm"]["password"].value;

    if (username === "") {
      alert("Username must be filled out");
      return false;
    }
    if (email === "") {
        alert("Username must be filled out");
        return false;
      }
      if (password === "") {
        alert("Username must be filled out");
        return false;
      }
}

            