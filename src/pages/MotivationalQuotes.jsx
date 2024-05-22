import React, { useState, useEffect } from "react";
import { Box, Text, Button } from "@chakra-ui/react";

const MotivationalQuotes = () => {
  const [quote, setQuote] = useState("");
  const [favoriteQuotes, setFavoriteQuotes] = useState([]);

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = async () => {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    setQuote(data.content);
  };

  const saveFavoriteQuote = () => {
    setFavoriteQuotes([...favoriteQuotes, quote]);
  };

  return (
    <Box p={5}>
      <Text fontSize="xl" mb={4}>
        {quote}
      </Text>
      <Button onClick={fetchQuote} colorScheme="teal" mr={3}>
        New Quote
      </Button>
      <Button onClick={saveFavoriteQuote} colorScheme="teal">
        Save Quote
      </Button>
      <Box mt={5}>
        <Text fontSize="lg" mb={2}>
          Favorite Quotes:
        </Text>
        {favoriteQuotes.map((favQuote, index) => (
          <Text key={index} fontSize="md" mb={1}>
            {favQuote}
          </Text>
        ))}
      </Box>
    </Box>
  );
};

export default MotivationalQuotes;
