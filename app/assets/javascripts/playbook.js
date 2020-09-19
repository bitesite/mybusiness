$(function(){
  $(document).on('click', '.playbook-menu-toggle', function(){
    console.log("hello");
    if($('.playbook-menu').is(':visible')) {
      $('.playbook-menu').slideUp();
    } else {
      $('.playbook-menu').slideDown();
    }
  });
});