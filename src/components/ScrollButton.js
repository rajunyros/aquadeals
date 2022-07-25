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
