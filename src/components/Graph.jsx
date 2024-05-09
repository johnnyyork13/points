import {useState, useEffect} from 'react';
import styled from 'styled-components';
import {v4 as uuidv4} from 'uuid';

export default function Graph(props) {

    const [points, setPoints] = useState([]);
    const [johnnyScore, setJohnnyScore] = useState(0);
    const [allisonScore, setAllisonScore] = useState(0);

    useEffect(() => {
        try {
            async function getPoints() {
                const url = props.url + '/points';
                await fetch(url).then((res) => res.json())
                .then((res) => {
                    setPoints(res);
                    for (let i = 0; i < res.length; i++) {
                        console.log(res[i].firstName.toLowerCase());
                        if (res[i].firstName.toLowerCase() === 'johnny') {
                            setJohnnyScore(res[i].points);
                        } else if (res[i].firstName.toLowerCase() === 'testfirst') {
                            setAllisonScore(res[i].points);
                        }
                    }
                }).catch((err) => console.log(err));
            }
            getPoints();
        } catch(err) {
            console.log(err);
        }
    }, [])  

    console.log(points);

    return (
        <GraphContainer> 
            <GraphBody>
                <GraphSidebar>
                    <p>Johnny</p>
                    <p>Allison</p>
                </GraphSidebar>
                <ScoreContainer>
                    <JohnnyScore $score={johnnyScore}></JohnnyScore>
                    <AllisonScore $score={allisonScore}></AllisonScore>
                </ScoreContainer>    
            </GraphBody>
            <GraphFooter>
                <HeaderSection>0</HeaderSection>   
                <HeaderSection>25</HeaderSection>
                <HeaderSection>50</HeaderSection>   
                <HeaderSection>100</HeaderSection>      
            </GraphFooter> 
        </GraphContainer>
    )
}

const GraphContainer = styled.div`
    border: 1px solid black;
    padding: 10px;
    width: 500px;
    height: 200px;
`

const GraphFooter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    height: 30px;
`

const HeaderSection = styled.div`

`

const GraphBody = styled.div`
    height: 170px;
    display: flex;
    justify-content: space-between;
`

const GraphSidebar = styled.div`
    height: 100%;
    width: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

const ScoreContainer = styled.div`
    width: 450px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

const Score = styled.div`
    border: 1px solid black;
`

const JohnnyScore = styled(Score)`
    ${props => `
        width: ${props.$score}%;
    `}
`

const AllisonScore = styled(Score)`
    ${props => `
        width: ${props.$score}%;
    `}

`