# Organization of Components

There are 3 main components: List, ListItem and ViewItem 

The List component has the main data (the list of trains) and allows the user to filter over that data.

The ListItem component is an item within the list and has a function to add itself to the aggregator passed into it

The ViewItem component is an item that is viewable within the cart. ViewItem and ListItem are styled a little differently, but take the same data (an item) from the List component


# How data is passed down through the components

In app.js, the main list of trains is passed as a prop into the List component. In the List component, it passes the data for each item in the list that was passed from app.js into an individual ListItem component. In addition to this data, a function is passed into the ListItem component that allows it to call the addToView function from within the ListItem component. That function takes the data from the props of the ListItem and passess it back into the function along with a uuid back into the List component. The List component then passes that data into a ViewItem component. In additional to that data, a removeFromView function is passed into the ViewItem component. When the function is called, the ViewItem passes itself back into the List component which removes the item that was passed in from the view using the uuid. 

# How user interactions can trigger changes in the state of components

Filters and sorts are always applied to the list data in the List component. By default, everything passess the filter and things are sorted in ascending order (according to power). When the user makes a selection to change the filter or sort, it changes the state which triggers a re-render of the component and the applicable filters and/or sort are applied. When the user clicks the add to cart button, the item they clicked gets added to the aggregator which is stored as an array in the state of the List component. Which the user clicks to remove an item, that item is searched for and removed from the state of the List component. 