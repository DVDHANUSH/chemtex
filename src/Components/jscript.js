/* eslint-disable no-undef */
$(".about")
  .css("opacity", 0) // immediately hide element
  .waypoint(
    function (direction) {
      if (direction === "down") {
        $(this.element).animate({ opacity: 1 });
      } else {
        $(this.element).animate({ opacity: 0 });
      }
    },
    {
      offset: "bottom-in-view",
    }
  );
