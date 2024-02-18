import './App.css';

function App() {
  const name = "Lakshmikant";
  const isVisible = true;

  // let address; 
  // let address = 0;
  // let address = null;
  // let address = "";
  let address = "Hubli";
  return (
    <div className="App">
      <header>
        Welcome to ReactJS World {isVisible ? name : "Guest Visitor"}.!
      </header>
      <div>
        {4 + 8}
      </div>
      <div>
        {address ? <>
          {address}
        </> : <>
          <span> There is no address</span>
        </>}
      </div>
    </div>
  );
}

export default App;
