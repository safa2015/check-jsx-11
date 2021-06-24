import './App.css';
import safa from "./safa.jpg"


function App() {
  return (
    <div className="App">
      <div className="jihed">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/-LfSE9ZxZDI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
      <div className="img" style={{ border: "solid 1px black", maxWidth: "100vw" }}>


        <br />

        <img src="/jiji.jpg" alt="jiji" />

        <br />

        <img src={safa} alt ='safaa' />

      
      </div>

    </div>
  );
}

export default App;
