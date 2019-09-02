$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#site-wrapper").toggleClass("visible");
});
$('.profile-name').on('click', function() {
    $('.dropdown-menu').toggleClass('show')
})