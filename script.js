// Function to get the first non-space character in a string
function firstChar(text) {
  // Trim leading and trailing spaces
  text = text.trim();

  // Check if the string is empty after trimming
  if (text === '') {
    return '';
  }

  // Iterate through the characters to find the first non-space character
  for (let i = 0; i < text.length; i++) {
    if (text[i] !== ' ') {
      return text[i];
    }
  }

  // If no non-space character is found
  return '';
}

// User input using prompt
const text = prompt("Enter text:");

// Alert the result of the function
alert(firstChar(text));