# LTV-Test

This page displays a one field form for a search using an email, the redirecting to another page which will show the results if there are any.
The search is performed by doing a GET request using the email as parameter, this will return all the data and the it is stored on SessionStorage. The it 
will be retrieved by results.js and shown in results.html, using DOM manipulation to insert the data in the specified field. If nothing is returned, these
fields will not be shown.




