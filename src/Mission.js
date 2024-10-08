import React, { useEffect, useState } from "react";
import './Mission.css';
import Card from './Card';

const Mission = ({ sheetUrl, colour }) => {
  const [cards, setCards] = useState([]);
  const [drawn, addCard] = useState([]);
  const [originalCards, setOriginalCards] = useState();
  const [currentTitle, setCurrentTitle] = useState("");
  const [currentText, setCurrentText] = useState("");

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
    console.log(cardArray);
    if (cardArray.length > 0) {
      const randomIndex = Math.floor(Math.random() * cardArray.length);
      const randomCard = cardArray[randomIndex];
      addCard([...drawn, randomCard]);
      // Remove the selected text from the list
      const newcardArray = cardArray.filter((_, index) => index !== randomIndex);
      setCards(newcardArray);
    } else {
      setCurrentTitle("Out of cards");
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
    <div className={`mission ${colour}`}>

      <div className="btnContainer">
        <button className="drawBtn" onClick={handleButtonClick}>Draw</button>
        <button className="shuffleBtn" onClick={handleResetButtonClick}>🔀 Shuffle</button>
      </div>
      {drawn.length === 0 ? (
          null
        ) : (
          <React.Fragment>
            <div className='drawn-cards' style={{ marginBottom: '20px' }}>
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
      {drawn.length < 2 ? (
        null
      ) : (
        <p className="descriptor">← →</p>)}
      
      {cards.length === 0 ? (

        <React.Fragment>
          <h2 className="title"> Out of cards</h2>
          <p className="descriptor">shuffle for more</p>
        </React.Fragment>
        ) : (null)
        }
    </div>
  );
};

export default Mission;
