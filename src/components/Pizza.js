import { Component } from 'react';
import {Button, Card} from 'react-bootstrap';
import ReactStars from 'react-stars'
import { FaLeaf } from 'react-icons/fa';
import { GiChiliPepper } from 'react-icons/gi';
import { GrLike } from 'react-icons/gr';
import { FaMoon } from 'react-icons/fa';
import './Pizza.css';

var star={
  count:5,
  size:30,
  color:'#ffd700'
}
class Pizza extends Component {
    constructor(props){
        super(props);
        this.state = {
            size: 's',
            like:0
        }
        this.sizeSelect = this.sizeSelect.bind(this);
        this.likeIt=this.likeIt.bind(this);
    }

    likeIt() {
        this.setState(state=>({
            like:state.like+1
        }))
    };

    sizeSelect(event) {
        this.setState({
            size: event.target.value
        })
    }
    
    render() {
        const {id,name, price, image, desc,vegan,halal,spicy} = this.props.p;
        const imgPath = "assets/img/";
        const {addInBasket}=this.props
        let { size,like } = this.state;
        return (
            <Card>
                <div style={{cursor:'pointer'}} onClick={this.likeIt} ><GrLike/>{like}</div>
                <Card.Img variant="top" src={imgPath + image} alt="" />
                <Card.Body>
                <ReactStars {...star} />
                <Card.Title className='d-flex justify-content-between'>
                    <span>
                        {vegan?<FaLeaf/>:''}
                        {spicy?<GiChiliPepper/>:''}
                        {halal?<FaMoon/>:''}
                        {name}
                    </span>
                </Card.Title>
                <Card.Text className='item-description'>
                    <span className='d-flex justify-content-between'>
                        <span>
                            <select onChange={ this.sizeSelect }>
                                <option value="s">kiçik</option>
                                <option value="m">orta</option>
                                <option value="l">böyük</option>
                            </select>
                        </span>
                        <span className='text-muted h5'>{price[size]}₼</span>
                    </span>
                    {desc}
                </Card.Text>
                <Button variant="outline-danger" className='w-100' onClick={()=>{addInBasket(imgPath + image,name, size, price[size])}}>Seçin</Button>
                </Card.Body>
            </Card>
        )
    }
}

export default Pizza;