//https://www.eclipse.org/paho/clients/js/

function S1() {
	//alert("led on");
	console.log("led on");
	//document.getElementById("sensor").innerHTML="led on";
	message = new Paho.MQTT.Message("ON");
    	message.destinationName = "mishuvasco@gmail.com/t1";
    	client.send(message);
  
}
function S2(){	
	//alert("led off");
	console.log("led on");
	message = new Paho.MQTT.Message("ON");
    	message.destinationName = "mishuvasco@gmail.com/t1";
    	client.send(message);
	//document.getElementById("sensor").innerHTML="led off";
}
function S3(){  
  //alert("led off");
  console.log("led off");
  message = new Paho.MQTT.Message("HIS");
      message.destinationName = "mishuvasco@gmail.com/t1";
      client.send(message);
  //document.getElementById("sensor").innerHTML="led off";
}






// Create a client instance
  //client = new Paho.MQTT.Client("postman.cloudmqtt.com", 14970);
  
  client = new Paho.MQTT.Client("maqiatto.com", 8883, "web_" + parseInt(Math.random() * 100, 10));

  // set callback handlers
  client.onConnectionLost = onConnectionLost;
  client.onMessageArrived = onMessageArrived;
  var options = {
   useSSL: false,
    userName: "mishuvasco@gmail.com",
    password: "DAMIvavi98@",
    onSuccess:onConnect,
    onFailure:doFail
  }

  // connect the client
  client.connect(options);
   
  // called when the client connects
  function onConnect() {
    // Once a connection has been made, make a subscription and send a message.
    console.log("Conectado...");
	
    client.subscribe("mishuvasco@gmail.com/t2");
    client.subscribe("mishuvasco@gmail.com/t3");
    message = new Paho.MQTT.Message("hola desde la web");
    message.destinationName = "mishuvasco@gmail.com/t1";
    client.send(message);
	
  }

  function doFail(e){
    console.log(e);
	
  }

  // called when the client loses its connection
  function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
      console.log("onConnectionLost:"+responseObject.errorMessage);
    }
  }

  // called when a message arrives
  function onMessageArrived(message) {
    console.log("onMessageArrived:"+message.payloadString);
    if (message.destinationName=="mishuvasco@gmail.com/t2"){
      document.getElementById("sensor1").innerHTML=message.payloadString;
  
  }
  
  if (message.destinationName=="mishuvasco@gmail.com/t3"){
      document.getElementById("sensor2").innerHTML=message.payloadString;
  
  }
}