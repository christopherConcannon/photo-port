import React, { useState, useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
  const {
    // []?  default?
    categories = [],
    setCurrentCategory,
    currentCategory,
    contactSelected,
    setContactSelected
  } = props;
  
  // To update the document.title, which will change the tab's text content, we'll use the currentCategory value that will reflect the user's category selection. If we simply reassign document.title = currentCategory, we'll change the value of document.title. But will this cause a re-render of the component?—no, it won't.
  // We must use a Hook to trigger a re-render on a variable value change. In this step, we will introduce a new Hook called useEffect. The main difference between useEffect and useState is that useEffect is an API that reflects the lifecycle methods of the component, such as when the component mounts, unmounts, or updates.
  // the first argument is the callback function, and the second argument is an array with a single element, currentCategory. The second argument directs the hook to re-render the component on changes to the value of this state. In other words, if currentCategory changes now, the component will re-render so that the change in document.title will be visible to the user. 
  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
  }, [currentCategory])

	return (
		<header className="flex-row px-1">
			<h2>
				<a data-testid="link" href="/" >
					<span role="img" aria-label="camera">
						{' '}
						📷
					</span>{' '}
					Oh Snap!
				</a>
			</h2>
			<nav>
				<ul className="flex-row">
					<li className="mx-2">
						<a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
							About me
						</a>
					</li>
					<li className={`mx-2 ${contactSelected && 'navActive'}`}>
						<span onClick={() => setContactSelected(true)}>Contact</span>
					</li>
					{categories.map((category) => (
						<li className={`mx-1 ${currentCategory.name === category.name && !contactSelected && 'navActive'}`} key={category.name}>
							<span onClick={() => {
                setCurrentCategory(category)
                setContactSelected(false)
              }}
              >
								{capitalizeFirstLetter(category.name)}
							</span>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
}

export default Nav;
