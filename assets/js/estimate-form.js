document.addEventListener('DOMContentLoaded', function() {
  var form = document.querySelector('form');
  var photosInput = document.getElementById('photos');

  if (form) {
    form.addEventListener('submit', function(event) {
      // ...
    });
  } else {
    console.error('Form element not found.');
  }
});