import {Container, Form, Button} from 'react-bootstrap';
import './Filter.css';
import { Component } from 'react';

class Filter extends Component {


    constructor(props){
        super(props)
        this.state={
           val:''
        }
    }
    render(){
        const filter = this.props.onFilter
        const searchfilter=this.props.onSearch

        const btnarr=[
            {name:'All',filter:'',class:'btn btn1',variant:'danger'},
            {name:'Spicy',filter:'spicy',class:'btn btn2',variant:'success'},
            {name:'Halal',filter:'halal',class:'btn btn3',variant:'success'},
            {name:'Vegan',filter:'vegan',class:'btn btn4',variant:'light'},
        ]
        return (
            <nav>
                <Container>
                    <div>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Search</Form.Label>
                            <Form.Control onChange={e => searchfilter( e.target.value )} type="search" placeholder="Search..." />
                        </Form.Group>
                        {
                            btnarr.map(btn=>{
                               return  <Button onClick={ () => { filter (btn.filter) } } className={btn.class} variant={btn.variant} >{btn.name}</Button>
                            })
                        }
                        
                    </div>
                </Container>
            </nav>
        )
    }
    
}

export default Filter;