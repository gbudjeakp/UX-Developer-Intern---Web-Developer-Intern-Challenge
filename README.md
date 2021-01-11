# UX-Developer-Intern---Web-Developer-Intern-Challenge
Application Link: *Some Link*

##How to run application locally(on your computer)
In the project directory, change your directory to the "client" directory/folder in your teerminal 
by typing "cd client". once inside the client directory, 
you can run the app by typing:
### `yarn start`

This will runs the app in the development mode and automatically open up a browser tab with the app route.
if for any reason the broswer does not open, manually open the browser and type in
[http://localhost:3000](http://localhost:3000) to view it in the browser.

## Technical Requirements ##
 - [x] Search results should come from OMDB's API (free API key: `http://www.omdbapi.com/apikey.aspx)`.
I accomplished this by using React Hooks specifically React useEffect and useState. 
API call was made using useEffect so that on page load, the data from the API would be ready for use.
useState hook was used to set the state of the data/information gotten from the API. In this case, the data was the movie title, year and id

Note: The OMDb API has various parameters through which one could collect specific data. For this project,
the s parammeter was used to allow for query search using the title. 
`http://www.omdbapi.com/?s=${MOVIE TITLE}&apikey=${YOUR API KEY}`

 - [x] Each search result should list at least its title, year of release and a button to nominate that film.
For this part of the challenge, I decided to try something new by using context API as I read that it saves one from prop spreading.
After a couple of hours with the React documentation, I had a rough idea of how it worked and proceeded to use it. 
When it came time to display the search result, I wondered what Shopify used for their UI/UX components. 
A quick google search and I see ShopifyPolaris. So I decided to try using it as opposed to Material UI which I normally use for my projects. 
After a couple hours with the Polaris documentation, I now knew how to work it. After mapping through the data from the API, 
I rendered them into Polaris `Card` component and this was were I encountered my first (#challenge-1). 

 - [x] Updates to the search terms should update the result list

### Challenges encountered and fixes used ###
