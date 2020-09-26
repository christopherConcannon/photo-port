import React, { useState } from 'react';
import Nav from './components/Nav'
import Gallery from './components/Gallery'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  // you don't have to assign a method name to set the state, you can just use useState to store the initial state.  here the array of objects is assigned to the variable categories which is the only member of the array returned by useState (which usually has 2 elements)
  const [ categories ] = useState([
		{
			name        : 'commercial',
			description :
				'Photos of grocery stores, food trucks, and other commercial projects'
		},
		{
			name        : 'portraits',
			description : 'Portraits of people in my life'
		},
		{
			name        : 'food',
			description : 'Delicious delicacies'
		},
		{
			name        : 'landscape',
			description : 'Fields, farmhouses, waterfalls, and the beauty of nature'
		}
  ]);
  
  const [ currentCategory, setCurrentCategory ] = useState(categories[0]);

  return (
    <div>
      <Nav 
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      />
      <main>
        <Contact />
        <Gallery currentCategory={currentCategory}/>
        <About />
      </main>
    </div>
  );
}

export default App;
