function displayPoem(response) {
  console.log("poem generated");

  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "67f4ad1a7091d3bd59036ato3f25bee1";
  let prompt = `User instructions:Generate English Poem about ${instructionsInput.value}`;
  let context =
    "You are a romantic poem expect and love to write short poems. Your mission is to generate a 4 line poem in basic HTML.Make sure to follow the user instructions and sign at the bottom 'SheCodes AI'in <strong> and do not put the 'html' phrase at the top";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating Poem");
  console.log(`Prompt:${prompt}`);
  console.log(`Context:${context}`);

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
