import {useState, useEffect} from 'react';
import styled from 'styled-components';
import Graph from './Graph';
import Pending from './Pending';

export default function Home(props) {

    const testUser = {
        name: "Johnny",
        points: 100,
        pending: [
            {
                name: "test",
                id: 1,
                points: 10
            },
            {
                name: "test",
                id: 2,
                points: 20
            },
            {
                name: "test",
                id: 3,
                points: 30
            }
        ]
    }

    return (
        <HomeContainer>
            <Graph user={testUser}/>
            <Pending user={testUser}/>
        </HomeContainer>
    )
}

const HomeContainer = styled.div`

`