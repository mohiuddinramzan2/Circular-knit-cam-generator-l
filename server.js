const express = require("express");
const cors = require("cors");
const patterns = require("./patterns.json");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/pattern/:name", (req, res) => {
  const name = req.params.name.toLowerCase();

  if (!patterns[name]) {
    return res.status(404).json({
      success: false,
      message: "Pattern not found"
    });
  }

  const camData = patterns[name].map((value, index) => ({
    needle: index + 1,
    cam: value
  }));

  res.json({
    success: true,
    pattern: name,
    graph: camData
  });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
