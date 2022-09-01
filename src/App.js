import { Component } from 'react';
import './App.css';
import Filter from './components/Filter';
import Footer from './components/Footer';
import Header from './components/Header.js';
import Main from './components/Main';



class App extends Component {

  constructor(props){
    super(props)
    this.state={
       pizza : [
        {id:1,'name': "Margarita", "price": {'s':"7.90",'m':"11.90",'l':"14.90"}, 'image':"margarita.jpg", 'desc':"Pizza sous, gouda pendiri, mozarella pendiri, pomidor", 'vegan': true, 'halal': false, 'spicy': false},
        {id:2,'name': "Vegetarian", "price": {'s':"8.90",'m':"12.90",'l':"15.90"}, 'image':"vegetarian.jpg", 'desc':"Pizza sous, gouda pendiri,  ispanaq, qırmızı soğan, bolqar bibəri, pomidor, göbələk", 'vegan': true, 'halal': false, 'spicy': false},
        {id:3,'name': "Fungi Kon Pollo", "price": {'s':"9.90",'m':"14.90",'l':"18.90"}, 'image':"texas.jpg", 'desc':"Pizza sous, gouda pendiri, göbələk, toyuq filesi", 'vegan': false, 'halal': false, 'spicy': false},
        {id:4,'name': "Speçiale", "price": {'s':"9.90",'m':"14.90",'l':"18.90"}, 'image':"salyami.jpg", 'desc':"Pizza sous, gouda pendiri, toyuq filesi, qırmızı soğan", 'vegan': false, 'halal': false, 'spicy': false},
        {id:5,'name': "Mista", "price": {'s':"9.90",'m':"14.90",'l':"18.90"}, 'image':"havay.jpg", 'desc':"Pizza sous, gouda pendiri, göbələk, mal ətindən vetçina (halal), salyami kolbasası (halal)", 'vegan': false, 'halal': true, 'spicy': false},
        {id:6,'name': "Salyami", "price": {'s':"9.90",'m':"14.90",'l':"18.90"}, 'image':"mista.jpg", 'desc':"Pizza sous, gouda pendiri, salyami kolbasası (halal)", 'vegan': false, 'halal': true, 'spicy': false},
        {id:7,'name': "Klassiko", "price": {'s':"9.90",'m':"14.90",'l':"18.90"}, 'image':"klassiko.jpg", 'desc':"Pizza sous, gouda pendiri, salyami kolbasası (halal), göbələk, pepperoni bibəri", 'vegan': false, 'halal': true, 'spicy': true},
      ],
      filter:'',
      str:'',
      basket:[]
    }
    this.onFilter = this.onFilter.bind(this)
    this.filter = this.filter.bind(this)
    this.onSearch = this.onSearch.bind(this)
    this.search = this.search.bind(this)
    this.addInBasket = this.addInBasket.bind(this)
    this.delete = this.delete.bind(this)
  }

  addInBasket( image,name, size, price ) {
    this.setState( (state) => (
      {
        basket: [ { image,name, size, price }, ...state.basket ]
      }
    ) )
  }

  delete(delel){
    this.setState(prevState => ({
      basket: prevState.basket.filter(el => el != delel )
    }));
 }

  onFilter(filter) {
    this.setState( { filter: filter } );
  }

  filter(arr,filter){ 
    return (filter=='')?arr:arr.filter(p=>p[filter])
  }

  onSearch(str){
    this.setState({str:str});
  }

  search(arr,str){
    str=str.toLowerCase();
    if(str.length<1)return arr;
    return arr.filter(p=>p.name.toLowerCase().indexOf(str)>-1)
  }

  render(){
    const{pizza,filter,str}=this.state
    const view = this.search(this.filter(pizza, filter),str)
    return (
      <div className="App">
        <Header delete={this.delete} basket={this.state.basket}/>
        <Filter onFilter={ this.onFilter } onSearch={this.onSearch}/>
        <Main pizza={view} addInBasket={this.addInBasket}/>
        <Footer />
      </div>
    );
  }
 
}

export default App;
