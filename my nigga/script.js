document.getElementById('go').onclick = function() {
    var inputText = $('#text-input').val();
    var thugifiedText = inputText + ", my nigga.";
    document.getElementById('output').innerHTML = thugifiedText;
};