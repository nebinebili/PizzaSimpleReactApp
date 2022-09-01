import React from 'react';
import {Container, Badge, Modal, Button, Row, Col} from 'react-bootstrap';
import { BsCart4 } from 'react-icons/bs';
import { IoTrashOutline } from 'react-icons/io5';
import { Component } from 'react';
import './Header.css';

class Header extends Component{

    constructor(props){
        super(props)
        this.state = {
            show: false
        }
        this.handleShow=this.handleShow.bind(this)
        this.handleClose=this.handleClose.bind(this)
        this.delete=this.delete.bind(this)
    }

     handleShow(){
        this.setState({show:true})
     }
     handleClose(){
        this.setState({show:false})
     }
     delete(delel){
        this.props.delete(delel);
    }

    render(){
        const basket=this.props.basket
        const cshow=this.state.show
        return (
            <header>
                <Container style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h1>Pizza-Mizza</h1>
                    <div style={{cursor:'pointer'}} onClick={this.handleShow}><BsCart4 /> <Badge bg="secondary">{basket.length}</Badge></div>
                </Container>
    
                <Modal size="xl" show={cshow} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Container>
                            <Row style={{padding:'0px 0px 10px 0px'}}>
                                <Col xs={6} md={5}>Adı</Col>
                                <Col xs={6} md={3}>Ölçü</Col>
                                <Col xs={6} md={3}>Qiymət</Col>
                                <Col xs={6} md={1}></Col>
                            </Row>
                        {
                        basket.map(element => {
                            
                        return <Row style={{padding:'10px 0px 0px 0px'}}>
                                <Col xs={6} md={5}><img src={element.image} style={{width: 100, height: 100,}}/>-{element.name} </Col>
                                <Col xs={6} md={3}>{element.size=='s'?'kiçik':element.size=='m'?'orta':'böyük'}</Col>
                                <Col xs={6} md={3}>{element.price}  ₼ </Col>
                                <Col xs={6} md={1}> <IoTrashOutline onClick={() => this.delete(element)} style={{cursor:'pointer'}}/> </Col>
                            </Row>
                        })
                        }
                            
                        </Container>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={this.handleClose}>
                        Save Changes
                    </Button>
                    </Modal.Footer>
                </Modal>
            </header>
        )
    }
    
}

export default Header;