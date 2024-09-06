import React, { useEffect, useState } from "react";
import './CardComponent.css';
import Card from './Card';

const CardComponent = ({ sheetUrl, type }) => {
  const [cards, setCards] = useState([]);
  const [drawn, addCard] = useState([]);
  const [originalCards, setOriginalCards] = useState();
  const [currentTitle, setCurrentTitle] = useState("");
  const [currentText, setCurrentText] = useState("");
  const [activeHistory, setHistoryActive] = useState(false);
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(sheetUrl);
        const data = await response.text();

        // Parse the CSV data into JSON
        const jsonData = parseCSVtoJSON(data);

        // Only keep the first two columns
        const cards = jsonData.map(row => ({
          title: row[Object.keys(row)[0]],
          text: row[Object.keys(row)[1]]
        }));
        setOriginalCards(cards)
        setCards(cards);
      } catch (error) {
        setCurrentTitle("ERROR");
        setCurrentText("No connection to Google Sheets");
        console.error("Error fetching data from Google Sheets:", error);
      }
    };

    fetchData();
  }, [sheetUrl]);

  const toggleHistory = () => {
    setHistoryActive(!activeHistory)
  }

  const parseCSVtoJSON = (csvData) => {
    const rows = csvData.split("\n");
    const headers = rows[0].split(",").map(header => header.trim());
    const jsonData = rows.slice(1).map(row => {
      const values = row.split(",").map(value => value.trim());
      let rowData = {};
      headers.forEach((header, index) => {
        rowData[header] = values[index];
      });
      return rowData;
    });
    return jsonData;
  };

  const drawRandomCard = (cardArray) => {
    if (cardArray.length > 0) {
      if (type === "powers"){
        setHistoryActive(true)
      }
      const randomIndex = Math.floor(Math.random() * cardArray.length);
      const randomCard = cardArray[randomIndex];
      setCurrentTitle(randomCard.title);
      setCurrentText(randomCard.text);
      addCard([...drawn, randomCard]);
      // Remove the selected text from the list
      const newcardArray = cardArray.filter((_, index) => index !== randomIndex);
      setCards(newcardArray);
    } else {
      setCurrentTitle("Out of cards");
      setCurrentText("shuffle for more");
    }
  };

  const handleButtonClick = () => {
    drawRandomCard(cards);
  };

  const handleResetButtonClick = () => {
    setCards(originalCards);  // Reset the texts to the original data
    drawRandomCard(originalCards);
  };

  return (
    <div className={`card-container`}>
      <div className="btnContainer">
        <button className="drawBtn" onClick={handleButtonClick}>Draw</button>
        <button className="shuffleBtn" onClick={handleResetButtonClick}>🔀 Shuffle</button>
      </div>
      {currentTitle === "" || type == "powers" ? (null) : (
        <React.Fragment>
          <p className='descriptor'>↓ last draw ↓</p>
            <div className='last-drawn'>
            <h2 className="title">{currentTitle}</h2>
            <div className="text">{currentText}</div>
          </div>
        </React.Fragment>
      )}
      {drawn.length === 0 ? (
          null
        ) : (
          <React.Fragment>
            <p className='descriptor history' onClick={toggleHistory}>draw history {activeHistory ? ("▲") : ("▼")}</p>
            <div className='drawn-cards' style={ activeHistory ? { display:'flex'} : {display:'none'}}>
              {
                drawn.map((card, index) => (
                  <Card
                    key={index}
                    title={card.title}
                    text={card.text}
                  />
                )
              )}
            </div>
          </React.Fragment>
        )}
    </div>
  );
};

export default CardComponent;
