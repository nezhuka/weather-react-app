import "./styles.css";
import SearchEngine from "./SearchEngine";
export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <SearchEngine />
      <br />
      <p>Coded by  
        <a href="https://www.shecodes.io/reviews">
        Inha Somsikova</a>  and 

        <a href="https://github.com/nezhuka/weather-react-app">
          open-sourced on GitHub </a> 

          and 
        <a href="https://warm-blancmange-8f4413.netlify.app/"> 
        
          deployed on Netlify.</a>
          </p>
        
      

    </div>
  );
}
