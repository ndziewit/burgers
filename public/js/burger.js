$(function() {

    $(".eatburger").on("click", function(event) {
      event.preventDefault;
      var id = $(this).data("id");
      console.log(`eat ${id}`);
      $.ajax("/api/eat/" + id, {
        type: "PUT"
      }).then(
        function() {
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      event.preventDefault();
  
      var newBurger = {
        name: $("#ca").val().trim(),
      };
  
      $.ajax("/api/cats", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          location.reload();
        }
      );
    });
  
// Deletes Burger
    $(".deleteburger").on("click", function(event) {
      var id = $(this).data("id");
  
      $.ajax("/api/burger/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("Ate burger", id);
          location.reload();
        }
      );
    });
  
  });