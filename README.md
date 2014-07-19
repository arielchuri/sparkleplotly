sparkleplotly
=============
Check for updates at sparklelabs.com/plotly
## Getting started with Javascript + Arduino
The easiest way to start visualizing sensor data with your Arduino!
Instead of programming using the C-like Arduino language, we're going to leverage the language of the web, Javascript, to interact with our Arduino!
We'll be using a Javascript Library called "Johnny-Five" to communicate over USB(Serial) between the Arduino and your Machine.
#### Install node.js
[Download Here](http://nodejs.org/download)
Once installed, run this in your terminal:
'''
$ node -v
'''
If everything went well, you should see the version of node you have installed:
v0.10.29
####Download and install the latest Arduino software
[Download Here](http://arduino.cc/en/main/software)
####Launch the Arduino IDE, and upload the 'Standard Firmata' sketch to your board.
Go to File -> Examples -> Firmata -> Standard Firmata.
Once that sketch is loaded, click the upload button (Arrow Icon Pointing Right).
Once uploaded, close the Arduino IDE. We're done with it. The 'Standard Firmata' sketch is all we need to upload to allow any computer with node.js to communicate with it!
####In your terminal, create a folder for your sensor project and move into it
$ mkdir sparkle-labs$ cd sparkle-labs
####Use the node package manager (npm) to install the required libraries.
node.js is awesome and will only install these modules in your project directory. It's easy to keep things organized!
In your terminal, type:
$ npm install plotly$ npm install johnny-five
#### Create an account on plot.ly
Create 2 stream tokens to show your sensor data.
####Download the sparkle-labs examples into your project folder
[Download Here](http://sparklelabs.com/plotly)
Edit the file with your own user ID, API key, and stream tokens from plot.ly.
$ node sparkleplotly.js
Johnny-Five will automatically connect to your Arduino over serial, and start streaming all the data to Plotly!
