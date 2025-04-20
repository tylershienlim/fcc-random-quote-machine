import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import './Quote_Machine.css'

function Quote_Machine() {
  

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div id="quote-box">
        <h2 id="text">Text</h2>
        <p id="author">Author</p>
        <a id="new-quote">New Quote</a>
        <a id="tweet-quote" target='_blank' href='"twitter.com/intent/tweet"'>Tweet Quote</a>
      </div>
      <div className="card">
        <p>
          By <code>@tylershienlim</code>
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default Quote_Machine
