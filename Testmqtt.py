import paho.mqtt.client as mqtt
import time
import random
def conectado(client, userdata, flags, rc):
    print("Connected with result code "+str(rc))

    client.subscribe("mishuvasco@gmail.com/t1")

def nuevoMensaje(topic, msg):
    print(msg)
    if msg.decode()=='ON':
        valor1= not boton1.value()
        valor2= not boton2.value()
        client.publish('mishuvasco@gmail.com/t1',str(valor1)+';'+str(valor2))


     
client= mqtt.Client()  
client.username_pw_set('mishuvasco@gmail.com', password='DAMIvavi98@')
client.on_connect = conectado
client.on_message = nuevoMensaje

client.connect("maqiatto.com", 1883, 60)
