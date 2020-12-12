// make sure that everything loads first
$(function() {
  
  $(".create-form").on("submit", function(event) {
    event.preventDefault();

    var newBurger = {
      burger_name: $("#newburger").val().trim(),
      devoured: 0
    };

    // POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
  
  $(".devourit").on("click", function(event) {
    var id = $(this).data("id");
// Changes the devoured avlue to true (1)
    var devouredState = {
      devoured: 1
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: devouredState
    }).then(
      function() {
        console.log("changed devoured to", devouredState);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
$(".garbageburger").on("click", function(event){
  event.preventDefault();

  var id = $(this).data("id");

  // send the delete request
  $.ajax({
    type: "DELETE",
    url: "/api/burgers/" + id
    // Deletes the burger based on ID then reloads the page to refresh list
  }).then(location.reload());
})

});
