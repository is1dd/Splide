import React, { useEffect, useState } from 'react'
import {motion} from "framer-motion"
import {link, useParams} from "react-router-dom"
import styled from "styled-components"


function Cuisine() {
    const [cuisine,setCuisine] = useState([])
    let params = useParams()
    const getCuisine = async(name)=>{
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=5da4dcab6a0b4dc9ba153d84b2f98c1e&number=10&cuisine=${name}`)
        const recipes = await data.json()
        setCuisine(recipes.results)
        console.log(recipes)
    }
    useEffect(()=>{
        getCuisine(params.type)
        console.log(params.type)
    },[params.type])
  return 
    <Grid>

        {cuisine.map((item)=>{
            return(
                <Card key={item.id}>

                    <img src={item.image} alt=""/>
                    <h4>{item.title}</h4>
                </Card>
            )
        })}
    </Grid>
  
}
const Grid = styled.div`
display:grid;
grid-template-columns: repeat(auto-fit , minmax(20rem,1fr);
`
const Card = styled.div`
img{
    width:100%;
    border-radius: 2rem;

},
a{
    text-decoration: none;
},
h4{
    text-align: center;
    padding:1rem;
}
`

export default Cuisine