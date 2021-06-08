import React from 'react';

export interface UserProps{
	name:string;
	age:string;
	color:string;
}

export const User:React.FC<UserProps> = ({name, age, color}) => {
	return (
	<ul>
		<li>Name: {name}</li>
		<li>Age: {age}</li>
		<li>Favorite color: {color}</li>
	</ul>
	);
}