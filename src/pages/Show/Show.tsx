import React, { useEffect } from 'react'
import { useLocation, useParams, useNavigate } from 'react-router-dom';

export const Show = () => {
    const{id}=useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const goBack= () =>{
        navigate(-1);
    };

    useEffect(()=>{
        //llamar el endpoint de detalles de una película con el id de param
    },[]);
  return (
    <div>
        <div>Show id: {id}</div>
        <div>Título desde el state: {location.state.name}</div>
        <button onClick={goBack}>Ir atrás</button>
    </div>
  )
}
export default Show;
