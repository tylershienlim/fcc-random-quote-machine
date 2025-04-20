import { useState } from 'react'
import batmanLogo from '../assets/batman.svg'
import './Quote_Machine.css'
import batmanQuotes from '..//data/quotes.json'
import 'bootstrap-icons/font/bootstrap-icons.css';

function Quote_Machine() {
  const jsonQuotes = JSON.parse(JSON.stringify(batmanQuotes));
  const [selectedQuote, setQuote] = useState(jsonQuotes[0].quote);
  const [selectedCharacter, setCharacter] = useState(jsonQuotes[0].character);

  function generateNewQuote() {
    const randomIndex = Math.floor(Math.random() * jsonQuotes.length);
    setQuote(jsonQuotes[randomIndex].quote);

    setCharacter(jsonQuotes[randomIndex].character);
  }


  return (
    <>
      <div id="logo-container" class="container-lg">
        <a>
          <img src={batmanLogo} className="logo" alt="Batman logo" />
        </a>
      </div>
      <div id="quote-box">
        <h2 id="text">{selectedQuote}</h2>
        <h3 id="author">{selectedCharacter}</h3>
        <button id="new-quote" class="button bi bi-arrow-clockwise" onClick={generateNewQuote}>
        </button>
        <button class="button bi bi-twitter-x">
          <a id="tweet-quote" target='_blank' href="twitter.com/intent/tweet">
          </a>
        </button>
      </div>
      <div>
        <p>
          By <code>@tylershienlim</code>
        </p>
      </div>
      <p className="psst">
        Psst... Hover over the batman logo to see it light up!
      </p>
    </>
  )
}

export default Quote_Machine
