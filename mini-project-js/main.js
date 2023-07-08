import EDENAI_API_KEY from "./apikey.js";

// Define API endpoint and access token
const API_ENDPOINT =
  "https://api.edenai.run/v2/text/generation";
  
const ACCESS_TOKEN = EDENAI_API_KEY;

// Define DOM elements
const topicInput = document.querySelector("#topic-input");
const generateButton = document.querySelector("#generate-button");
const quotesContainer = document.querySelector("#quotes-container");
const loader = document.querySelector('#loader-container')
const primaryContainer = document.querySelector("#primary-container");

// getting memoised function to make API call
const getQuotes = getQuotesForTopic();

// Define event listener for the generate button
generateButton.addEventListener("click", async () => {

  // the input prompt page will be removed from the DOM and loader will be added
  const topic = topicInput.value;
  primaryContainer.style.display = "none";
  loader.style.display = 'flex'
  const quotes = await getQuotes(topic);
  
  // once we have recieved the quotes from API we will removed loader from DOM and quotes will be displayed
  displayQuotes(quotes);
  loader.style.display = 'none'
  quotesContainer.style.display = "flex";
});

// Define function to implement memoization and return a function which will make API call and get quotes
function getQuotesForTopic() {

  let cache = {};

  return async(topic) => {

    if(!cache[topic]){

      // Construct API request body'
      const requestBody = {
        max_tokens: 100,
        providers: "cohere,openai,google",
        response_as_dict: false,
        settings:{},
        temperature: 0.3,
        text: `Generate quote about the topic ${topic}`
      };

      // Construct API request options
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
        body: JSON.stringify(requestBody),
      };

      // Make API call and parse response
      const response = await fetch(API_ENDPOINT, requestOptions);
      const data = await response.json();
      console.log(data)
      const quotes = data.map((choice) => choice['generated_text'].trim());
      console.log(quotes)
      cache[topic] = quotes;
    } 
    
    return cache[topic];

  }
}

// Define function to display quotes on the page
function displayQuotes(quotes) {
  quotesContainer.innerHTML = "";

  const quotesListing = document.createElement("div");
  quotesListing.innerHTML = "";
  quotesListing.classList.add("quotes-listing");
  quotes.forEach((quote) => {
    const quoteElement = document.createElement("div");
    quoteElement.classList.add("quote-card");
    quoteElement.innerText = quote;
    quotesListing.appendChild(quoteElement);
  });
  quotesContainer.appendChild(quotesListing);

  const helper = document.createElement("div");
  helper.classList.add("helper");
  const helpingText = document.createElement("span");
  helpingText.innerText = "Want to generate more quotes?"
  helpingText.style.color = "white";
  const helpingButton = document.createElement("button");
  helpingButton.innerHTML = "Let's Go!"
  helpingButton.style.marginLeft = "1vh";
  helpingButton.addEventListener('click', ()=>{
    quotesContainer.style.display = "none";
    topicInput.value = "";
    primaryContainer.style.display = "flex";
  })

  helper.appendChild(helpingText);
  helper.appendChild(helpingButton);
  quotesContainer.append(helper);
}
