const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors({origin: "*"}));
app.use(express.json());

let foods = [
  { id: 1, name: "Rolex", price: 5000, desc: "Chapati + eggs", emoji: "🌯" },
  { id: 2, name: "Luwombo", price: 25000, desc: "Steamed chicken", emoji: "🍗" },
  { id: 3, name: "Pilao", price: 15000, desc: "Spiced rice", emoji: "🍛" },
  { id: 4, name: "Muchomo", price: 20000, desc: "Grilled meat", emoji: "🥩" },
  { id: 5, name: "Katogo", price: 12000, desc: "Matooke + beans", emoji: "🍲", },]
let orders = [];
app.get('/', (req, res) => res.send('Pius Backend is working!'));
app.get('/api/foods', (req, res) => res.json(foods));
app.post('/api/orders', (req, res) => {
  const newOrder = { id: Date.now(), ...req.body, status: "pending" };
  orders.push(newOrder);
  res.json(newOrder);
});
app.listen(5000, () => console.log('Peisintech backend running on http://localhost:5000'));