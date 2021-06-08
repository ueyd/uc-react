import React from 'react';
import {TableProps} from './Table';

interface TableBodyProps extends TableProps{
	handler: (e:string) => void;
}

export const TableBody:React.FC<TableBodyProps> = ({users, handler, removeUser}) =>{
	return(
			<tbody>
				{users.map((user, index )=> (
					<tr key={user.name}>
						<td>{user.name}</td>
						<td>{user.job}</td>
						<td><button onClick={()=>handler(user.name)}>Press Me!</button></td>
						<td><button onClick={()=>removeUser(index)}>Delete!</button></td>
					</tr>
				))}
			</tbody>
	)
}

// export default Table;