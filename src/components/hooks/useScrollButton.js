import React, {useState} from 'react';
import {FaArrowCircleDown} from 'react-icons/fa';
import { Button } from './Styles';
	
const ScrollButton = () =>{
	
const [visible, setVisible] = useState(true)
	
const toggleVisible = () => {
	const scrolled = document.documentElement.scrollTop;
	if (scrolled > 0){
	setVisible(false)
	}
	else if (scrolled <= 500){
	setVisible(true)
	}
};
	
const scrollToBottom = () =>{
	 const offsetHeight = document.documentElement.offsetHeight;
      const innerHeight = window.innerHeight;
      const scrollTop = document.documentElement.scrollTop;

      const hasReachedBottom = offsetHeight - (innerHeight + scrollTop) <= 10;


	console.log("SSSSSSSSSS",document.documentElement.scrollHeight)
	window.scrollTo({
	top: document.documentElement.scrollHeight,
	behavior: 'smooth'
	/* you can also use 'auto' behaviour
		in place of 'smooth' */
	});

	      console.log("hasReachedBottom",hasReachedBottom)

};
	
window.addEventListener('scroll', toggleVisible);
	
return (
	<Button>
	<FaArrowCircleDown onClick={scrollToBottom}
	style={{display: visible ? 'inline' : 'none'}} />
	</Button>
);
}
	
export default ScrollButton;

// 1.UseState
// 2.UseReducer
// 3.UseEffect
// 4.UseRef
// 5.UseLayoutEffect
// 6.UseContext
// 7.UseImperativeHandle
// 8.UseMemo
// 9.UseCallback