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

##Technical requirements
 - [x] Search results should come from OMDB's API (free API key: http://www.omdbapi.com/apikey.aspx).
I accomplished this by using React Hooks specifically React useEffect and useState. 
API call was made using useEffect so that on page load, the data from the API would be ready for use.

Note: The OMDb API has various parameters through which one could collect specific data. For this project,
the s parammeter was used to allow for query search using the title. 
`http://www.omdbapi.com/?s=${MOVIE TITLE}&apikey=${YOUR API KEY}`

 - [x] Each search result should list at least its title, year of release and a button to nominate that film.
