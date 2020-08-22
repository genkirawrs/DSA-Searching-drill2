import React, {Component} from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: 0,
      dataset: [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5]
    };
  }

  searchNumberChanged(search){
	this.setState({search});
  }

  execSearchLinear(toFind){
	let dataset = this.state.dataset;
	toFind = Number(toFind);

	let tally = 1;
	for(let i = 0; i < dataset.length; i++){
	    if( dataset[i] === toFind ){
		alert("It took " + tally + " loops to find " + toFind);
		return;
	    }
	    tally++;
	}
	alert("Could not find " + toFind + " in the data set");
	return;
  }

  execSearchBinary(array,toFind,start,end,tally){
    toFind = Number(toFind);

    var start = start === undefined ? 0 : start;
    var end = end === undefined ? array.length : end;

    if (start > end) {
	alert("Could not find " + toFind + " in the data set");
        return;
    }
    const index = Math.floor((start + end) / 2);
    const item = array[index];

    if (item == toFind) {
	alert("It took " + tally + " loops to find " + toFind);
        return;
    }

    else if (item < toFind) {
        return this.execSearchBinary(array, toFind, index + 1, end, tally+1);
    }
    else if (item > toFind) {
        return this.execSearchBinary(array, toFind, start, index - 1,tally+1);
    }
	
  }


  searchNumbers(e) {
	e.preventDefault();
	let toFind = this.state.search;
	let data = this.state.dataset;
//	this.execSearchLinear(toFind);
	data = data.sort(function(a, b) {return a - b;});
	this.execSearchBinary(data, toFind,0,this.state.dataset.length,1);

  }

  render(){
      return (
        <main className='App'>
	<form onSubmit={e => this.searchNumbers(e)}>
	    <input type="input" id="search" onChange={e => this.searchNumberChanged(e.target.value)}/> <input type="submit" value="search"/>
	</form>
        </main>
      );
  }
}
export default App;
