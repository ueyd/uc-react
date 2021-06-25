import React, {useState, useEffect, useRef} from 'react';

export const Home:React.FC = () =>{

	const [count, setCount] = useState<number>(0);
	const [todo, setTodo] = useState<any>([{todo:'one'}]);
    const refDiv = useRef<HTMLDivElement | null>(null);
	const [clicked, setClicked] = useState<boolean>(false);
	
	useEffect(() => {
		const loadAPI  = () => [''];
		loadAPI();
 		console.log('Component did mount correctly');
	},[])

	useEffect(() => {
		if(clicked){
			console.log('Click cambio de estado')
		}	
	},[clicked])

	useEffect(() =>{
		console.log('useEffect');
	})

    useEffect(()=> {
        if(refDiv.current !== undefined){
            console.log("element exists");

        }
    })

	const handleTodo = () => {
		setTodo((prevState:any) => {
			return[...prevState, {todo:'other'}]
		})
	}

	const handleClick = () => {
		setCount(count+1);
		setClicked(true);
	}

	return<>
	<h1>HOME PAGE</h1>
		<div>
			<p>You clicked: {count} times the button</p>
			<button onClick={handleClick}>Add up</button>
		</div>
        <div>
            <p>Hola</p>
        </div>
		<div>
			<h3>TODO list:</h3>
			<ul>
			{todo.map((item:any)=> <li key={item.todo}>{item.todo}</li>)}
			</ul>
			<button onClick={handleTodo}>Add one</button>
		</div>
	</>
};