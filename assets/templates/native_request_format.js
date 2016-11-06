var respone; // stores the response
var request; // staores the response
// initialising the request object based on different paths.
if ( window.XMLHttpRequest ){
  request = new XMLHttpRequest();
} else {
  request = new ActiveXObject( 'Microsoft.XMLHTTP' );
}
request.open( 'GET', 'data.json' );  // opening the connection and seeting properties for making the request -  for the data.json file
// Event handler to check the state of the request and also check the response status
request.onreadystatechange = function () {
// readyState === 4, when the request has been completed, regardless of the success in generating the required or expected response
  if ((request.readyState === 4) && (request.status === 200)) {
    console.log( request ); // write down the request object to the console
    respone = request.responseText; // assing the response from the server to the response variable
    document.writeln( respone ); // print out the response onto the web page
  } // if statement
} // onreadystatechange Event handler
request.send(); // sending the request - actual execution of all above
