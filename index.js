const express = require('express');//
const app = express()
const router = require('./routers/myRouter')
//const mysql = require('mysql');//
const port = 5000
const cors = require('cors')



app.use(cors({}));

app.use(express.json());//body parser ทำให้เห็น Json ตอน post
app.use(express.urlencoded({extended:false}));//อาจจะไม่ต้องใส่
app.use(router)

//{ origin: 'http://localhost:3000' }
 

app.listen(port, () => {
    // console.log(`Server is running on port ${port}`);
})