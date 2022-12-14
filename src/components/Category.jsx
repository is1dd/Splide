import {FaPizzaSlice , FaHamburger} from "react-icons/fa"
import {GiNoodles, GiChopsticks} from "react-icons/gi"
import styled from "styled-components"
import {NavLink} from "react-router-dom"
import React from 'react'

function Category() {
  return (
    <List>
            <NavLink to={'/cuisine/italian'}>
                <FaPizzaSlice />
                <h4>Italian</h4>
            </NavLink>
              <NavLink to={'/cuisine/american'}>
                <FaHamburger />
                <h4>American</h4>
            </NavLink>
             <NavLink to={'/cuisine/thai'}>
                <GiNoodles />
                <h4>ThaiFood</h4>
           </NavLink>
            <NavLink to={'/cuisine/japanese'}>
                <GiChopsticks />
                <h4>Japanese</h4>
            </NavLink>
    </List>
  )
}
const List = styled.div`
display:flex;
margin: 2rem 0rem;
justify-conttent: center;
`
export default Category