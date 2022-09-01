import {Container, Row,Col } from 'react-bootstrap';
import './Main.css'
import Pizza from './Pizza';

function Main({pizza,addInBasket}) {
    

    return (
        <main>
            <Container>
                <Row xs={2} md={4} className="g-4">
                    {
                        pizza.map((item,index)=><Col key={index}><Pizza  p={item} addInBasket={addInBasket} /></Col>)
                    }

                </Row>
            </Container>
        </main>
    )
}

export default Main;