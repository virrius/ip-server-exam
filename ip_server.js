const express = require("express");
const app = express();

const list_ips = ['111', '222.111', '334.123'];
const max_items = list_ips.length;
let i = 0;
// Serve the index page for all other requests
app.get("/", (_, res) => {
    res.send('<html><p id="new_ip">' + list_ips[i] + '</p></html>');
    i += 1;
    if (i === max_items)
    {
        i = 0;
    }
});

// Listen on port 3000
app.listen(3000, () => console.log("Application running on port 3000"));