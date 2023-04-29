$(document).ready(function(){
  
    var myIndex = 0;
      var i;
      var paySlip = $("#paySlip");
      const proofOfAddress = $("proofOfAddress");


    $(function() {

        var // Define maximum number of files.
            max_file_number = 3,
            // Define your form id or class or just tag.
            $form = $('form'),
            // Define your upload field class or id or tag.
            $file_upload = $('#paySlip', $form),
            // Define your submit class or id or tag.
            $button = $('.submit', $form);
      
        // Disable submit button on page ready.
        $button.prop('disabled', 'disabled');
      
        $file_upload.on('change', function () {
          var number_of_images = $(this)[0].files.length;
          if (number_of_images > max_file_number) {
            alert(`You can upload maximum ${max_file_number} files.`);
            $(this).val('');
            $button.prop('disabled', 'disabled');
          } else {
            $button.prop('disabled', false);
          }
        });
      })
      
      $(function() {

        var // Define maximum number of files.
            max_file_number = 2,
            // Define your form id or class or just tag.
            $form = $('form'),
            // Define your upload field class or id or tag.
            $file_upload = $('#proofOfAddress', $form),
            // Define your submit class or id or tag.
            $button = $('.submit', $form);
      
        // Disable submit button on page ready.
        $button.prop('disabled', 'disabled');
      
        $file_upload.on('change', function () {
          var number_of_images = $(this)[0].files.length;
          if (number_of_images > max_file_number) {
            alert(`You can upload maximum ${max_file_number} files.`);
            $(this).val('');
            $button.prop('disabled', 'disabled');
          } else {
            $button.prop('disabled', false);
          }
        });
      })});