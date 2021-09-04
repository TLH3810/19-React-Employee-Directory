import React from "react";
import API from "../utils/API";

function Main (){
   var data  =  API.getUsers()
         console.log(data.results)
    //.catch(err => console.log(err));
}


export default Main;