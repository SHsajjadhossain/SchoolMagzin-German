// ==========================
//   active nav js start
// ==========================

// $(document).ready(function () {
//     var Item = document.querySelectorAll('.nav-link');
//     var CurrentLocation = location.href;

//     for(var i = 0; i < Item.length; i++) {
//         if (Item[i].href == CurrentLocation) {
//             Item[i].className = "active";
//         }
//     }
// });

// ==========================
//   active nav js end
// ==========================

// ==========================
//   mobile nav js start
// ==========================

$('.bar').click(function (e) { 
    $('.mobile-nav').fadeToggle();
    
});

$('.close-icon').click(function (e) { 
    $('.mobile-nav').fadeToggle();
    
});

// ==========================
//   mobile nav js end
// ==========================