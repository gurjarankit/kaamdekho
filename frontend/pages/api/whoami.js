import NextCors from 'nextjs-cors';
import axios from 'axios'

export async function handler(req, res) {
   console.log("Ankit chhaltore");
   // Run the cors middleware
   // nextjs-cors uses the cors package, so we invite you to check the documentation https://github.com/expressjs/cors
   // await NextCors(req, res, {
   //    // Options
   //    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
   //    origin: '*',
   //    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
   // });

   // const response = await axios.get("https://cors-anywhere.herokuapp.com/https://0d93-2402-8100-3861-fa1-f49d-78b1-8867-15cc.ngrok.io/api/dashboard/search/searchByKeyword/Commi")
   // const data = await response.json();
   // console.log("data",data)
   // Rest of the API logic
   // res.json({ message: 'Hello NextJs Cors!' });
}