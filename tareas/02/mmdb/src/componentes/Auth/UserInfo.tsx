import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { GetNewToken } from "../../services/themoviedb/AuthService";
import { ValidateLocalStorage } from "../../util/Utilitario";

const BtnLogIn = styled.button`
    font-weight: 500;
    font-size: 16px;
    color: #edf0f1;
    text-decoration: none;
`

export const UserInfo = () => {

    const history = useHistory();
    const GetText = () => {
        return !ValidateLocalStorage('session_id') ? 'Log In' : ValidateLocalStorage('name') ? localStorage.getItem('name') : 'Sign out';
    }
    const LogIn = async() => {
        if(ValidateLocalStorage('session_id'))
        {
            localStorage.removeItem("session_id");
            console.log(ValidateLocalStorage('session_id'));
            history.push("/");
        }
        else 
        {
            const token = await GetNewToken();
            window.open("https://www.themoviedb.org/authenticate/" + token + "?redirect_to=http://localhost:3000/logged", "_blank");
        }
    }

    return <div>
        <BtnLogIn onClick={() => LogIn()}>
            {GetText()}
        </BtnLogIn>
    </div>
}