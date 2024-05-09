import {useState, useEffect} from 'react';
import { setGlobalUser } from '../state/user/userSlice';
import {useDispatch, useSelector} from "react-redux";
import styled from 'styled-components';
import Graph from './Graph';
import Pending from './Pending';

export default function Home(props) {

    const globalUser = useSelector((state) => state.user);

    console.log(globalUser);

    return (
        <HomeContainer>
            <Graph user={globalUser} url={props.url}/>
            {/* <Pending user={globalUser}/> */}
        </HomeContainer>
    )
}

const HomeContainer = styled.div`

`