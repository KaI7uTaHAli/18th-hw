const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;

app.get('/quotes/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const response = await axios.get(`https://api.quotable.io/quotes/${id}`);
    const quote = response.data;

    const filteredQuote = {
      content: quote.content,
      author: quote.author,
    };

    res.json(filteredQuote);
  } catch (error) {
    res.status(500).json({
      error: `Quote with ID "${id}" not found or API error.`,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
