import React , {useState ,useEffect ,useContext} from "react";
import { Box, Grid } from "@mui/material";
// import data from "../../../../data/data.json";
import MovieCard from "./MovieCard";
import { SearchContext } from "../../../../contexts/SearchContext";
import { wait } from "@testing-library/user-event/dist/utils";
import Loader from "../../../../components/movie-card/Loader";
import ErrorMessage from "../../../../components/movie-card/ErrorMessage";



const FoundedMovies = () => {

const {searchWord}= useContext (SearchContext);
const [movieList , setMovieList]=useState([]);
const [error , setError] = useState(null);
const [isLoading , setIsLoading] = useState(false);
async  function  getMovies  () {
try{
 setIsLoading(true);
  setError(null);
  await wait(2000);
  const response = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${process.env.REACT_APP_API_KEY}&s=${searchWord}`);
  const data = await response.json();

if(data.Response === "True")
{
  setMovieList(data.Search);
  
}
else {
 setMovieList([]);
  setError(data.Error);
}
}
catch (error){

  console.log("error happened" , error.message);
}
finally {
  setIsLoading(false);
}
}

useEffect(() => {
  if(searchWord){
 getMovies();
  }
  // eslint-disable-next-line 
}, [searchWord]);


 
  return (
    <Box mt={3}>
      {error && <ErrorMessage  error={error} />}
      {isLoading && <Loader />}
      <Grid container spacing={2}>
        {movieList.map((movie, index) => {
          return (
            <Grid item key={index} xs={12} sm={6} md={3}>
              <MovieCard movieObject={movie} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default FoundedMovies;
