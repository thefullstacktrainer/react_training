import './App.css';

const Post = (props) => {
  return (
    <>
      <h5>Title : {props.title}</h5>
      <h5>Author : {props.author}</h5>
      <div>Description : {props.desc}</div>
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
      <Post title="ReactJS" author="Rajesh" desc="This is the ReactJS course" />
      <Post title="Golang" author="Guru" desc="This is the Golang course" />
      <Post title="Java" author="Harish" desc="This is the Java course" />
    </div>
  );
}

export default App;
