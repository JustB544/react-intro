const Tweet = (props) => {
    return (<div style={{width: "20%"}}>
        <h2>{props.name} @{props.username}</h2>
        <p>{props.message}</p>
        <b>{props.date}</b>
    </div>)
}


const App = () => (
    <div className="horizontal center_x">
        <Tweet name="Breyton" username="itsjustb544" date="10/26/2023" message="This is a message that is definitely in a tweet."/>
        <Tweet name="Anon" username="anonymous123" date="1/2/2023" message="I have no clue what to put here frankly but I want this to be longer than the previous message so that they aren't all the same length."/>
        <Tweet name="Breyton" username="itsjustb544" date="10/27/2023" message="I posted this message in the future xd."/>
    </div>
  );
  
ReactDOM.render(<App/>, document.getElementById("root"));