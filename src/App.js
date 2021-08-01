import './App.css';
import React from 'react';
import NavBar from './components/NavBar'
import Animation from './components/Animation'

class App extends React.Component {
  constructor(){
    super()

    this.state = {
      navLinks: ['bikes', 'rentals', 'accessories', 'contact us'],
      isMenuOpen: false,
    }
  }

  toggleMenu = () => {
    this.setState({ isMenuOpen: !this.state.isMenuOpen})
  }

  render(){
  const { navLinks, isMenuOpen } = this.state;

  return (
    <div className="App">
      <NavBar 
      toggleMenu={this.toggleMenu}
      isMenuOpen={isMenuOpen}
      links={navLinks}
      />
      <Animation />
    </div>
  );
  }
}

export default App;
