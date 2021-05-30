import React from "react";
import { TableProps, User } from "./Table";

export interface TableBodyProps extends TableProps{
	handler: (e:string) => void;
}

export const TableBody: React.FC<TableBodyProps> = (oTableProps) => {
  return (
    <tbody>
		{oTableProps.users.map((user: User, index) => (
			<tr key={user.name}>
				<td>{user.name}</td>
				<td>{user.job}</td>
				<td><button onClick={() => oTableProps.handler(user.name)}>Press me!</button></td>
				<td><button onClick={() => oTableProps.handlerRemoveUser(index)}>Press me!</button></td>
			</tr>
		))}
    </tbody>
  );
};
