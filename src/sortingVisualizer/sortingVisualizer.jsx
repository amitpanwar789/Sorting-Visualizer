import React from "react";
import "./sortingVisualizer.css";
import getMergeSortAnimations from "../sortingAlgo/mergeSort";
import getBubbleSortAnimations from "../sortingAlgo/bubbleSort"
import getQuickSortAnimations from "../sortingAlgo/quickSort"

class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      array: [],
    };
  }
  componentDidMount() {
    this.resetArray();
  }
  resetArray() {
    const array = [];
    for (let i = 0; i < 100; i++) {
      array.push(randomNumberGenerator(5, 500));
    }
    this.setState({ array });
  }
  mergeSort() {
    const animations = getMergeSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("arrayBar");
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [firstIdx, secondIdx] = animations[i];
        const color = i % 3 === 0 ? "red" : "pink";
        const firstIdxElement = arrayBars[firstIdx].style;
        const secondIdxElement = arrayBars[secondIdx].style;
        setTimeout(() => {
          firstIdxElement.backgroundColor = color;
          secondIdxElement.backgroundColor = color;
        }, i * 10);
      } else {
        setTimeout(() => {
          const [idx, heightVal] = animations[i];
          const idxElement = arrayBars[idx].style;
          idxElement.height = `${heightVal}px`;
        }, i * 10);
      }
    }    
  }
  bubbleSort(){
    const animations = getBubbleSortAnimations(this.state.array);
    for(let i = 0 ; i < animations.length ; i++){
      const arrayBars = document.getElementsByClassName("arrayBar");
      const isColorChange = i%4;
      if( isColorChange === 0 || isColorChange === 3 ){
        const [firstIdx, secondIdx] = animations[i];
        const color = (isColorChange === 0)? "red" : "pink";
        const firstIdxElement = arrayBars[firstIdx].style;
        const secondIdxElement = arrayBars[secondIdx].style;
        setTimeout(() => {
          firstIdxElement.backgroundColor = color;
          secondIdxElement.backgroundColor = color;
        }, i * 10);      
      }
      else{
        setTimeout(() => {
          const [idx, heightVal] = animations[i];
          const idxElement = arrayBars[idx].style;
          idxElement.height = `${heightVal}px`;
        }, i * 10);
      }
    }
  }

  quickSort(){
    const animations = getQuickSortAnimations(this.state.array);
    for(let i = 0 ; i < animations.length ; i++){
      const arrayBars = document.getElementsByClassName("arrayBar");
      const isColorChange = animations[i].length;
      if(isColorChange === 3){
          const [firstIdx,secondIdx,check] = animations[i];
          const firstIdxElement = arrayBars[firstIdx].style;
          const secondIdxElement = arrayBars[secondIdx].style;          
          setTimeout(()=>{
            firstIdxElement.backgroundColor = (check)? "red" : "pink";
            secondIdxElement.backgroundColor = (check) ? "green" :"pink";
          },i*20);               
      }
      else{
        setTimeout(()=>{
          const [idx, height] = animations[i];
          const idxElement = arrayBars[idx].style;
          idxElement.height = `${height}px`;
        },i*20)
      }

    }
  }

  render() {
    const { array } = this.state;
    return (
      <div className="container">
        <div className="button">
          <button onClick={() => this.resetArray()}>
            Generate Random Array
          </button>
          <button onClick={() => this.mergeSort()}>Merge Sort</button>
          <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
          <button onClick={() => this.quickSort()}>Quick Sort</button>
        </div>
        <div className="arrayContainer">
          <div className="arrayBarContainer">
            {array.map((val, idx) => (
              <div
                style={{ height: `${val}px`, backgroundColor: "pink" }}
                className="arrayBar"
                key={idx}
              ></div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

function randomNumberGenerator(max, min) {
  return Math.floor(Math.random() * (max - min) + min);
}

export default SortingVisualizer;
