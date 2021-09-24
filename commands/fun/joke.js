const Discord = require('discord.js')
var botprefix = ('f/')
module.exports = {
    name: "joke",
    description: "joke command",
    async run (bot, message, args) {
        //define joke 1
		function func01() {
			function function01() {
   			 	// stuff you want to happen right away
				message.channel.send("What's a dog's favourite card game?");
				console.log('Command partially run: '+botprefix+'joke line 1 with response dog card game by user '+message.author)
			}

			function function02() {
    			// all the stuff you want to happen after that pause
 				message.channel.send('**Go fetch!**');
				 console.log('Command partially run: '+botprefix+'joke line 2 with response dog card game by user '+message.author)
			}

			// call the first chunk of code right away
			function01();

			// call the rest of the code and have it execute after 3 seconds
			setTimeout(function02, 5000);
		}	

		//define joke 2
		function func02() {
			function function11() {
   				 // stuff you want to happen right away
				message.channel.send("What time does a duck wake up?");
				console.log('Command partially run: '+botprefix+'joke line 1 with response duck wake up by user '+message.author)
			}

			function function12() {
    				// all the stuff you want to happen after that pause
 				message.channel.send('**At the quack of dawn.**');
				 console.log('Command partially run: '+botprefix+'joke line 2 with response duck wake up by user '+message.author)
			}

			// call the first chunk of code right away
			function11();

			// call the rest of the code and have it execute after 3 seconds
			setTimeout(function12, 5000);
		}	
		
		//define joke 3
		function func03() {
			function function31() {
   				 // stuff you want to happen right away
				message.channel.send("What's the best thing about Switzerland?");
				console.log('Command partially run: '+botprefix+'joke line 1 with response Switzerland Flag by user '+message.author)
			}

			function function32() {
    				// all the stuff you want to happen after that pause
 				message.channel.send('**I do not know, but the flag is a big plus.**');
				 console.log('Command partially run: '+botprefix+'joke line 2 with response Switzerland Flag by user '+message.author)
			}

			// call the first chunk of code right away
			function31();

			// call the rest of the code and have it execute after 3 seconds
			setTimeout(function32, 5000);
		}	
		
		//define joke 4
		function func04() {
			function function21() {
   				 // stuff you want to happen right away
				message.channel.send("Have you heard of the mathematician who was afraid of negative numbers?");
				console.log('Command partially run: '+botprefix+'joke line 1 with response Negative mathematician by user '+message.author)
			}

			function function22() {
    				// all the stuff you want to happen after that pause
 				message.channel.send('**He will stop at nothing to avoid them.**');
				 console.log('Command partially run: '+botprefix+'joke line 2 with response negative mathematitian by user '+message.author)
			}

			// call the first chunk of code right away
			function21();

			// call the rest of the code and have it execute after 3 seconds
			setTimeout(function22, 5000);
		}	
		
		//get random joke
		function random(){
			var i  = Math.floor(Math.random()*20)%5;
		  	if(i<=0) return random();
		 	return i;
		}

		//define the execute command
		function execute1(){
		   	var i = random();
		   	eval('func0'+i+'()');
		}

		//execute it
		execute1();
    }
}