 

 import https from 'https';
 import chalk from 'chalk'


 const getJoe=()=>{
    const url=`https://official-joke-api.appspot.com/random_joke`;

    https.get(url,(response)=>{
            let data1=" ";
            response.on("data",(chunk)=>{
                data1+=chunk
            });

            response.on('end',()=>{
                  const joke=JSON.parse(data1);
                //   console.log(joke);
                 console.log(`Here is a random ${joke.type}joke`);
                 console.log(chalk.red(`${joke.setup}`));
                 console.log(chalk.blue.bgRed.bold(`${joke.punchline}`));
            })

            response.on("error",(erro)=>{
              console.log(`Error fetching the joke ${erro.message}`);
              
            })

    })
 }

 getJoe()