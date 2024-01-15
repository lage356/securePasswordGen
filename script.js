// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  var passwordLength = Number(
    window.prompt(
      "Type desired criteria as follows: 1)Lenght of password: 8 to 128 characters"
    )
  );

  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("select the correct range");
    passwordLength = Number(
      window.prompt(
        "Type desired criteria as follows: 1) Lenght of password: 8 to 128 characters"
      )
    );
  }

  var specialChar = window.prompt(
    "Would you like to include special characters || Type: y or n"
  );
  if (specialChar !== "y" && specialChar !== "n") {
    window.alert("Select a valid option");
    specialChar = window.prompt(
      "Would you like to include special characters || Type: y or n"
    );
  }
  var upperCasep = window.prompt(
    "Would you like to include uppercase characters || Type: y or n"
  );
  if (upperCasep !== "y" && upperCasep !== "n") {
    window.alert("Select a valid option");
    upperCasep = window.prompt(
      "Would you like to include uppercase characters || Type: y or n"
    );
  }
  var lowerCasep = window.prompt(
    "Would you like to include lowercase characters || Type: y or n"
  );
  if (lowerCasep !== "y" && lowerCasep !== "n") {
    window.alert("Select a valid option");
    lowerCasep = window.prompt(
      "Would you like to include lowercase characters || Type: y or n"
    );
  }
  var numerValuep = window.prompt(
    "Would you like to include numbers || Type: y or n"
  );
  if (numerValuep !== "y" && numerValuep !== "n") {
    numerValuep = window.prompt(
      "Would you like to include numbers || Type: y or n"
    );
  }

  var setchar = "";
  let password = "";

  if (specialChar === "y") {
    setchar += "!@#$%^&*()_+{}[]|;:,.<>?";
  }
  if (upperCasep === "y") {
    setchar += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (lowerCasep === "y") {
    setchar += "abcdefghijklmnopqrstuvwxyz";
  }
  if (numerValuep === "y") {
    setchar += "0123456789";
  }

  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * setchar.length);
    password += setchar[randomIndex];
  }
  console.log(password);
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
