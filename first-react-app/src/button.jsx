function Button(){
    const theclick = (e) => {
        e.target.textContent = "No info bozo"
    }
    return (
    <button className="card-button" onClick={theclick}>Check info</button>
);
}
export default Button;