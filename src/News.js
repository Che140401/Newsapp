import { useState } from "react";
import axios from "axios";
import Result from "./Result";

export default function News(){

    const [info,setInfo] = useState([]);

    const getnews = (event) =>{
        event.preventDefault();
        let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=e233496bb7694014a6b040a9a8ae6784";
        axios.get(url)
        .then(res => setInfo(res.data.articles))
        .catch(err => console.log("issue"+err));

       
    }


    return(
        <>
            <center>
                <h1>News App</h1>
                <form onSubmit={getnews}>
                    <input type="submit" value="News from India"/>
                </form>
                {
                    info.map((e) => (
                        <>
                        <Result title={e.title} urlToImage={e.urlToImage} url={e.url}/>
                        </>
                    ))
                }
            </center>
        </>
    );
}