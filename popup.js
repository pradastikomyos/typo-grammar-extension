document.addEventListener('DOMContentLoaded', () => {
  const inputText = document.getElementById('inputText');
  const charCounter = document.getElementById('inputCount'); // fix: use correct id
  const fixBtn = document.getElementById('fixBtn'); // fix id to match HTML
  const loadingIndicator = document.getElementById('loadingIndicator') || document.getElementById('loading'); // fallback for loading
  const errorMessage = document.getElementById('errorMessage');
  const outputText = document.getElementById('outputText');
  const copyBtn = document.getElementById('copyBtn');
  const copySuccessMessage = document.getElementById('copySuccessMessage') || document.getElementById('successMessage'); // fallback for success message

  const API_KEY = 'AIzaSyADexET-SZDtIJJz0zvLQMHANZupTGm9Vg';
  const API_ENDPOINT = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent';

  // Auto-focus on input field
  inputText.focus();

  // Set initial state for fix button
  fixBtn.disabled = inputText.value.trim().length === 0;
  if (charCounter) charCounter.textContent = `${inputText.value.length} characters`;

  // Character counter
  inputText.addEventListener('input', () => {
    if (charCounter) charCounter.textContent = `${inputText.value.length} characters`;
    fixBtn.disabled = inputText.value.trim().length === 0;
  });

  // Fix Grammar button click handler
  fixBtn.addEventListener('click', async () => {
    const userText = inputText.value.trim();
    if (userText === '') {
      showError('Input text cannot be empty.');
      return;
    }

    setLoadingState(true);
    hideError();
    outputText.value = '';
    copyBtn.disabled = true;
    hideCopySuccess();

    try {
      const prompt = `Fix grammar, spelling, and typos in this Indonesian/English text. Return only the corrected version without any explanation or additional text:\n\n${userText}`;
      
      const response = await fetch(API_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-goog-api-key': API_KEY
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: prompt
            }]
          }]
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`API Error: ${response.status} - ${errorData.error.message || 'Unknown error'}`);
      }

      const data = await response.json();
      const correctedText = data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.parts && data.candidates[0].content.parts[0] && data.candidates[0].content.parts[0].text;

      if (correctedText) {
        outputText.value = correctedText;
        copyBtn.disabled = false;
      } else {
        showError('No corrected text received from API.');
      }

    } catch (error) {
      console.error('Error:', error);
      showError(`Failed to fix grammar: ${error.message}`);
    } finally {
      setLoadingState(false);
    }
  });

  // Copy button click handler
  copyBtn.addEventListener('click', () => {
    outputText.select();
    navigator.clipboard.writeText(outputText.value)
      .then(() => {
        showCopySuccess();
      })
      .catch(err => {
        console.error('Failed to copy text: ', err);
        showError('Failed to copy text.');
      });
  });

  // Keyboard shortcuts
  document.addEventListener('keydown', (event) => {
    if (event.ctrlKey && event.key === 'Enter') {
      event.preventDefault();
      if (!fixBtn.disabled) {
        fixBtn.click();
      }
    }
    if (event.ctrlKey && event.key === 'c') {
      // Check if the focus is not on the input/output textareas
      if (document.activeElement !== inputText && document.activeElement !== outputText) {
        event.preventDefault();
        if (!copyBtn.disabled) {
          copyBtn.click();
        }
      }
    }
  });

  function setLoadingState(isLoading) {
    fixBtn.disabled = isLoading || inputText.value.trim().length === 0;
    if (loadingIndicator) loadingIndicator.style.display = isLoading ? 'flex' : 'none';
    // Optional: if you want to hide icon, but only if exists
    const icon = fixBtn.querySelector('#fixGrammarIcon');
    if (icon) icon.style.display = isLoading ? 'none' : 'inline';
  }

  function showError(message) {
    if (errorMessage) {
      errorMessage.textContent = message;
      errorMessage.style.display = 'block';
    }
  }

  function hideError() {
    if (errorMessage) errorMessage.style.display = 'none';
  }

  function showCopySuccess() {
    if (copySuccessMessage) {
      copySuccessMessage.style.display = 'block';
      setTimeout(() => {
        copySuccessMessage.style.display = 'none';
      }, 2000); // Hide after 2 seconds
    }
  }

  function hideCopySuccess() {
    if (copySuccessMessage) copySuccessMessage.style.display = 'none';
  }
});