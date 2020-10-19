const set = require('./set.json');
const fs = require('fs');

fs.writeFile('' + set.hostname + '.' + set.typefile + '', '' + set.ipserver + ' growtopia1.com\n' + set.ipserver + ' growtopia2.com', function(error){
	if (error)
	{
		console.log(error)
	}
})


const hostfile = set.hostname + set.typefile

console.log('------------------------')
console.log('[ + | GTPS HOST MAKER | + ]')
console.log('------------------------')
console.log('[+] IP Server : ' + set.ipserver)
console.log('[+] Host Name : ' + set.hostname)
console.log('[+] Type File : ' + set.typefile)
console.log('------------------------')


