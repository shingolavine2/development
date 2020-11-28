# Organization of Components

There are 3 main components: List, ListItem and ViewItem 

The List component has the main data (the list of trains) and allows the user to filter over that data.

The ListItem component is an item within the list and has a function to add itself to the aggregator passed into it

The ViewItem component is an item that is viewable within the cart. ViewItem and ListItem are styled a little differently, but take the same data (an item) from the List component


# How data is passed down through the components


# How user interactions can trigger changes in the state of components