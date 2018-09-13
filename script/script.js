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
var timestampToDate = function (_timestamp) {
    if (typeof(_timestamp) == "string"){
        _timestamp = parseInt(_timestamp);
    }
    let _stamp = new Date(_timestamp);
    let _date;
    let Y = _stamp.getFullYear();
    let M = _stamp.getMonth() + 1 < 10 ? '0' + (_stamp.getMonth() + 1) : _stamp.getMonth() + 1;
    let D = _stamp.getDate()+ 1 < 10 ? '0' + (_stamp.getDate() + 1) : _stamp.getDate() + 1;
    _date = Y + '-' + M + '-' + D;
    return _date;
}

