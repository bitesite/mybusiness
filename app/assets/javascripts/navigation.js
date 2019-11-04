$(function(){
  $(document).on('click', '.mobile-menu-toggle', function(){
    if($('.mobile-nav-links').is(':visible')) {
      $('.mobile-nav-links').hide();
    } else {
      $('.mobile-nav-links').show();
    }
  });
});