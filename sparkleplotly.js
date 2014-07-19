var plotly = require('plotly')('plotly_username','plotly_APIkey');
var five = require('johnny-five');
var board = new five.Board();

// plotly init data
var data = [{x:[], y:[], mode: 'markers', stream:{token:'your_first_token', maxpoints:20}},
            {x:[], y:[], mode: 'markers', stream:{token:'your_second_token', maxpoints:20}}];

var layout = {fileopt : 'overwrite', filename : 'nodey arduino!'};

// lets do this
board.on('ready', function() {
  // create a new `photoresistor` sensor object
  var sensor1 = new five.Sensor({
    pin: 'A0',
    freq: 100 // send reading every 50ms
  });
  var sensor2 = new five.Sensor({
    pin: 'A1',
    freq: 100 // send reading every 50ms
  });
  // initialize that plotly graph
  plotly.plot(data,layout,function (err, res) {
    if (err) console.log(err);
    console.log(res);


    var sensor1_stream = plotly.stream('your_first_token', function (err, res) {
      if (err) console.log(err);
      console.log(res);
    });
    var sensor2_stream = plotly.stream('your_second_token', function (err, res) {
      if (err) console.log(err);
      console.log(res);
    });

    sensor1.on('data', function() {
      data = {
        x : getDateString(),
        y : this.value
      };
      // write the data to the plotly stream
      sensor1_stream.write(JSON.stringify(data)+'\n');
    });
    sensor2.on('data', function() {
      data = {
        x : getDateString(),
        y : this.value
      };
      // write the data to the plotly stream
      sensor2_stream.write(JSON.stringify(data)+'\n');
    });
  });
});

// little helper function to get a nicely formatted date string
function getDateString () {
  var time = new Date();
  // 14400000 is (GMT-4 Montreal)
  // for your timezone just multiply +/-GMT by 3600000
  var datestr = new Date(time - 14400000).toISOString().replace(/T/, ' ').replace(/Z/, '');
  return datestr;
}
