"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const PORT = process.env.PORT || 3001;
app_1.app.get('/', (_req, res) => {
    res.send('Hello World');
});
app_1.app.listen(PORT, () => {
    console.log(`Server runing on port: ${PORT}`);
});
