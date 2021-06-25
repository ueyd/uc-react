import React, {useEffect, useRef, useState} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import {Navigation} from './Navigation';
import {Home} from './Home';
import {About} from './About';
import {Contact} from './Contact';


export const Layout:React.FC = () =>{
	const refElement = useRef<HTMLDivElement>(null);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() =>{
		const handleScroll = () => {
			if(refElement.current !== undefined) {
				if(refElement!.current!.getBoundingClientRect().top < -100){
				console.log('se paso');
				setScrolled(true);
			}else{
				console.log('todavia no');
				setScrolled(false);
			}
			}
		}
		window.addEventListener('scroll', handleScroll);

		return() =>{
			window.removeEventListener('scroll', handleScroll);
		}
	},[refElement, setScrolled])
	
	return(<>
		<div ref={refElement}>
			<Navigation/>
		</div>
		<p>Scrolled: {scrolled}</p>
		<Switch>
			<Route exact path='/'>
				<Home/>
			</Route>

			<Route path='/about-old'>
				<Redirect to='/about'/>
			</Route>

			<Route exact path='/about'>
				<About/>
			</Route>
			<Route path='/contact'>
				<Contact/>
			</Route>
		</Switch>
	</>);
};