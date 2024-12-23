import { useParams } from "react-router-dom";

export const MovieDetails=async({params})=>{
//params alredy reserve keyword  
    
    try {
        // const response=  await fetch(
        //   "http://www.omdbapi.com/?i=tt3896198&apikey=1c12799f&s=titanic&page=1"
        // );
     
  
        //BY USING ENV VARIABLE
        const response=  await fetch(
          `http://www.omdbapi.com/?i=${params.movieID}&apikey=${import.meta.env.VITE_API_KEY}`
        );
        console.log(response);
        
        const data=response.json();
        return data;
      } catch (error) {
          console.log(error);
      }
}