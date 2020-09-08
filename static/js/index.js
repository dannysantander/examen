//https://www.eclipse.org/paho/clients/js/

function estado1() {
	
	//console.log("lUZ 1");
	message = new Paho.MQTT.Message("estado1"+" "+"Encedido");
    message.destinationName = "dano.santander64@gmail.com/test1";
    client.send(message);
				document.getElementById("luz01").innerHTML="Encendida"; 
  
}
function estado2(){	
	
	//console.log("LUZ 2");
	message = new Paho.MQTT.Message("estado2"+" "+"Encendido");
    message.destinationName = "dano.santander64@gmail.com/test1";
    client.send(message);
				document.getElementById("luz02").innerHTML="Encendida"; 
}






// Create a client instance
  //client = new Paho.MQTT.Client("postman.cloudmqtt.com", 14970);
  
  client = new Paho.MQTT.Client("maqiatto.com", 8883, "web_" + parseInt(Math.random() * 100, 10));

  // set callback handlers
  client.onConnectionLost = onConnectionLost;
  client.onMessageArrived = onMessageArrived;
  var options = {
   useSSL: false,
    userName: "dano.santander64@gmail.com",
    password: "pollito123",
    onSuccess:onConnect,
    onFailure:doFail
  }

  // connect the client
  client.connect(options);
   
  // called when the client connects
  function onConnect() {
    // Once a connection has been made, make a subscription and send a message.
    console.log("Estoy Conectado...");
	
    client.subscribe("dano.santander64@gmail.com/test");
	
    message = new Paho.MQTT.Message("hola desde la web :v");
    message.destinationName = "dano.santander64@gmail.com/test1";
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
	  
    console.log("Mensaje Nuevo:"+message.payloadString);
	//sensor=val >>> ["sensor","val"]
	document.getElementById("luz01").innerHTML=message.payloadString
		document.getElementById("luz02").innerHTML=message.payloadString
	
  }
  
