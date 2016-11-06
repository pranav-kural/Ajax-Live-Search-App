// When anything is typed in the serach box
$( '#search' ).keyup( function () {
  $( '#searcharea' ).removeClass("fullSearchBox");
  $( '#search' ).removeClass("fullInputBox");
  $( '#footer' ).css( "position", "relative" );
  var searchField = $( '#search' ).val();
  var searchValue = new RegExp(searchField, "i");
  // acquiring the JSON data
  $.getJSON( 'data.json', function(data) {
    var output = '<ul class="searchresults">';
    $.each( data, function(key, val) {
      if ((val.name.search(searchValue) != -1) || (val.bio.search(searchValue) != -1)) {
        output += '<li><h2>' + val.name + '</h2><img src="assets/images/person.svg" alt="profile pic"><p>' + val.bio + '</p></li>';
      }
      }); // each speaker
    output += '</ul>';
    $( '#update' ).html( output );
  }); // getJSON
});
