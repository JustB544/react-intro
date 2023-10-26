const Person = (props) => {
    return (<div>
        <h2>{props.name} age {props.age}</h2>
        <p>Learn some information about this person
        {/* <span>Name: {props.name.substring(0, 7)}</span> <br/>
        <span>Age: {props.age}</span> */}
        </p>
        {(props.age >= 18) ? <h3>please go vote!</h3> : <h3>you must be 18</h3>}
        <h3>Hobbies</h3>
        <ul>
            {props.hobbies.map(h => <li>{h}</li>)}
        </ul>
    </div>)
}


const App = () => (
    <div className="horizontal center_x">
        <Person name="Lucy" age={5} hobbies={["drinking", "driving"]}/>
        <Person name="Brian" age={23} hobbies={["twitch", "gaming"]}/>
        <Person name="John" age={64} hobbies={["golf", "buffets"]}/>
    </div>
  );
  
ReactDOM.render(<App/>, document.getElementById("root"));