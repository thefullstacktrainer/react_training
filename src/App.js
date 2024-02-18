import './App.css';

function App() {
  const name = "Lakshmikant";
  const isVisible = true;
  return (
    <div className="App">
      <header className="App-header">
        Welcome to ReactJS World {isVisible ? name : "Guest Visitor"}.!
      </header>
    </div>
  );
}

export default App;
