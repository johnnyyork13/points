import {useState, useEffect} from 'react';
import styled from 'styled-components';
import {v4 as uuidv4} from 'uuid';

export default function Pending(props) {

    
    const mappedPending = props.user.pending.map((item, index) => {
        return (
            <div key={uuidv4()}>
                <p>{item.id}</p>
                <p>{item.points}</p>
            </div>
        )
    
    })

    return (
        <PendingContainer>
            {mappedPending}
        </PendingContainer>
    )
}

const PendingContainer = styled.div`

`