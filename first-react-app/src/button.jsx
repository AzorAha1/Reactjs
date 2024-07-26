function Button(){
    const theclick = () => {
        console.log("You clicked me");
    }
    return (
    <button className="card-button" onClick={theclick}>Check info</button>
);
}
export default Button;