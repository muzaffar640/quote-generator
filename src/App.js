import { useState } from "react";
import Card from "./Card";
import quotes from "./quotes";
import "./App.css";

function App() {
  const [quote, setQuote] = useState(quotes[2]);

  const handleClick = () => {
    let randomNumber = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomNumber]);
  };

  return (
    <div className="App">
      <div class="card__container">
        <Card quote={quote.quote} author={quote.author} onClick={handleClick} />
        <footer className="footer">
          <p>
            Cheers 🤟 from &nbsp;
            <a
              style={{ textDecoration: "none", color: "#ffffff" }}
              href="http://muzaffarhossain.com/"
              target="_blank"
              rel="noreferrer"
            >
              Muzaffar Hossain.
            </a>
          </p>
          <p>You can follow me if you want</p>
          <p>
            <a
              class="social"
              style={{ textDecoration: "none", marginLeft: "15px" }}
              href="https://twitter.com/iammuzaffar640"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={require("./assests/twitter.svg").default}
                alt="twitter"
              />
            </a>

            <a
              class="social"
              style={{ textDecoration: "none", marginLeft: "15px" }}
              href="https://github.com/muzaffar640"
              target="_blank"
              rel="noreferrer"
            >
              <img src={require("./assests/github.svg").default} alt="github" />
            </a>
            <a
              class="social"
              style={{ textDecoration: "none", marginLeft: "15px" }}
              href="https://www.instagram.com/muzaffar640/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={require("./assests/instagram.svg").default}
                alt="twitter"
              />
            </a>
            <a
              class="social"
              style={{ textDecoration: "none", marginLeft: "15px" }}
              href="https://www.linkedin.com/in/muzaffar-hossain-b6456367/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={require("./assests/linkedin.svg").default}
                alt="linkedin"
              />
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
