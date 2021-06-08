import React from 'react';
import { TableBody } from './TableBody';
import { TableHeader } from './TableHeader';


export type User = {
	name:string;
	job:string;
}

export interface TableProps {
	users:User[]
	removeUser:(e:number) => void;
}

export const Table:React.FC<TableProps> = ({users, removeUser}) =>{

	const handleGreeting = (name:string) =>{
		alert(`Hola ${name}!`);
	}
	
	return(
		<table>
			<TableHeader/>
			<TableBody users={users} handler={handleGreeting} removeUser={removeUser}/>
		</table>
	)
}

// export default Table;