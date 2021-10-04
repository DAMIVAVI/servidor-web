function S1() {
  //alert("led on");
  console.log("led on");
  message = new Paho.MQTT.Message("ON");
  message.destinationName = "mishuvasco@gmail.com/t1";
  client.send(message);
  
}

client = new Paho.MQTT.Client("maqiatto.com", 8883, "web_" + parseInt(Math.random() * 100, 10));

  client.onConnectionLost = onConnectionLost;
  client.onMessageArrived = onMessageArrived;
  var options = {
   useSSL: false,
    userName: "mishuvasco@gmail.com",
    password: "DAMIvavi98@",
    onSuccess:onConnect,
    onFailure:doFail
  }

  
  client.connect(options);
   
 
  function onConnect() {
    console.log("Conectado...");
    client.subscribe("mishuvasco@gmail.com/t1");
    message = new Paho.MQTT.Message("hola desde la web");
    message.destinationName = "mishuvasco@gmail.com/t2"; 
    client.send(message);
	
  }


  function doFail(e){
    console.log(e);
	
  }


  function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
      console.log("onConnectionLost:"+responseObject.errorMessage);
    }
  }
  

  // called when a message arrives
  function onMessageArrived(message) {
    console.log("onMessageArrived:"+message.payloadString);
	  
            document.getElementById("sensor1").innerHTML=message.payloadString;
	  
  }
	  
	  

  
