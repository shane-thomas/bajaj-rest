const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());

function isNum(s){
    return /[0-9]+$/.test(s);
}

function isChar(s){
    return /[a-zA-Z]+$/.test(s);
}

function isSpecialChar(s){
    return !isChar(s) && !isNum(s);
}   

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/bfhl', (req, res) => {
    try{
        let input = req.body.data;
        console.log(input)

        const response = {
            is_success: true,
            user_id
        }
        res.status(200)
    } catch(err){
        res.status(500).json({is_success:false, error: err.message});
        return;
    }
    
}
);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});