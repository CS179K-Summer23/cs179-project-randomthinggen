import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='title'>
          RandomThingGen
        </div>
        <div className="selectors">
          <input 
          type="radio" 
          name="selector"/>
          PERSON
          <input 
          type="radio" 
          name="selector"/>
          PLACE
          <input 
          type="radio" 
          name="selector"/>
          THING
        </div>
      </header>
      <body>
        <div className='descBox'>
        Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt 
        ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, 
        quis nostrud exercitation 
        ullamco laboris nisi ut 
        aliquip ex ea commodo consequat. 
        Duis aute irure dolor in 
        reprehenderit in voluptate 
        velit esse cillum dolore 
        eu fugiat nulla pariatur. 
        Excepteur sint occaecat cupidatat 
        non proident, sunt in culpa qui 
        officia deserunt mollit anim id est laborum.
        </div>
      </body>
    </div>
  );
}

export default App;
