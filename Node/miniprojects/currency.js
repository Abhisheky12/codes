import https from"https"
import Readline  from "readline"
import chalk from "chalk"

const rl=Readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

const apikey='e7ac2e81a3ccd43d69df5505';
const url=`https://v6.exchangerate-api.com/v6/${apikey}/latest/USD`;


const convertCurrency=(amount,ratefinal)=>{
    return amount*ratefinal;
}

https.get(url,(response)=>{
      let data="";
      response.on("data",(chunk)=>{
                data+=chunk;
      })

      response.on("end",()=>{
        const rate=JSON.parse(data).conversion_rates;
          rl.question("Enter the amount in USD ",(amount)=>{
                 rl.question("Enter the target currency(eg.,INR) ",(currency)=>{
                    const ratefinal=rate[currency.toUpperCase()]
                    if(rate){
                        console.log(`${amount} USD is approximately ${convertCurrency(amount,ratefinal)} ${currency} `);
                        
                    }
                    else{
                        console.log(("invalid currency code"));
                        
                    }
                 }
          )})
          
      })
})
