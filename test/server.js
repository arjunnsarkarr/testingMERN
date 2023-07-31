var express = require("express")
var cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json());


app.get ('/api/register', (req, res) => {
    res.json({ message: "Hello from server!" });
});


app.listen(8000, () => {
    console.log(`Server is running on port 8000.`);
  });