const express = require("express");

const app = express();

// 引进跨域模块
app.use(require('cors')());
app.use(express.json());
app.use('/uploads',express.static(__dirname + '/uploads'))

require('./plugins/db')(app);
require('./routes/admin/index')(app);


app.listen(3000, () => {
    console.log("http://localhost:3000");
});
