
const letters = "abcdefghijklmnopqrstuvwxyz";
var use_random_encoder = false;

// Static Letter subsitutions object
let encoder = {
  A: "aaaaa",
  B: "aaaab",
  C: "aaaba",
  D: "aaabb",
  E: "aabaa",
  F: "aabab",
  G: "aabba",
  H: "aabbb",
  I: "abaaa",
  J: "abaaa",
  K: "abaab",
  L: "ababa",
  M: "ababb",
  N: "abbaa",
  O: "abbab",
  P: "abbba",
  Q: "abbbb",
  R: "baaaa",
  S: "baaab",
  T: "baaba",
  U: "baabb",
  V: "baabb",
  W: "babaa",
  X: "babab",
  Y: "babba",
  Z: "babbb"
}

// Letter subsitutions array
var letter_subsitutions_array = [
  "aaaaa",
  "aaaab",
  "aaaba",
  "aaabb",
  "aabaa",
  "aabab",
  "aabba",
  "aabbb",
  "abaaa",
  "abaaa",
  "abaab",
  "ababa",
  "ababb",
  "abbaa",
  "abbab",
  "abbba",
  "abbbb",
  "baaaa",
  "baaab",
  "baaba",
  "baabb",
  "baabb",
  "babaa",
  "babab",
  "babba",
  "babbb"
]

// Generated subsitution array
var generated_subsitutions_array = [];

// Random Letter subsitutions object
let random_encoder = {
  A: "",
  B: "",
  C: "",
  D: "",
  E: "",
  F: "",
  G: "",
  H: "",
  I: "",
  J: "",
  K: "",
  L: "",
  M: "",
  N: "",
  O: "",
  P: "",
  Q: "",
  R: "",
  S: "",
  T: "",
  U: "",
  V: "",
  W: "",
  X: "",
  Y: "",
  Z: ""
}

if (process.argv.length > 2) {
  console.log("Running");
  // Need to generate letter subsitution based on number specified in the command line
  if (process.argv[2] != 'encode' || process.argv[2] != 'decode') {
    console.log("Generating letter subsitution");
    let num = parseInt(process.argv[2]);
    change_letter_subsitutions(num);

    if (process.argv[3] === "encode") {
      let raw_string = [];
      for (var i = 4; i < process.argv.length; i++) {
        process.argv[i].toUpperCase();
        raw_string.push(process.argv[i])
      }
      encode(raw_string);
    } else if (process.argv[3] === "decode") {
      let encoded_string = [];
      for (var i = 4; i < process.argv.length; i++) {
        encoded_string.push(process.argv[i])
      }
      decode(encoded_string);
    }
  }
  // No need to generate letter subsitution, use the
  else{
    if (process.argv[2] === "encode") {
      let raw_string = [];
      for (var i = 3; i < process.argv.length; i++) {
        process.argv[i].toUpperCase();
        raw_string.push(process.argv[i])
      }
      encode(raw_string);
    } else if (process.argv[2] === "decode") {
      let encoded_string = [];
      for (var i = 3; i < process.argv.length; i++) {
        encoded_string.push(process.argv[i])
      }
      decode(encoded_string);
    }
  }
}


// Function to encode the raw string
function encode(raw_string) {
  // Convert the raw string into an array of letters
  let string_array = [];
  for (var i = 0; i < raw_string.length; i++) {
    string_array.push(raw_string[i].split(""));
  }
  console.log(string_array);

  // Output of the encoded string
  let encoded_string = "";

  // Retrieve the random encoder
  // let encoder = random_generate_letter_subsitutions();
  // let encoder = change_letter_subsitutions(3);
  let encoder = random_encoder;

  // Encode the raw string based on the encoder
  for (var i = 0; i < string_array.length; i++) {
    for (var j = 0; j < string_array[i].length; j++) {
      console.log("Current value ==> " + string_array[i][j]);
      Object.keys(encoder).forEach(function(k) {
        if (k === string_array[i][j].toUpperCase()) {
          console.log("Encoded value ==> " + encoder[k]);
          encoded_string += (encoder[k] + " ");
        }
      });
    }
  }
  console.log("Final encoded string ==> " + encoded_string);
}

// Function to random generare the letter subsitutions
function random_generate_letter_subsitutions(){
  // get the length of the letter_subsitutions_array
  let letter_subsitutions_array_length = letter_subsitutions_array.length;

  Object.keys(random_encoder).forEach(function(k) {
    // get a random index based on the length of the array
    let random_index = Math.floor(Math.random() * Math.floor(letter_subsitutions_array_length));

    // Assign a random letter subsitution to the encoder object
    random_encoder[k] = letter_subsitutions_array[random_index];
  });
  return random_encoder;
}

// Function to change the number of letters for the generated subsitution
function change_letter_subsitutions(number){
  // Get the array of letters
  let alphabets_array = letters.split("");

  Object.keys(random_encoder).forEach(function(k) {
    for (var i = 0; i < number; i++) {
      // get a random index based on the length of alphabets_array
      let random_index = Math.floor(Math.random() * Math.floor(alphabets_array.length));

      // Append the random generated letter to the value of a specific object index
      random_encoder[k] += alphabets_array[random_index];
    }
  });
  console.log(random_encoder);
  return random_encoder;
}
