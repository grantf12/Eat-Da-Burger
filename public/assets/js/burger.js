// make sure that everything loads first
$(function() {
  // on submitting the create-form, a newBurger is made using the value in the input area
  $(".create-form").on("submit", function(event) {
    event.preventDefault();

    var newBurger = {
      // Link to handlebars form as "newburger"
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
  // Clicking the "devour it" button
  $(".devourit").on("click", function(event) {
    var id = $(this).data("id");
// Changes the devoured value to true (1)
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

  // Delete button ======== Needs Work

  // ==================================================
  
// $(".garbageburger").on("click", function(event){
//   event.preventDefault();

//   var id = $(this).data("id");

//   // send the delete request
//   $.ajax({
//     type: "DELETE",
//     url: "/api/burgers/" + id
//     // Deletes the burger based on ID then reloads the page to refresh list
//   }).then(location.reload());
// })

});
