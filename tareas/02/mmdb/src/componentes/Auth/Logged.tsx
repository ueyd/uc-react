import { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { SVAccountDetails } from "../../services/themoviedb/AccountService";
import { GetNewSession } from "../../services/themoviedb/AuthService";

export const Logged = () => {
    const location = useLocation();
    const history = useHistory();
    useEffect(() => {
        const token = new URLSearchParams(location.search).get("request_token");
        if(token !== '')
        {
            const GetAccountDetails = async(session_id:string) => {
                const accountDetails = await SVAccountDetails(session_id);
                localStorage.setItem("name", accountDetails.username);
                localStorage.setItem("acc_id", accountDetails.id);
                history.push("/");
            }
            const ValidateLogIn = async() => {
                const session_id = await GetNewSession(token ?? undefined);
                localStorage.setItem("session_id", session_id);
                GetAccountDetails(session_id);
            }
            ValidateLogIn();
        }
    }, []);

    return <div>
        Logged 
    </div>
}