import { Component } from 'react';

import Layout, { siteTitle } from '../../components/layout';
import Tabs from '../../components/Tabs';
import Videos from '../../components/Video';
import Imgs from '../../components/Imgs';

class CST338 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "CST 311",
			classDesc: "This course is described as a “Survey” course on inter-networking protocol, security, and industry trends.  As more devices are connected to the IoT, networking is becoming even more important. Many IoT devices are less than secure due to a lack of knowledge on the subject. Large “botnets” have been maliciously created by taking advantage of this, so any students interested in the IoT should pay special attention here. This course would also be useful for those interested in cybersecurity.",
			imgDir: "/images/311images/"
		}
	}
	render() {
		let desc = this.state.classDesc;
		let imgDir = this.state.imgDir;
		let assignments = [
			{
				title:"Chat Server",
				code:`### server.py ###
from socket import *
import queue
import sys
from threading import Thread

messages = queue.Queue(0) #infinite queue
names = queue.Queue(2) #names for the clients
#add 2 client names
names.put('x');
names.put('y');
send = list() #messages to send
threads = list() #make list of threads
clients = list() #make list of clients
# Create a TCP socket
# Notice the use of SOCK_STREAM for TCP packets
serverPort = 12000
serverSocket = socket(AF_INET,SOCK_STREAM)
# Assign IP address and port number to socket
serverSocket.bind(('',serverPort))

def die():
    #close all of the connections
    for client in clients:
        print("close", client.name)
        client.close()
    clients.clear()
    sys.exit()


class Client:
    def __init__(self, name, sock):
        self.name = name
        self.message = ""
        self.sock = sock

    def equals(self, other):
        return self.name == other.name

    def setMessage(self, mess):
        self.message = mess

    def getMessage(self):
        try:
            mess = self.sock.recv(1024).decode()
        except:
            die()

        mess = self.name + ": " + mess
        print(mess)
        #store message for no reason
        self.setMessage(mess)
        #send message
        for client in clients:
            #if the client is not self
            if not self.equals(client):
                t = Thread(target=client.sendMessage, args=(mess,))
                t.daemon = True
                t.start()
                threads.append(t)

        if 'BYE' in mess.upper():
            die()
        else: 
            #otherwise recursive
            self.getMessage();

    def sendMessage(self, message):
        self.sock.send(message.encode())

    def close(self):
        self.sock.close()


#start connections with the clients and make initial threads
def Main():
    serverSocket.listen(1)
    print ('The server is ready to receive')
    #get connections
    while len(clients) < 2:
        connectionSocket, addr = serverSocket.accept()
        mess = connectionSocket.recv(1024).decode()
        temp = Client(mess,connectionSocket)
        clients.append(temp)

    #receive messages
    for client in clients:
        t = Thread(target=client.getMessage)
        t.daemon = True
        t.start()
        threads.append(t)

    #keep program open while threads are running
    for thread in threads:
        thread.join()

    #end of program cleanup
    for client in clients:
        client.close()

if __name__ == '__main__':
    Main()



### client.py ###
# Note that the server must be present and running at 10.0.0.1.  To run on localhost,
# make the appropriate change to serverName. This was tested in mininet as:
# sudo mn --nat --topo single,3
# This was also tested under localHost conditions to ensure communication.

#Initiate socket creation protocol
import threading
from socket import *
serverName = '10.0.0.1'
serverPort = 12000
clientSocket = socket(AF_INET, SOCK_STREAM)
clientSocket.connect((serverName, serverPort))

username = input('Input your username: ')
clientSocket.sendto(username.encode(), (serverName, serverPort))


def die():
    #close all of the connections
    for client in clients:
        print("close", client.name)
        client.close()
    clients.clear()
    sys.exit()

#Thread 1 
def send():
	print ('Hi, ' + username +', ready to chat!')
	print ('Type BYE and press enter to exit!')
	print ('Type a message and press enter to send!')
	print ()
	while True:
	#Message from user input, encode and send to server
		message = input(username + ':')
		print()
		#print (username + ': ' + message) -may delete later
		try:
			clientSocket.sendto(message.encode(), (serverName, serverPort))
		except:
			die()
		if message.upper() == 'BYE': 
                        #Closes client if BYE sent
			clientSocket.close()
			print ('You have been signed out because you said BYE')
			break

#Thread 2		
def recieve():
	while True:
		try:
			modifiedMessage, serverAddress = clientSocket.recvfrom(2048)
		except:
			die()
		print()
		print(modifiedMessage.decode())
                #Loads string from decoded message to see if it's BYE
		logOutTest = modifiedMessage.decode()
		if 'BYE' in logOutTest.upper(): 
			#Closes client if BYE received
			print ('You have been signed out because the other user said BYE')
			clientSocket.close()
			break


def main():
	sendThread = threading.Thread(target=send)
	recieveThread = threading.Thread(target=recieve)
	sendThread.start()
	recieveThread.start()

if __name__ == '__main__':
    main()`,
				img1:"chatServer.png",
				desc:"For this project I wrote the server side code. This assignment was my first time really working with threads which was a little strange at first, but it ended up not being that hard. The main issue when working with threads was getting the threads to talk to each other."
			},
			{
				title:"UDP Pinger",
				code:`### client.py ###

# The client sends a "ping" message package to the UDP server. Then UDP client waits for a second
# before retransmissions/sends another "ping" message package to the UDP server and it blocks the
# income "ping" message package. If it the UDP client has to wait longer than 1 second to
# retransmissions/resends another package, then this would result in loss of packages because the
# packages that were sent did not get sent back. This program calculates and prints the minimum,
# maximum, and average RTTs at the end of all pings from the client, the number of packets lost
# and the packet loss rate (in percentage).  It also computes and prints the estimated RTT,
# DevRTT, and the TimeoutInterval based on the RTT results.

from __future__ import division #uses division format
from socket import *  # import socket interfaces
from time import  time
from statistics import mean
from datetime import datetime
serverName = 'localhost'  # server ip for computers
serverPort = 12000 # server port number
clientSocket = socket(AF_INET, SOCK_DGRAM)
clientSocket.settimeout(1) #sets time out for 1 second and blocks the incoming data package
                            # for checking connection and package loss
sequence_number = 1
TimeoutInterval = 0
DevRTT = 0
EstimatedRTT = 0
lostPackages = 0
minRTT = -1
maxRTT = -1
total = 0
address = serverName

# You should get the client to wait up to one second for a reply; if no reply
# is received within one second, your client
# program should assume that the packet was lost during transmission across the
# network https://docs.python.org/3/library/socket.html

while sequence_number < 11:
    start_time = datetime.now().microsecond/1000
    message = "Ping " + str(sequence_number) + " " + str(datetime.now())
    # the client sends the message to the server, the client sends the ping message to the server
    clientSocket.sendto(message.encode(), (serverName, serverPort))

    try:
        message, address = clientSocket.recvfrom(1024) # message and address is received from the server, the client gets ping back
        print("Server reply: ", str(message))
        end_time = datetime.now().microsecond/1000  #end time
        SampleRTT = end_time-start_time #round trip time for the UPD client to send "ping" and get the "ping" message back
        print("Server responded: Round trip time (RTT) =", SampleRTT)
        if minRTT == -1:
            minRTT = SampleRTT
        if maxRTT == -1:
            maxRTT = SampleRTT
        if SampleRTT < minRTT:
            minRtt = SampleRTT
        if SampleRTT > maxRTT:
            maxRTT = SampleRTT
        total += SampleRTT

        #(Then compute and print what should be the timeout period based on the RTT results.)
        #(10 %) Calculate and print the estimated RTT. Consider alpha = 0.125.
        #Formula: EstimatedRTT = (1- 0.125)*EstimatedRTT + 0.125*SampleRTT

        EstimatedRTT = 0.875*EstimatedRTT + 0.125*SampleRTT
        print("EstimatedRTT =", EstimatedRTT)

        #( (10 %) Calculate and print DevRTT. Consider beta = 0.25. Calculate and print Timeout interval.

        #estimate SampleRTT deviation from EstimatedRTT Formula: DevRTT = (1-0.25)*DevRTT +  0.25*|SampleRTT-EstimatedRTT|
        #if DecRTT is a small value then RTT is constant if not then RTT is inconstant.
        DevRTT = 0.75*DevRTT + 0.25*abs(SampleRTT-EstimatedRTT)

        print("DevRTT =", DevRTT)

        TimeoutInterval = EstimatedRTT + 4*DevRTT
        print("TimeoutInterval  =", TimeoutInterval)

    except: #catches the exception errors so the program doesn't crush of the client socket.settimeout(1), if there's connection problems, and the timeout is longer than 1 second then it results in losing packages and udp waits for retransmission
        print( "Request timed out")
        lostPackages +=1

        #package lost percentages =( packets lost)/(# packet sent).
    finally:
        if sequence_number == 11 :
            clientSocket.close()  #closes connection
            percentage = "{0:.0f}%".format((lostPackages/sequence_number)*100)
    percentage = "{0:.0f}%".format((lostPackages/sequence_number)*100)
    print("Ping statistics for", address)
    print("Packets: Sent =", sequence_number, "Received =", sequence_number - lostPackages, "Lost = ", lostPackages, "(", percentage, "loss),")
    sequence_number +=1

sequence_number -= 1 #fix off by one in avg calculation
#( Your client software will need to determine and print out the minimum, maximum, and average RTTs at the end of all pings from the client along with printing out the number of packets lost and the packet loss rate (in percentage).  Then compute and print what should be the timeout period based on the RTT results. )
recieved = sequence_number - lostPackages
avgRTT = total/recieved
print("Approximate round trip times in milli-seconds:")
print ("Minimum =", '{0:.2f}'.format(minRTT),"ms, Maximum =",'{0:.2f}'.format(maxRTT),"ms Average =", '{0:.2f}'.format(avgRTT),"ms")




# UDPPingerServer.py
# We will need the following module to generate randomized lost packets
import random
from socket import *
# Create a UDP socket
# Notice the use of SOCK_DGRAM for UDP packets
serverSocket = socket(AF_INET, SOCK_DGRAM)
# Assign IP address and port number to socket
serverSocket.bind(('', 12000))
while True:
    # Generate random number in the range of 0 to 10
    rand = random.randint(0, 10)
    print ("random number is ", rand)
    # Receive the client packet along with the address it is coming from
    message, address = serverSocket.recvfrom(1024)
    # Capitalize the message from the client
    message = message.upper()
    # If rand is less is than 4, we consider the packet lost and do not respond
    if rand < 4:
        print ("Packet is lost ")
        continue
    # Otherwise, the server responds
    serverSocket.sendto(message, address)`,
				img1:"udpPinger.png",
				desc:"In this project I was the team leader which means I was in charge of coordinating who does which part of the assignment and write up the documentation. This is a client that sends a ping message to a UDP server which simulates dropped packages. It then calculates Sample RTT, Estimated RTT, the Timeout Interval, and uses that to calculate the minimum, max and average round trip time."
			},
		];

		return (
			<Layout location={this.state.title}>
				<div className="fullScroll">
					{/*<h1 className="text-center">{name}</h1>*/}
					<p className="desc">{desc}</p>
					{/* requires 2 items in */}
					<Imgs imgs={assignments} imgDir={this.state.imgDir} lang={"python"} />
				</div>
			</Layout>
											);
	}
}

export default CST338;
