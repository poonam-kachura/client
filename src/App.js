
import './App.css';
import Form from './Form';


function App() {
  var name = "GOD";
  var isColor = true;
  return (
    <div>
      <h1 className = {isColor ? 'green' : 'blue'}> Hello, Welcome Poonam</h1>
      <h3> My name is {name}</h3>
      
      <Form/>
      

    </div>
  );
}

export default App;
