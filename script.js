document.getElementById('submit-button').addEventListener('click', function() {
    const button = this;
    button.disabled = true;
    button.textContent = 'Loading...';
  
    setTimeout(() => {
      button.disabled = false;
      button.textContent = 'Submit';
    }, 2000);
  });
  
  const inputField = document.getElementById('input-field');
  
  inputField.addEventListener('focus', () => {
    inputField.style.borderColor = 'var(--color-hover)';
    inputField.style.boxShadow = 'var(--box-shadow-default)';
  });
  
  inputField.addEventListener('blur', () => {
    inputField.style.borderColor = 'var(--color-border)';
    inputField.style.boxShadow = 'none';
  });
  
  inputField.addEventListener('input', () => {
    inputField.style.borderColor = 'var(--color-primary)';
    inputField.style.boxShadow = 'var(--box-shadow-default)';
  });
  