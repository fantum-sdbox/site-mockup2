// $(".toggle-password").click(function () {

//   $(this).toggleClass("fa-eye fa-eye-slash");
//   var input = $($(this).attr("toggle"));
//   if (input.attr("type") == "password") {
//     input.attr("type", "text");
//   } else {
//     input.attr("type", "password");
//   }
// });

// const togglePassword = document.querySelector('#togglePassword');
// const password = document.querySelector('#password');

// togglePassword.addEventListener('click', function (e) {

//   // toggle the type attribute
//   const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
//   password.setAttribute('type', type);
//     // toggle the eye / eye slash icon
//     // $(this).toggleClass("fa-eye-slash");

// });

$('.slider').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [{
      breakpoint: 1025,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


//JavaScript function that enables or disables a submit button depending
//on whether a checkbox has been ticked or not.
function terms_changed(termsCheckBox) {
  //If the checkbox has been checked
  if (termsCheckBox.checked) {
    //Set the disabled property to FALSE and enable the button.
    document.getElementById("submit_button").disabled = false;
  } else {
    //Otherwise, disable the submit button.
    document.getElementById("submit_button").disabled = true;
  }
}

//  quantity box 
function wcqib_refresh_quantity_increments() {
  jQuery("div.quantity:not(.buttons_added), td.quantity:not(.buttons_added)").each(function(a, b) {
      var c = jQuery(b);
      c.addClass("buttons_added"), c.children().first().before('<input type="button" value="-" class="minus" />'), c.children().last().after('<input type="button" value="+" class="plus" />')
  })
}
String.prototype.getDecimals || (String.prototype.getDecimals = function() {
  var a = this,
      b = ("" + a).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
  return b ? Math.max(0, (b[1] ? b[1].length : 0) - (b[2] ? +b[2] : 0)) : 0
}), jQuery(document).ready(function() {
  wcqib_refresh_quantity_increments()
}), jQuery(document).on("updated_wc_div", function() {
  wcqib_refresh_quantity_increments()
}), jQuery(document).on("click", ".plus, .minus", function() {
  var a = jQuery(this).closest(".quantity").find(".qty"),
      b = parseFloat(a.val()),
      c = parseFloat(a.attr("max")),
      d = parseFloat(a.attr("min")),
      e = a.attr("step");
  b && "" !== b && "NaN" !== b || (b = 0), "" !== c && "NaN" !== c || (c = ""), "" !== d && "NaN" !== d || (d = 0), "any" !== e && "" !== e && void 0 !== e && "NaN" !== parseFloat(e) || (e = 1), jQuery(this).is(".plus") ? c && b >= c ? a.val(c) : a.val((b + parseFloat(e)).toFixed(e.getDecimals())) : d && b <= d ? a.val(d) : b > 0 && a.val((b - parseFloat(e)).toFixed(e.getDecimals())), a.trigger("change")
});

