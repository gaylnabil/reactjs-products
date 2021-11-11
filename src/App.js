import './App.css';
import Todo from './components/Todo';
import Header from './components/Header'


function App() {
  return (
    <div className="container">
      <h1>Todos</h1>
      <Todo title="First Todo" />
      <Todo title="Seconde Todo" />
      <Todo title="Third Todo" />
    </div>
  );
}

export default App;
