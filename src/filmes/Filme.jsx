import react, {useEffect, useState} from "react";
import axios from "axios";

const ulrApi = axios.create({
    baseURL: "...",
});

const ulrBase = "https://62e2924be8ad6b66d85ea8f3.mockapi.io/api/v1/filmes";



export function Chamada(){

   const [post, setPost] = useState(null);


   useEffect(() => {

    axios.get(ulrBase).then((response) => {

        setPost(response.data);
        
    })
    //Falha
    .catch(error => {
        console.log('Error', error);
        console.log(error.response);
    })
    ;
   

}, []);
       

    return(
        post
    );
};

