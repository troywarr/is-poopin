Parse.initialize('KNeNISI8FsAEmumsazFZkIN4z4xHwvkrdyDcEcWB', 'kHQp0CnhdtWGC3r8tenZ0RsdJA61DrnjwvgWE0rE');

var Log = Parse.Object.extend('Log'),
    query = new Parse.Query(Log);

query.descending('createdAt');
query.first({
  success: function(results) {
    var start = results.get('status'),
        $body = $('body');

    if (start) { // yep
      $body.addClass('yep');
    } else { // nope
      $body.addClass('nope');
    }
    $body.show();
  },
  error: function(error) {
    alert('Error: ' + error.code + ' ' + error.message);
  }
});
