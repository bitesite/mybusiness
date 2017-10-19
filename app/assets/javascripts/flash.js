var timeout;

$(function () {
  if ($(".flash").length > 0) {
    timeout = setTimeout(function () {
      clearTimeout(timeout);
      $(".flash").slideUp(100, function () {
        this.remove();
      });
    }, 5000);
  }
});