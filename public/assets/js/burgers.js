
$(function() {

  $(".create-form").on("submit", function(event) {
      event.preventDefault();

      var newBurger = {
      burger_name: $("#burgerToGo").val().trim(),
      devoured: 0
      };

      $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
      }).then(
      function() {
          location.reload();
      }
      );
  });

  $(".delete-burger").on("click", function(event) {
      var id = $(this).data("id");
  
      $.ajax("/api/burgers/" + id, {
        type: "DELETE",
      }).then(
        function() {
          location.reload();
        }
      );
    });

  $(".change-devour").on("click", function(event) {
      var id = $(this).data("id");
      var newDevour = $(this).data("newdevour");
  
      var newDevourState = {
        devoured: "true"
      };
  
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevourState
      }).then(
        function() {
          location.reload();
        }
      );
    });   
});