var os= require('os');

var message = 'Informaci�n sobre tu sistema:';

var sysArray = new Array('Type: '+ os.type(),
												 'Node Version: '+process.version,
												 'Platform: ' + os.platform(),
												 'Hostname: ' + os.hostname(),
												 'Total Memory: ' + os.totalmem(),
												 'Free Memory: ' + os.freemem(),
												 'Uptime: ' + os.uptime()
												 );
console.log(message);

var arraylen = sysArray.length;

i=0;

while(i< arraylen){
	console.log(sysArray[i]);
	i++;
}