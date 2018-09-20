//load header & leftBar
$('#Header').load('header.html');
$('#LeftBar').load('leftBar.html', function () {
    if ($('#LicenseOverview').length > 0) {
        $('#LBOverview').css('color', '#ffae38');
        $('#LBOverview .linkImage').css('background-image', 'url(./image/IconYellow.svg)');
    }
    if ($('#ActivateLicenseOnPremise').length || $('#ActiveLicenseHosted').length > 0) {
        $('#LBActivateLicense').css('color', '#ffae38');
        $('#LBActivateLicense .linkImage').css('background-image', 'url(./image/IconYellow.svg)');
    }
    if ($('#MoveLicense').length > 0) {
        $('#LBMoveLicense').css('color', '#ffae38');
        $('#LBMoveLicense .linkImage').css('background-image', 'url(./image/IconYellow.svg)');
    }
    if ($('#ServerNodesCentral').length > 0) {
        $('#LBServerNodes').css('color', '#ffae38');
        $('#LBServerNodes .linkImage').css('background-image', 'url(./image/IconYellow.svg)');
    }
    if ($('#Network').length > 0) {
        $('#LBNetwork').css('color', '#ffae38');
        $('#LBNetwork .linkImage').css('background-image', 'url(./image/IconYellow.svg)');
    }
    if ($('#Log').length > 0) {
        $('#LBLog').css('color', '#ffae38');
        $('#LBLog .linkImage').css('background-image', 'url(./image/IconYellow.svg)');
    }
    if ($('#RegisteredDevices').length > 0) {
        $('#LBRegisteredDevices').css('color', '#ffae38');
        $('#LBRegisteredDevices .linkImage').css('background-image', 'url(./image/IconYellow.svg)');
    }
});

//transform timestamp
function timestampToDate(_timestamp) {
    let _lenTime = _timestamp.length;
    for (let i = 0; i < (13-_lenTime); i++) {
        _timestamp*=10;
    }
    let _stamp = new Date(_timestamp);
    let _date;
    let Y = _stamp.getUTCFullYear();
    let M = _stamp.getMonth() + 1 < 10 ? '0' + (_stamp.getMonth() + 1) : _stamp.getMonth() + 1;
    let D = _stamp.getDate() + 1 < 10 ? '0' + (_stamp.getDate() + 1) : _stamp.getDate() + 1;
    _date = Y + '-' + M + '-' + D;
    return _date;
}
//
// $('#CheckBtn').click(function () {
//     if ($(this).attr('class') === 'check-enable-btn'){
//         $(this).removeClass('check-enable-btn').addClass('check-disable-btn');
//     }else if ($(this).attr('class') === 'check-disable-btn') {
//         $(this).removeClass('check-disable-btn').addClass('check-enable-btn');
//     }
// });





