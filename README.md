
1/19 notes:
User stories:
As a user I want to be able to visit the home page to get a description of the dashboard and its features.
As a user, I want to be able to view the GitHub activity of each individual framework by itself.
As a user, I want to be able to view the comparative analytics of two or more frameworks in order to determine the winning framework.
As a user, I want to be able to easily add new frameworks and comparison points so that the codebase can be extended in the future.
 
Items to include in the dashboard:
Commit activity: hourly, weekly, yearly. (to gauge community participation)
Stars (to gauge popularity)
Issues (to gauge stability)

Initial components necessary:
Navbar
 - Links to each framework
 - Link to home
 - Link to comparison container
Main page container
 - Loads what we are navigating to
 - Individual repo container
 - Shows individual framework stats
 - Loads from data file
Comparison container
 - Shows comparison analytics between current frameworks.
Data file to contain framework information (GitHub API url, name, dashboard url, sidebar icon)
 
Dependencies:
React-router-dom
Material-UI
React Icons
FusionChart
 
 
1/20 notes:
TODO: Create tests for acceptance criteria.
TODO: Create a data file for storing framework information.
TODO: Create a sidebar to navigate across the dashboard.

Acceptance criteria:
1. Data file exports an array of frameworks with name, api_url, dash_url, and icon attributes.
2. Sidebar loads home, ReactJS, VueJS, EmberJS, and comparison links from datafile.
3. Sidebar links navigate to correct routes. 

1/21-22 notes:
	TODO: Store Github API data in Repo State
	TODO: Format data to be displayed in FusionChart components
	TODO: Format FusionChart components
	TODO: Display Repo’s charts inside of MainContainer component
 
	Acceptance criteria:
1. Repo component makes fetch call to Github API on mount
2. Repo component refreshes api data consistently
3. Charts show meaningful data for each individual Repo
4. Compatible with new frameworks by just adding to repoData.js file

1/23-24 notes:
	TODO: Create components for framework comparison
	TODO: Create charts for framework comparison
	TODO: Store Github API data in comparison components
	TODO: Display charts inside of Compare container
 
	Acceptance criteria:
1. Compare component makes fetch call to Github API on mount
2. Compare component refreshes api data consistently
3. Charts show meaningful comparison data for JS frameworks
4. New items added to charts by just adding to repoData.js file
 
Final thoughts-

Things that I learned while doing this coding challenge:

 - I got a better understanding of JS Promises and how they work with async functions and the await keyword. I ran into some difficulties passing Repo data into the charts until I took a second to really break down what was happening with the API calls.
 
 - I used FusionCharts to display the repo data which is a tool that I had never used before, I thought it was really interesting to figure out how to format and configure the data.
 
 - I got a better understanding of the useEffect hook, and how to use a setInterval function inside of it. At first I had trouble getting the components to make api calls every 10 seconds to keep the data inside of the charts fresh without page refreshes. I took some time to learn more about the useEffect hook and figured out how to implement a setInterval inside of it.
 
Things that I would do differently if I could do this again:

 - I think that I would use a Redux store for the data that would be used by all components. At first I thought that a Redux store wouldn’t be necessary because only two containers needed to get API data, but I think that using Redux to keep fresh API data in a store that all components would easily be able to access would help clean up some of this code.
 
- I would implement a MaterialUI theme with a color palette to make changing the color scheme easier, currently I would have to update colors in a lot of different places. I would also move the styles from each component into a separate file to clean up some of the code. 

 - I would figure out a way to create charts from the repoData.js file (or maybe a separate data file), currently if you wanted to add a new comparison chart you would have to create a component for it. I would like to have a file that stores all the needed chart configurations and render the charts dynamically based on that information.
 
 - Make the dashboard responsive to ensure consistency across different screen sizes and mobile devices.
