import './App.css';

export default function App() {
  return (
    <div className="App">
      <Logo/>
      <Form/>
      <PackingList/>
      <Stat/>
    </div>
  );
}


function Logo(){
// to get emoji windows + .
return(
  <h1>🌴  Far Away 👜💼</h1>
)
}

function Form(){
  <div className='add-form'>
    <h3>What do you need for your trip?</h3>
  </div>
}

function PackingList(){
  return(
    <div className='list'>LIST</div>
  )
}

function Stat(){
  return(
     <footer>
      <em>You have X items on your list, and you already packed X (x%)</em>
     </footer>
  )
}