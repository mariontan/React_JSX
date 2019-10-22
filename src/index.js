// Import thhe React and React DOM libs
import React from 'react';
import ReactDOM from 'react-dom';

// function getButtonText(){
// 	return 'Click on me';
// }
//Create React Component
const App = ()=>{
	const buttonText = {text:'Click me'}
	const style={backgroundColor: 'blue', color: 'white'};
	return (
		<div> 
			<label className="label htmlFor="name>Enter name:</label>
			<input id="name type"text/>
			<button style={style}>
				{buttonText.text}	
			</button>

		</div>
		);
};

// show reect component
ReactDOM.render(
	<App/>,
	document.querySelector('#root')	
);