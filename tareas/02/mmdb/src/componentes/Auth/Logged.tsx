// import React, { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { GetNewSession } from "../../services/themoviedb/AuthService";



export const Logged = () => {

    const location = useLocation();
    // const { request_token } = useParams<{ request_token: string }>();

    //Al iniciar el cmp
    useEffect(() => {
        //Solicitar iniciar sesión
        const token = new URLSearchParams(location.search).get("request_token");
        if(token !== '')
        {
            const ValidateLogIn = async() => {
                const session_id = await GetNewSession(token ?? undefined);
                console.log("Guardar globalmente para usar en todas las peticiones");
                console.log(session_id);
            }
            ValidateLogIn();
        }
    }, []);
    return <div>
        Logged
    </div>
}