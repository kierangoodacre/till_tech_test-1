$(document).ready(function(){

  $.each( menu.prices, function(key, value){
    $(#menu-list).append('<li class="menu-list" id="menu-list">"' key '</li>')
  });

//   var obj = {
//   "flammable": "inflammable",
//   "duh": "no duh"
// };
// $.each( obj, function( key, value ) {
//   alert( key + ": " + value );
// });

});
