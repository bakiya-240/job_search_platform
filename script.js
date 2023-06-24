const root = document.documentElement;
const eye = document.getElementById('eyeball');
const beam = document.getElementById('beam');
const passwordInput = document.getElementById('password');

root.addEventListener('mousemove', (e) => {
  let rect = beam.getBoundingClientRect();
  let mouseX = rect.right + (rect.width /2); 
  let mouseY = rect.top + (rect.height /2);
  let rad = Math.atan2(mouseX - e.pageX, mouseY - e.pageY);
  let degrees = (rad * (20 / Math.PI) * -1) - 350;

  root.style.setProperty('--beamDegrees', `${degrees}deg`);
});

function submitForm() {
  if (validate() && checkPassword()) {
    window.location.href="jobpage.html";
    return true;
  } else {
    console.log('Functions are not both true. Cannot submit.');
    return false;
  }
}

submitForm();
function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}
