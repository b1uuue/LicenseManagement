//load header & leftBar
$('#Header').load('header.html');
$('#LeftBar').load('leftBar.html', function () {
    if ($('#LicenseOverview').length) {
        $('#LBOverview').css('color', '#ffae38');
        $('#LBOverview .linkImage').css('background', '#ffae38');
    }
    if ($('#ActivateLicenseOnPremise').length || $('#ActiveLicenseHosted').length || $('#ActiveLicenseOnline').length) {
        $('#LBActivateLicense').css('color', '#ffae38');
        $('#LBActivateLicense .linkImage').css('background', '#ffae38');
    }
    if ($('#MoveLicense').length) {
        $('#LBMoveLicense').css('color', '#ffae38');
        $('#LBMoveLicense .linkImage').css('background', '#ffae38');
    }
    if ($('#ServerNodesCentral').length) {
        $('#LBServerNodes').css('color', '#ffae38');
        $('#LBServerNodes .linkImage').css('background', '#ffae38');
    }
    if ($('#Network').length) {
        $('#LBNetwork').css('color', '#ffae38');
        $('#LBNetwork .linkImage').css('background', '#ffae38');
    }
    if ($('#Log').length) {
        $('#LBLog').css('color', '#ffae38');
        $('#LBLog .linkImage').css('background', '#ffae38');
    }
    if ($('#RegisteredDevices').length) {
        $('#LBRegisteredDevices').css('color', '#ffae38');
        $('#LBRegisteredDevices .linkImage').css('background', '#ffae38');
    }
});

//transform timestamp
function timestampToDate(_timestamp) {
    let _lenTime = _timestamp.length;
    for (let i = 0; i < (13 - _lenTime); i++) {
        _timestamp *= 10;
    }
    let _stamp = new Date(_timestamp);
    let _date;
    let Y = _stamp.getUTCFullYear();
    let M = _stamp.getMonth() + 1 < 10 ? '0' + (_stamp.getMonth() + 1) : _stamp.getMonth() + 1;
    let D = _stamp.getDate() + 1 < 10 ? '0' + (_stamp.getDate() + 1) : _stamp.getDate() + 1;
    _date = Y + '-' + M + '-' + D;
    return _date;
}





