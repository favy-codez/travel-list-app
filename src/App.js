import "./App.css";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 3, packed: true },
];

export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stat />
    </div>
  );
}

function Logo() {
  // to get emoji windows + .
  return <h1>🌴 Far Away 💼</h1>;
}

function Form() {
  return (
    <form className="add-form">
      <h3>What do you need for your trip?</h3>
      <select>
        {/* <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option> */}
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input type="text" placeholder="Item..." />
      <button>Add</button>
    </form>
  );
}

function PackingList() {
  return (
    // to render list, we use the map method on the array
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          // name of the component, prop, object
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}

function Stat() {
  return (
    <footer className="stats">
      <em>👜 You have X items on your list, and you already packed X (x%)</em>
    </footer>
  );
}
