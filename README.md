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