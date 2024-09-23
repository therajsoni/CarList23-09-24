import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const FilterDetailsBox = ({theme}) => {

    const [state,setState] = useState(false)

    const {id} = useParams()



    useEffect(()=>{
        if(theme==="dark"){
            setState(true)
        }
        else{
            setState(false)
        }
    },[theme])



    const [deatails,setDeatails] = useState();

    console.log(deatails);   

    useEffect(()=>{
        const fetchData = () => {
        try {
            axios.get(`http://localhost:3000/${id}`).then((data)=>{
                setDeatails(data.data.carDetails);
                }).catch((error)=>{
                    console.log(error);            
                })
        } catch (error) {
            console.log(`${error}`);            
        }    }
        fetchData();        
    },[id])


  return (
    <div>
       
       <div class="flex justify-center mb-8">
       <Link to={"/list"} className="bg-yellow-400 text-black  py-2 px-16 rounded mt-5 hover:bg-yellow-500 hover:yellow">
           <span style={{display:"flex", flexDirection:"row",justifyContent:"space-around",alignItems:"center"}}>
           {deatails.name}
           <FaFilter />
           </span>          
        </Link>
       </div>
       

    </div>
  )
}

export default FilterDetailsBox

