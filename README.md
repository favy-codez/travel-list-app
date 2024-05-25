### Here are some of the things I learnt during the course of this project
- **To use emoji on windows -**  windows + .
- **How to use ternary operator to set some styles -** 
```
<li>
    <span style={item.packed ? {textDecoration : "line-through"} : {}}>
        {item.quantity} {item.description}
    </span>
    <button>❌</button>
</li>
```
- **Array.from** - method to create an array of numbers from 1 to 20 and maps over it 
```
    {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
        <option value={num} key={num}>
            {num}
        </option>
    ))}
```
- { length: 20 }: An object with a length property set to 20. This tells Array.from to create an array with 20 elements.
- (_, i) => i + 1: A map function that takes two arguments:
- The first argument (_) is the current element (ignored here).
- The second argument (i) is the index of the current element (The index is the position of that element in the array, starting from 0).
- The function returns i + 1, effectively generating numbers from 1 to 20.

- **e.preventDefault()** - When a form is submitted, the default action is to send the form data to the server and reload the page. Using e.preventDefault() can prevent this.

- ** controlled elements in forms in react** - By default input fields maintain their own state in the DOM. With controlled elements react controls the state of these input fields instead of the DOM. Using controlled components in forms ensures that React is always aware of the current state of the form elements, making it easier to manage form data and perform actions based on user input.
```
function Form() {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form className="add-form" onClick={handleSubmit}>
      <h3>What do you need for your trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
```
- State Variables: The useState hook is used to create state variables for description and quantity. These variables hold the current values of the description input and the quantity select dropdown.

- handleSubmit Function: This function is called when the form is submitted. It prevents the default form submission behavior using e.preventDefault(), which stops the page from reloading. 

- Form Structure: Inside the return statement, we have a <form> element with a class of "add-form". The onClick event is attached to this form, which means that clicking anywhere inside the form will trigger the handleSubmit function.

- Form Inputs: Inside the form, there's a header there's a <select> dropdown for selecting the quantity of the item, and an <input> field for entering the item description. Both of these inputs are controlled components, meaning their values are controlled by React state (quantity and description respectively). When their values change, the respective onChange handlers update the state variables.

- Add Button: Finally, there's an "Add" button inside the form. However, this button doesn't have a type specified, which means it defaults to "submit". This means that clicking the button would trigger a form submission, but it doesn't have an onClick handler specified, so it won't do anything beyond the default form submission behavior.