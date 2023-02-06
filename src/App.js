import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [pepperoni, setPepperoni] = useState(false);
  const [sausage, setSausage] = useState(false);
  const [peppers, setPeppers] = useState(false);
  const [onions, setOnions] = useState(false);

  return (
    <div className="page">
      <form>
        <h1>Pizza Order</h1>
        <input
          type="text"
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
        />
        <div>
          <div>
            <input
              type="checkbox"
              checked={pepperoni}
              onChange={() => setPepperoni(!pepperoni)}
            />
            <label>Pepperoni</label>
          </div>
          <div>
            <input
              type="checkbox"
              checked={sausage}
              onChange={() => setSausage(!sausage)}
            />
            <label>Sausage</label>
          </div>
          <div>
            <input
              type="checkbox"
              checked={peppers}
              onChange={() => setPeppers(!peppers)}
            />
            <label>Peppers</label>
          </div>
          <div>
            <input
              type="checkbox"
              checked={onions}
              onChange={() => setOnions(!onions)}
            />
            <label>Onions</label>
          </div>
        </div>
        <button>submit</button>
      </form>
      <div>
        {name ? <h2>{name}'s order</h2> : <h2>your order</h2>}
        <div>{pepperoni && <div>Pepperoni</div>}</div>
        <div>{sausage && <div>Sausage</div>}</div>
        <div>{peppers && <div>Peppers</div>}</div>
        <div>{onions && <div>Onions</div>}</div>
      </div>
    </div>
  );
}

export default App;
