function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Chao" />
      <Welcome name="Whatever" />
      <Welcome name="David" />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
