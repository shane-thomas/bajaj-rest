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
        
        if (!req.body || !req.body.data) {
            return res.status(400).json({is_success:false, error: "No data found"});
        }
        let input = req.body.data;
        console.log(input)
        
        if (!Array.isArray(input)) {
            return res.status(400).json({is_success:false, error: "No array found"});
        }

        let evenNum = [];
        let oddNum = [];
        const alphabets = []
        const specialCharacters = [];
        let sum = 0
        let concat = ""

        for(let i=0; i<input.length; i++){
            if(isNum(input[i])){
                if(parseInt(input[i]) % 2 == 0){
                    evenNum.push(input[i])
                } else {
                    oddNum.push(input[i])
                }
                sum += parseInt(input[i])
            } else if(isChar(input[i])){
                alphabets.push(input[i].toUpperCase())
                concat += input[i]
            } else if(isSpecialChar(input[i])){
                specialCharacters.push(input[i])
            }
        }

        let rev_concat = ""
        for(let i=concat.length-1; i>=0; i--){
            if (i%2 == 0){
                rev_concat += concat[i].toUpperCase()
            } else {
                rev_concat += concat[i].toLowerCase()
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
            rev_concat
        }
        res.status(200).json(response)
    } catch(err){
        return res.status(500).json({is_success:false, error: err.message});
    }
    
}
);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});