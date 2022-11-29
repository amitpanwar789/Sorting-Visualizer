import React from "react";
import "./sortingVisualizer.css";
import getMergeSortAnimations from "../sortingAlgo/mergeSort";
import getBubbleSortAnimations from "../sortingAlgo/bubbleSort";
import getQuickSortAnimations from "../sortingAlgo/quickSort";

class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      array: [],
    };
    this.speed = 95;
    //use to handle interrupt by disabling button while running an algo
    this.interrupt = false;
    //reset the array and stop curr execution
    // this.impInterrupt = false;
  }
  componentDidMount() {
    this.resetArray();
  }
  resetArray() {
    if (this.interrupt) return;
    const array = [];
    for (let i = 0; i < 52; i++) {
      array.push(randomNumberGenerator(5, 500));
    }
    this.interrupt = 0;
    this.setState({ array });
    //this.impInterrupt = false;
  }
  async mergeSort() {
    if (this.interrupt) return;
    this.interrupt = 1;
    const animations = getMergeSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("arrayBar");
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [firstIdx, secondIdx] = animations[i];
        const color = i % 3 === 0 ? "red" : "pink";
        const firstIdxElement = arrayBars[firstIdx].style;
        const secondIdxElement = arrayBars[secondIdx].style;
        firstIdxElement.backgroundColor = color;
        secondIdxElement.backgroundColor = color;
        await this.delay(this.speed);
      } else {
        const [idx, heightVal] = animations[i];
        const idxElement = arrayBars[idx].style;
        idxElement.height = `${heightVal}px`;
        await this.delay(this.speed);
      }
    }
    this.interrupt = 0;
  }
  delay(n) {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res();
      }, n);
    });
  }

  async bubbleSort() {
    if (this.interrupt) return;
    this.interrupt = 1;
    const animations = getBubbleSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("arrayBar");
      const isColorChange = i % 4;
      if (isColorChange === 0 || isColorChange === 3) {
        const [firstIdx, secondIdx] = animations[i];
        const color = isColorChange === 0 ? "red" : "pink";
        const firstIdxElement = arrayBars[firstIdx].style;
        const secondIdxElement = arrayBars[secondIdx].style;
        firstIdxElement.backgroundColor = color;
        secondIdxElement.backgroundColor = color;
        await this.delay(this.speed);
      } else {
        const [idx, heightVal] = animations[i];
        const idxElement = arrayBars[idx].style;
        idxElement.height = `${heightVal}px`;
        await this.delay(this.speed);
      }
    }
    this.interrupt = 0;
  }

  async quickSort() {
    if (this.interrupt) return;
    this.interrupt = 1;
    const animations = getQuickSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("arrayBar");
      const isColorChange = animations[i].length;
      if (isColorChange === 3) {
        const [firstIdx, secondIdx, check] = animations[i];
        const firstIdxElement = arrayBars[firstIdx].style;
        const secondIdxElement = arrayBars[secondIdx].style;
        firstIdxElement.backgroundColor = check ? "red" : "pink";
        secondIdxElement.backgroundColor = check ? "green" : "pink";
        await this.delay(this.speed);
      } else {
        const [idx, height] = animations[i];
        const idxElement = arrayBars[idx].style;
        idxElement.height = `${height}px`;
        await this.delay(this.speed);
      }
    }
  }
  onSlide(event) {
    var speed = event.target.value;
    speed = 105 - speed;
    this.speed = speed;
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
          <div>
            <input
              type="range"
              min={5}
              max={100}
              defaultValue={10}
              onChange={this.onSlide.bind(this)}
              className="slider"
              id="myRange"
            ></input>
          </div>
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
