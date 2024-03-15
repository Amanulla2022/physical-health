import "./App.css";
import ExerciseList from "./components/ExerciseList";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ImageData from "./imageData";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero images={ImageData} />
      <ExerciseList />
    </div>
  );
}

export default App;
