const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());

const fullName = "shane_shaji_thomas";
const dob = "10112004";
const email = "shaneshaji10@gmail.com";
const roll_number = "22BCE3649";

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

        let evenNum = [];
        let oddNum = [];
        const alphabets = []
        const specialCharacters = [];
        let sum = 0
        
        for(let i=0; i<input.length; i++){
            if(isNum(input[i])){
                if(parseInt(input[i]) % 2 == 0){
                    evenNum.push(input[i])
                } else {
                    oddNum.push(input[i])
                }
                sum += parseInt(input[i])
            }
        }
                
        const response = {
            is_success: true,
            user_id: (fullName + "_" + dob),
            email,
            roll_number,
            evenNum,
            oddNum, 
            alphabets,
            specialCharacters, 
            sum, 
        }
        res.status(200).json(response)
    } catch(err){
        res.status(500).json({is_success:false, error: err.message});
        return;
    }
    
}
);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});