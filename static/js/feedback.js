phoneInputs = document.querySelectorAll('input[type="tel"]');
phoneInputs.forEach(function (input) {
    var phoneMask = IMask(input, {
        mask: '+{7} (000) 000-00-00'
    });

    input.addEventListener('input', function () {
        const firstDigit = input.value.match(/\+7 \((\d)/);

        if (firstDigit && (firstDigit[1] === '8' || firstDigit[1] === '7')) {
            input.setCustomValidity("Номер не должен начинаться с 8 или 7 после кода +7.");
            input.reportValidity();
        } else {
            input.setCustomValidity("");
        }
    });
});

$('.feedback-form #check-modal').change(function() {
    if ($(this).is(':checked')) {
        $('.feedback-form button[type="submit"]').prop('disabled', false)
    } else {
        $('.feedback-form button[type="submit"]').prop('disabled', true)
    }
});


$('.feedback-form-footer #check-modal').change(function() {
    if ($(this).is(':checked')) {
        $('.feedback-form-footer button[type="submit"]').prop('disabled', false)
    } else {
        $('.feedback-form-footer button[type="submit"]').prop('disabled', true)
    }
});

$('#feedback-form').on('submit', function(event){
	event.preventDefault();
	const formData = $(this).serialize();
	sendFeedBAck(formData)
	$(this).trigger('reset');
})

$('#feedback-form-footer').on('submit', function(event){
	event.preventDefault();
	const formData = $(this).serialize();
	sendFeedBAck(formData)
	$(this).trigger('reset');
})

function sendFeedBAck(formData) {
  $.ajax({
    data: formData,
    type: 'POST',
    datatype: "json",
    url: "/feedback/",
    success: function (response) {
      $('#successfeedBackModal').modal('show');

      setTimeout(() => {
        $('#successfeedBackModal').modal('hide');
      }, 5000);
    },
    error: function (error) {
      console.error("Ошибка при отправке формы:", error);
    }
  });
}