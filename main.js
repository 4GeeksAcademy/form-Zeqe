    window.onload = function() {
      const sendButton = document.querySelector('#sendForm');
      const form = document.querySelector('#payment-form');
      const inputs = document.querySelectorAll('#payment-form input, #payment-form select');
      const errorMsg = document.querySelector('#error-msg');
      const successMsg = document.querySelector('#success-msg');
  

      errorMsg.style.display = 'none';
      successMsg.style.display = 'none';
  
      sendButton.addEventListener('click', function() {
          let formIsValid = true;
            
          inputs.forEach(function(input) {
              if (input.value === '') {
                  formIsValid = false;
                  input.classList.add('is-invalid');
              } else {
                  input.classList.remove('is-invalid');
              }
          });
           
          if (formIsValid) {
              errorMsg.style.display = 'none';
              successMsg.style.display = 'block';
          } else {
              errorMsg.style.display = 'block';
              successMsg.style.display = 'none';
          }
      });
  };
  