$(function() {
    let $addLocationButton = $('#addLocationButton');
    let $addLocationForm = $('#addLocationForm');
    let $textImput = $('input:text');

    $addLocationButton.show();
    $addLocationForm.hide();

    $('#showForm').on('click', function() {
        $addLocationButton.hide();
        $addLocationForm.show();
    });

    $addLocationForm.on('submit', function(e) {
        e.preventDefault();
        let newText = $textInput.val();
        $('li:last').after('<li>' + newText + '</li>');
        $addLocationForm.hide();
        $addLocationButton.show();
        $textInput.val('');
    });
});