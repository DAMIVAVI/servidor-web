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
    client.subscribe("mishuvasco@gmail.com/t3");
	
  }


  function doFail(e){
    console.log(e);
	
  }


  function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
      console.log("onConnectionLost:"+responseObject.errorMessage);
    }
  }



function S1() {
	//alert("led on");
	//console.log("led on");
	message = new Paho.MQTT.Message("sensor1");
	message.destinationName = "mishuvasco@gmail.com/t2";
	client.send(message);
  
}



function S2(){	
	//alert("led off");
	//console.log("led off");
	message = new Paho.MQTT.Message("sensor2");
	message.destinationName = "mishuvasco@gmail.com/t2";
	client.send(message);

}



  // called when a message arrives
  function onMessageArrived(message) {
	  if (message.destinationName=="mishuvasco@gmail.com/t1"){
		  document.getElementById("sensor1").innerHTML=message.payloadString;
	  
	  }
	  
	  if (message.destinationName=="mishuvasco@gmail.com/t3"){
		  document.getElementById("sensor2").innerHTML=message.payloadString;
	  
	  }


  }
