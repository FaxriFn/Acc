$(function () {
    
 
function getSearch() {
  
  $('.searchSubmit').on('click', function() {
    var searchVal = $('.searchField').val();
    var filterItems = $('.contentRightContent');

  // if(searchVal == " "){
  //   $('.zeroDoctor').addClass('d-none');
  // }
    if ( searchVal != '' ) {
      filterItems.addClass('hidden');
      $('[data-filter-item][data-filter-name*="' + searchVal.toLowerCase() + '"]').removeClass('hidden');
    } else {
      // filterItems.addClass('hidden');
  // $('.zeroDoctor').removeClass('d-none');
    }
  });
}
getSearch();

$( function() {
    $( "#datepicker" ).datepicker({
        showWeek: true,
        firstDay: 1
    });
  } );
  $('.modalFindDoctor').hide();
  
  $('.modalClick').on('click',function () {
     
    // $('.displayNone').slideDown(1000);
    $('.modalFindDoctor').fadeIn();
    $('.modalFindDoctor').fadeIn("slow");
    $('.modalFindDoctor').fadeIn(3000);


      $('body').css("overflow","hidden")
  })




  $('.circle').on('click',function () {

    $('.modalFindDoctor').fadeToggle();

    $('body').css("overflow","inital")
    $('body').css("overflow","auto")
  })

  
  AOS.init();

$('.searchSubmit').on('click',function () {

let serachValue=$('.departmentSearch').val();
console.log($('.departmentSearch').val()=='urology');

if ($('.departmentSearch').val() == 'urology'   ) {
  getSearch();
  $('.urology').fadeIn();
  $('.urology').fadeIn(300);
  $('.urology').fadeIn("show");
  $('.pulmonary').hide();
  $('.dental-clinic').hide();
  $('.prthopaedics').hide();
  $('.neurology').hide();
}


})

})