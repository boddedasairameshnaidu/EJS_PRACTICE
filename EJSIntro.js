// Initialise NPM and Install express and ejs
// Use Js getDay() method to build a website that gives 
// advice based on day of the week

import express from "express";

const app = express();
const port = 3000;
// Inorder to display static files like css..., we use app.use(express.static("public"))
// i.e we place them in public folder

let today = "It's a weekday";
let advice = "It's time to work hard";

let day = new Date().getDay();

if(day == 0 || day == 6){
    today = "It's the weekend";
    advice = "It's time to relax";
}

app.get('/',(req,res)=>{
    // res.send();
    // To pass data to server, we use render()
    res.render('EJSintro.ejs',{
        'today': today,
        'advice': advice ,
    });
});

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});