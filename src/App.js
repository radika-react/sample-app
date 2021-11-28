import "./App.css";

const todoList = [
  {
    id: 1,
    description: "Learn React",
    status: "not-started",
  },
  {
    id: 2,
    description: "Learn Redux",
    status: "not-started",
  },
];

function App() {
  return (
    <div className="App">
      <input type="text" /> <button> Add </button>
      {todoList.map((val, key) => {
        return (
          <div key={key} style={{ marginTop: "10px" }}>
            <p style={{ display: "inline", marginRight: "10px" }}>
              {val.description}{" "}
            </p>{" "}
            <button> Remove</button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
