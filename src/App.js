import React, { useState } from 'react';
import Nav from './components/Nav'
import Gallery from './components/Gallery'
import About from './components/About'
import ContactForm from './components/Contact'

function App() {
  // you don't have to assign a method name to set the state, you can just use useState to store the initial state in a variable
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
  
  // useState is a function that will always return an array. The first item is the value of your state, and the second item is a setter, which allows you to set the state to something else. This syntax is used to destructure 2 variable references to those array items
  const [ currentCategory, setCurrentCategory ] = useState(categories[0]);

  const [ contactSelected, setContactSelected ] = useState(false)

  return (
    <div>
      <Nav 
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      />
      <main>
        {/* <Contact />
        <Gallery currentCategory={currentCategory}/>
        <About /> */}
        {!contactSelected ? (
          <>
            <Gallery currentCategory={currentCategory} />
            <About />
          </>
        ) : (
          <ContactForm />
        )}
      </main>
    </div>
  );
}

export default App;
