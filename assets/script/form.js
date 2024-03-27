//Initialize library Emailjs
(function () {
  emailjs.init({
    publicKey: "mucDxcv_0T-z1suJ4",
  });
})();

const form = document.getElementById("contact-form");

function sendEmail(formName, formEmail, formMessage) {
  var templateParams = {
    name: formName,
    email: formEmail,
    message: formMessage,
  };

  emailjs.send("service_j527vcn", "template_knnlj5p", templateParams).then(
    (response) => {
      //QUESTA SEZIONE è SCRITTA IN ITALIANO PER AGEVOLARMI
      // Questa sezione  (fra le graffe), viene eseguita quando l'invio della mail VA a buon fine

      // Mostro la sezione: "grazie per aver contattato..."
      const successMessage = document.getElementById("success-form-response");

      // Aggiungo la classe visible all'elemento
      successMessage.classList.add("visible");
      successMessage.classList.remove("hidden");

      // Nascondo il form
      form.classList.add("hidden");
    },
    (error) => {
      // Questa sezione (fra le graffe), viene eseguita quando l'invio della mail NON va a buon fine

      const errorMessage = document.getElementById("error-form-response");

      //Aggiungo classe visible all'errore
      errorMessage.classList.add("visible");
      errorMessage.classList.remove("hidden");
    }
  );
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Ottieni i valori inseriti dall'utente
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  sendEmail(name, email, message);
});
