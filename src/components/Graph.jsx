import {useState, useEffect} from 'react';
import styled from 'styled-components';
import {v4 as uuidv4} from 'uuid';

export default function Graph(props) {

    const user2 = {
        points: 100,
    }

    return (
        <GraphContainer>
            <GraphHeader></GraphHeader>  
            <GraphBody>
                <GraphSidebar>
                    <p>Johnny</p>
                    <p>Allison</p>
                </GraphSidebar>
                <ScoreContainer>
                    <JohnnyScore></JohnnyScore>
                    <AllisonScore></AllisonScore>
                </ScoreContainer>    
            </GraphBody>
        </GraphContainer>
    )
}

const GraphContainer = styled.div`

`

const GraphHeader = styled.div`

`

const GraphBody = styled.div`

`

const GraphSidebar = styled.div`

`

const ScoreContainer = styled.div`

`

const Score = styled.div`

`

const JohnnyScore = styled(Score)`

`

const AllisonScore = styled(Score)`

`