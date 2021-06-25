import React from 'react'
import {useHistory, useParams, Link} from 'react-router-dom'

export const About:React.FC = () => {
    const history = useHistory();
    const route = history.location.pathname;
    const {sectionID} = useParams<{sectionID:string}>();
    console.log(route);
    return <>
    <h1>About page</h1>
    <div>
        <p>{sectionID}</p>
        <button>
            <Link to='/contact'>
                Contact me!
            </Link>
        </button>
    </div>
    </>
}