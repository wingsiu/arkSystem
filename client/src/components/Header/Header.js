import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  Nav,
  Navbar,
  Collapse,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  Badge
} from 'reactstrap';
import HeaderDropdown from './HeaderDropdown';

import './styles.scss';


class Header extends Component {

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    console.log("header menu:", props.menu)
    this.state = {  
      menu : [],
      isOpen: false,
      isLogin: false
    };
    console.log("Header prop:", props.menu);
    }
    
    toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
    }
  
    componentDidMount(){
    console.info("starting:", this.state.menu);
    
    this.state.menu.map((item)=>{
        console.log("header name:",item.title);
    });

  }


  sidebarToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-hidden');
  }

  sidebarMinimize(e) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-minimized');
  }

  mobileSidebarToggle(e) {
    e.preventDefault();
   // document.body.classList.toggle('navbarToggleExternalContent');
    document.body.classList.toggle('sidebar-mobile-show');
  }

  asideToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('aside-menu-hidden');
  }
    

  render() {
const tempMenu = this.props.menu//.map((item)=>item.title);
const Menu = tempMenu.map((item)=>
    <Nav className="ml">
        <NavItem>
            <NavLink href={"/"+item.link}>{item.title}</NavLink>
        </NavItem>
    </Nav>
);
      console.log("header props:", Menu);
    return (
        <div>
         <Navbar color="dark" dark expand="md" >
          <NavbarBrand href="#">
            <span><img src="../img/arklogo2.png" alt=""></img></span></NavbarBrand>
          <NavbarToggler onClick={this.toggle} >
                  <span className="navbar-toggler-icon"></span>
          </NavbarToggler>
          <Collapse isOpen={this.state.isOpen} navbar>
            {Menu.map((item)=>item)}

            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
              </NavItem>  
            
          <NavItem className="d-md-down-none">
            <NavLink href="#"><i className="icon-bell"></i><Badge pill color="danger">5</Badge></NavLink>
          </NavItem>
          <NavItem className="d-md-down-none">
            <NavLink href="#"><i className="icon-list"></i></NavLink>
          </NavItem>
          <NavItem className="d-md-down-none">
            <NavLink href="#"><i className="icon-location-pin"></i></NavLink>
          </NavItem>
          { !this.state.isLogin ? (<HeaderDropdown/>) :
            (
          <NavItem className="px-3">
            <NavLink href="#">SignIn</NavLink>
          </NavItem>
           )}
        <NavbarToggler className="d-md-down-none" onClick={this.asideToggle}>
          <span className="navbar-toggler-icon"></span>
        </NavbarToggler>
        </Nav>
          </Collapse>
        </Navbar>
    </div>

    );
  }
}

export default Header;
