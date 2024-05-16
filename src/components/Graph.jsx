import {useState, useEffect} from 'react';
import styled from 'styled-components';
import {v4 as uuidv4} from 'uuid';

export default function Graph(props) {

    const [points, setPoints] = useState([]);
    const [johnnyScore, setJohnnyScore] = useState(0);
    const [allisonScore, setAllisonScore] = useState(0);
    const [stockPrice, setStockPrice] = useState(0);
    const BASE_STOCK_PRICE = 137.49;

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
            // async function getStockPrice() {
            //     console.log("getting stock");
            //     const url = "https://financialmodelingprep.com/api/v3/discounted-cash-flow/YUM?apikey=XlqZqlHkUIWCy3WtndRELL3S2yIOfGaQ";
            //     await fetch(url).then((res) => res.json())
            //     .then((res) => {
            //         setStockPrice(res[0]["Stock Price"]);
            //     }).catch((err) => console.log(err));
            // }
            // getStockPrice();
            setStockPrice(137.49)
            getPoints();
        } catch(err) {
            console.log(err);
        }
    }, [])  

    console.log(points, stockPrice);

    return (
        <GraphContainer> 
            <StockPriceContainer>
                <p>Taco Bell Current Stock Price: {stockPrice}</p>
            </StockPriceContainer>
            <GraphBody>
                <GraphSidebar>
                    <p>Johnny</p>
                    <p>Allison</p>
                </GraphSidebar>
                <ScoreContainer>
                    <JohnnyScore $score={johnnyScore * (stockPrice / BASE_STOCK_PRICE)}></JohnnyScore>
                    <AllisonScore $score={allisonScore * (stockPrice / BASE_STOCK_PRICE)}></AllisonScore>
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

const StockPriceContainer = styled.div`

`

const GraphBody = styled.div`
    border: 1px solid black;
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