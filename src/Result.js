export default function Result(props){
    return(
        <>
            <h2>{props.title}</h2>
            <img src={props.urlToImage} />
            <br/>
            <a href={props.url}>Read More</a>
            <hr/><hr/>
        </>
    );
}