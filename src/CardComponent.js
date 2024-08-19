import React, { useEffect, useState } from "react";
import './CardComponent.css';
import Swiper from './Swiper';

const CardComponent = ({ sheetUrl }) => {
  const [cards, setCards] = useState([]);
  const [originalCards, setOriginalCards] = useState([]);
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

  const drawRandomCard = (textArray) => {
    console.log(textArray);
    if (textArray.length > 0) {
      const randomIndex = Math.floor(Math.random() * textArray.length);
      const randomText = textArray[randomIndex];
      setCurrentTitle(randomText.title);
      setCurrentText(randomText.text);
      // Remove the selected text from the list
      const newTextArray = textArray.filter((_, index) => index !== randomIndex);
      setCards(newTextArray);
    } else {
      setCurrentTitle("Out of cards");
      setCurrentText("Reload to reshuffle deck.");
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
    <div className="card">
      <h2 className="title">{currentTitle}</h2>
      <div className="text">{currentText}</div>
      <button onClick={handleButtonClick}>Draw Card</button>
      <button onClick={handleResetButtonClick}>🔀 Deck</button>
      <Swiper/>
    </div>
  );
};

export default CardComponent;
