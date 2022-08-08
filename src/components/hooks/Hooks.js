import React, {Fragment, useRef} from 'react';

function Hooks() {
return (
	<div>
	<div style={{margin:'20px 40px'}}>
		<h1 style={{fontSize:'40px'}}>React Hooks</h1>
Hooks were added to React in version 16.8.<br/>

Hooks allow function components to have access to state and other React features. <br/>
Because of this, class components are generally no longer needed.<br/>

Although Hooks generally replace class components, there are no plans to remove classes from React. <br/><br/>

What is a Hook?<br/>
Hooks allow us to "hook" into React features such as state and lifecycle methods.<br/><br/>


You must import Hooks from react.<br/>

Here we are using the useState Hook to keep track of the application state.<br/>

State generally refers to application data or properties that need to be tracked.<br/><br/>

Hook Rules<br/>
There are 3 rules for hooks:<br/>

Hooks can only be called inside React function components.<br/>
Hooks can only be called at the top level of a component.<br/>
Hooks cannot be conditional<br/><br/><br/>



<a href="/useLayoutEffect">useLayoutEffect</a>&nbsp;&nbsp;&nbsp;
<a href="/useRef">useRef</a>&nbsp;&nbsp;&nbsp;



<a href="/useMemoHook">Without UseMemo</a>&nbsp;&nbsp;&nbsp;
<a href="/useMemoHook2">with UseMemo</a>&nbsp;&nbsp;&nbsp;
<a href="/useCallBack">Without useCallBack</a>&nbsp;&nbsp;&nbsp;
<a href="/useCallBack2">useCallBack</a>&nbsp;&nbsp;&nbsp;



	</div>
	
	            



	</div>
);
};

export default Hooks;

// UseRef:
// The useRef Hook is a function that returns a mutable ref object
//  whose .current property is initialized with the passed argument (initialValue).
//  Use useRef if you need to manage focus, text selection.
