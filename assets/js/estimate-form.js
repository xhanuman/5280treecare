document.addEventListener('DOMContentLoaded', function() {
  // Handle form submission
  var form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', function(event) {
      // ...
    });
  } else {
    console.error('Form element not found.');
  }

  // Handle phone number visibility
  var hiddenNumber = document.querySelector('.hidden-number');
  var showNumber = document.querySelector('.show-number');
  if (hiddenNumber && showNumber) {
    showNumber.addEventListener('click', function(event) {
      event.preventDefault();
      hiddenNumber.style.display = 'inline';
      showNumber.style.display = 'none';
    });
  } else {
    console.error('Phone number elements not found.');
  }
});