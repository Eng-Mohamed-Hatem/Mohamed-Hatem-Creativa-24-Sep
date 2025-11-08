flatpickr("#datepicker-from", {
         "altInput": true,
         "altFormat": "F j, Y",
        "dateFormat": "Y-m-d",
    });

//     $(document).ready(function(){
//   $(".owl-carousel").owlCarousel();
// });

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:6,
            nav:true,
            loop:false
        }
    }
})

// form validation
document.addEventListener('DOMContentLoaded', function () {

    const fieldsToValidate = [
        'firstNameInput',
        'lastNameInput',
        'displayNameInput',
        'designationInput'
    ];

    const lettersOnlyRegex = /^[a-zA-Z\u0600-\u06FF\s]+$/;

    fieldsToValidate.forEach(fieldId => {
        const input = document.getElementById(fieldId);
        const errorElement = document.getElementById(fieldId + 'Error');

        if (input && errorElement) {
            input.addEventListener('input', () => {
                const value = input.value;
                if (value === "" || lettersOnlyRegex.test(value)) {
                    errorElement.textContent = "";
                } else {
                    errorElement.textContent = "يرجي ادخال حروف فقط";
                }
            });
        }
    });

});