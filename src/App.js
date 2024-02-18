import './App.css';

const Post = () => {
  return (
    <>
      <h5>Title : "ReactJS Learning"</h5>
      <h5>Author : Abhilash</h5>
      <div>Description : This is all about ReactJS</div>
    </>
  )
}
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
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default App;
