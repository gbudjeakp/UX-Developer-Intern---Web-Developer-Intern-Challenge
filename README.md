# UX-Developer-Intern---Web-Developer-Intern-Challenge
## Application Link: *Some Link*

##  How to run application locally(on your computer)
In the project directory, change your directory to the "client" directory/folder in your teerminal 
by typing "cd client". once inside the client directory, 
you can run the app by typing:
### `yarn start`

This will runs the app in the development mode and automatically open up a browser tab with the app route.
if for any reason the broswer does not open, manually open the browser and type in
[http://localhost:3000](http://localhost:3000) to view it in the browser.

## Technical Requirements ##
 - [x] Search results should come from OMDB's API (free API key: `http://www.omdbapi.com/apikey.aspx)`.
  #### Heading 4 ####
I accomplished this by using React Hooks specifically React useEffect and useState. 
API call was made using useEffect so that on page load, the data from the API would be ready for use.
useState hook was used to set the state of the data/information gotten from the API. In this case, the data was the movie title, year and id

Note: The OMDb API has various parameters through which one could collect specific data. For this project,
the s parammeter was used to allow for query search using the title. 
`http://www.omdbapi.com/?s=${MOVIE TITLE}&apikey=${YOUR API KEY}`

 - [x] Each search result should list at least its title, year of release and a button to nominate that film.
  #### Approach ####
For this part of the challenge, I decided to try something new by using context API as I read that it saves one from prop spreading.
After a couple of hours with the React documentation, I had a rough idea of how it worked and proceeded to use it. 
When it came time to display the search result, I wondered what Shopify used for their UI/UX components since I was going to be applying for an internship position, it made sense to see what technology they used to develop their UI. A quick google search and I see ShopifyPolaris. So I decided to try using it as opposed to Material UI which I normally use for my projects. After a couple hours with the Polaris documentation, I now knew how to work it, to some extent. After mapping through the data from the API, 
I rendered them into Polaris `MediaCard` component. 

 - [x] Updates to the search terms should update the result list
  #### Approach ####
 This was easy to do. All I had to do was set the useEffect dependecy to a state called `searchresult` and then pass that state as a prop to the shopifyPolaris `Top bar` component. Then the search input field in the `Top bar` component was monitored for changes. Any change to the search field would cause the useEffect to fetch data matching the input.

 - [x] Movies in search results can be added and removed from the nomination list.
  #### Approach ####
I created a nomination list component created in the client directory. This component was passed a prop using the context API which had an empty array state called `nominationlist` which was used to hold the API data (movie title, year and id). In the cotext API component, the state was set to contain whatever details of what card was being nominated through the use of the App reducer. That state was then mapped through and used to populate the nominationlist component. In order to remove items from the list, the `nominationlist` was filtered to match the title.
 
- [x] If a search result has already been nominated, disable its nominate button.
  #### Approach ####
 All i had to do for this was to use the `.find()` method which returns the value of the first element in a provided array that satisfies the provided testing function, to look into our `nominationlist` array which comes from our context API to see if a title was already added to the array. A disabled prop was added to the `Media Card` component and set to the value of whatever the `.find()` method produced. if it was true then the button would be disabled but if false, it would not.
 
 - [x] Display a banner when the user has 5 nominations.
   #### Approach ####
 To achieve this feature, I simply created an Alert components and used some basic `if` logic to check the `nominationlist` array to see if it contained five items and that if it did, it should render the ShopifyPolaris `Banner` component. I wasn't too sure what the banner was for so added some logic that would disabled all the buttons once the user had nominated five movies. The Banner in this case was used to explain to the user, that they they could only make five choices along with instructions on how to change their choices.
 
 ## Extras ##
 - [x] Save nomination lists if the user leaves the page
   #### Approach ####
   In order to make the data persist, I made use of `localStorage` and stored the `nominationlist` array in there and also retrieved data from `localStorage`
   
### Challenges encountered and fixes used ###
The main challenege I faced while working, was the UI. Once i started using the Polaris components, it became evident to me that it was not designed to take on tasks like this but notheless, i still wanted to use it. I first tried adding custome CSS styles to the Polaris components but soon found out that they did not work. The lack of css customization left the UI looking too big and hard to utilize. 

 ![Picture of UI problem](/refimages/beforefix.png?raw=true)

 #### The Fix ####
 To solve this UI/UX crises, I ended up wrapping the Polaris components in `<div>`'s and then styling those div using inline css. Though this did not give me the ability to fully customize the UI, i was able to make it look presentable.

 ![picture alt]((https://github.com/gbudjeakp/UX-Developer-Intern---Web-Developer-Intern-Challenge/tree/main/refimages/afterfix.png?raw=true0 "Problem Fix")
