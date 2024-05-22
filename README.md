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