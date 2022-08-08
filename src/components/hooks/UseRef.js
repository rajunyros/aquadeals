import React, {Fragment, useRef} from 'react';

function UseRef() {

// Creating a ref object using useRef hook
const focusPoint = useRef(null);
const onClickHandler = () => {
	focusPoint.current.value =
	"The quick brown fox jumps over the lazy dog";
	focusPoint.current.focus();
};
return (
	<div style={{margin:'20px 40px'}}>

	<h1 style={{fontSize:'40px'}}>UseRef:</h1>
<p>The useRef Hook is a function that returns a mutable ref object
 whose .current property is initialized with the passed argument (initialValue).
 Use useRef if you need to manage focus, text selection.</p><br/><br/>


	<div>
		<button onClick={onClickHandler}>
		ACTION
		</button>
	</div><br/><br/>
	<label>
	Click on the action button to
	focus and populate the text.
	</label><br/>
	<textarea ref={focusPoint} /><br/><br/><br/>
	          




	</div>
);
};

export default UseRef;

// UseRef:
// The useRef Hook is a function that returns a mutable ref object
//  whose .current property is initialized with the passed argument (initialValue).
//  Use useRef if you need to manage focus, text selection.
