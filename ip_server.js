const express = require("express");
const app = express();

const list_ips =
    ['13.48.100.27',
    '13.48.154.242',
    '13.48.182.204',
    '13.48.50.78',
    '13.48.99.64'];
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

// Listen on port 8080
app.listen(8080, () => console.log("Application running on port 8080"));
