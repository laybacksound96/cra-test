import { useState } from "react";

function App() {
  const [value, setValue] = useState();
  const [values, setValues] = useState([]);
  const onChange = (event) => {
    setValue(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (value === "") {
      return;
    }
    setValues((currentArray) => [value, ...currentArray]);
    setValue("");
  };
  console.log(values);
  return (
    <div>
      <h1>Todos</h1>
      <form onSubmit={onSubmit}>
        <input value={value} onChange={onChange}></input>
        <button type="submit">Ok</button>
      </form>
    </div>
  );
}

export default App;
