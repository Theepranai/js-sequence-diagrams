 const express = require('express');
 const path = require('path');
 const app = express();

 // Define the folder to serve static files from
 const staticFolder = path.join(__dirname);

 // Use express.static middleware to serve static files
 app.use(express.static(staticFolder));

 // Define a simple route
 app.get('/', (req, res) => {
     res.sendFile(path.join(staticFolder, 'index.html'));
 });

 // Start the server
 const PORT = process.env.PORT || 3000;
 app.listen(PORT, () => {
     console.log(`Server is running on port ${PORT}`);
 });

// npm install express path