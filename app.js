const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000; // Change this port number as needed

// Sample data for initial display (Replace this with your JSON data)
const sampleData = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' }
];

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));

// View engine setup
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// Route for displaying the items
app.get('/', (req, res) => {
  res.render('index', { items: sampleData });
});

// Route for adding a new item
app.post('/add', (req, res) => {
  const itemName = req.body.itemName.trim();

  if (itemName !== '') {
    // Replace this logic with actual code to add the item to the JSON data
    const newItem = {
      id: Date.now(),
      name: itemName
    };

    sampleData.push(newItem);
  }

  res.redirect('/');
});

// Route for deleting an item
app.post('/delete/:id', (req, res) => {
  const itemId = parseInt(req.params.id, 10);
  // Replace this logic with actual code to delete the item from the JSON data
  // Here, we remove the item from the sampleData array based on the item ID
  sampleData = sampleData.filter(item => item.id !== itemId);
  res.redirect('/');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
