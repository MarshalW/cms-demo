import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AppBar from 'material-ui/lib/app-bar';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';
import IconButton from 'material-ui/lib/icon-button';
import NavigationClose from 'material-ui/lib/svg-icons/navigation/close';
import FlatButton from 'material-ui/lib/flat-button';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
    this.scale=false;
  }

  handleLeftIconTouchTap(){
    console.log('touch left icon ..... ok');
    this.setState({open: !this.state.open});
  }

  handleTitleTouchTap(){
    console.log('>>>>touch end!');
    if(this.state.open){
      this.setState({open:false});   
    }
  }

  componentDidMount(){
    this.animElement=ReactDOM.findDOMNode(this).getElementsByClassName('animTest')[0];
  }

  componentDidUpdate(){

  }

  render() {
    const animStyle={
      width:"300px",
      height:"200px",
      backgroundColor:"gray",
      transform:"scale(2,4)"
    };

    return (
      <div >
        
        <TodoList />
      </div>
    );
  } 
}

class TodoList extends Component {

  constructor(props) {
    super(props);
    this.isdo=false;
    this.scale=false;
  }
  componentDidMount(){
    console.log('component did mount');
    this.animElement=ReactDOM.findDOMNode(this).getElementsByClassName('trans')[0];

    setTimeout(()=>{
      this.setState({aa:1});
    },10);

  }
  componentDidUpdate(){
    console.log('component did update');
    this.animElement.style.transform = 'scale(1) translate(250px,100px)';
  }
  handleAdd() {
    console.log('==>>>handle add');
    if(this.isdo){
      this.animElement.style.transform = 'scale(1) translate(250px,100px)';
    }else{
      this.animElement.style.transform = 'scale(0.1) translate(0px,0px)';
      setTimeout(()=>{
        console.log('>>>>>>dispatch action');
      },200);
    }
    this.isdo=!this.isdo;
  }
  render() {
    console.log('>>>>render');
    let style= {
        width:'200px',
        height:'100px',
        marginTop:'50px',
        backgroundColor:'red',
        transform :'scale(0.1)',
        transition:'all .2s ease-in-out'
    };

    return (
        <div>
            <button onClick={this.handleAdd.bind(this)}>change</button>
            <div style={style} className="trans">方块</div>
        </div>
    );
  }
}