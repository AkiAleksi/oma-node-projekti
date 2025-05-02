const express = require('express');
const app = express();
const port = 3000;

// Reitti juureen
app.get('/', (req, res) => {
  res.send('Tervetuloa Node.js APIin!');
});

// Reitti, joka palauttaa JSON-dataa
app.get('/api/data', (req, res) => {
  res.json({ message: 'Tämä on esimerkkidata', aika: new Date() });
});

// Käynnistä palvelin
app.listen(port, () => {
  console.log(`Palvelin käynnissä osoitteessa http://localhost:${port}`);
});
