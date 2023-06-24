let result = document.getElementById("result");
const validateEmail = (email) => {
   
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };
  
  const validate = () => {
    const $result = $('#result');
    const email = $('#email').val();
    $result.text('');
if(email.length != 0){
    if(validateEmail(email)){
      $result.text(email + ' is valid.');
      $result.css('color', 'green');
      return true;
    } else{
      $result.text(email + ' invalid Email.');
      $result.css('color', 'red');
    }
    return false;
  }
else{
    alert("email can't be empty!");
    $result.textContent = "";
    }}
  $('#email').on('input', validate);
  
  
  