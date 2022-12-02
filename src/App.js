import { useEffect } from "react";
import SortingVisualizer from './sortingVisualizer/sortingVisualizer'; 
import './App.css';

function App() {
  useEffect(() => {
    document.title = "Sorting Visualizer";
  }, []);
  return (
    <div className="App">
      <SortingVisualizer></SortingVisualizer>
    </div>
  );
}

export default App;
