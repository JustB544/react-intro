const FirstComponent = () => {
    return <h1>my very first component</h1>
}

const NamedComponent = (props) => {
    return <p>my name is {props.name}</p>
}


const App = () => (
    <div>
      <FirstComponent />
      <NamedComponent name="name" />
    </div>
  );
  
ReactDOM.render(<App/>, document.getElementById("root"));