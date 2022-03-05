import React from 'react';
import {Navbar} from './components/Navbar/Navbar';

function App() {

  class Recipe {
    constructor(name, image, ingredients, steps, duration, daytime, difficulty, cookware) {
        this.name = name;
        this.image = image;
        this.ingredient = [];
        this.steps = [];
        this.duration = duration;
        this.daytime = daytime;
        this.difficulty = difficulty;
        this.cookware = cookware;
    }

    ability(player) {

    }
}
  
  return (
    <React.Fragment>
      <Navbar/>
    </React.Fragment>
  );
}

export default App;
