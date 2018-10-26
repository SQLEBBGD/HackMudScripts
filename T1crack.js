function(context, args) //s:#s.loc.here
{
	var loc = args.s;
	
	var r = "";	//Reply
	var l = ""; //current Locket
	var p = {}; 
	//var debug = {};
	
	var ez = ["open", "release", "unlock"];
	var col = [["red","green","cyan","lime"], ["purple","lime","green","yellow"], ["blue","yellow","lime","orange"], ["cyan","orange","yellow","red"], ["green","red","orange","purple"], ["lime","purple","red","blue"], ["yellow","blue","purple","cyan"], ["orange","cyan","blue","green"]];
	var prime = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
	var key = ["vc2c7q","tvfkyq","xwz7ja","6hh8xw","cmppiq","sa23uw","uphlaw","72umy0"];
	var dc = [["mmo","fran_lee"],["dim","robovac"], ["dir","sentience"], ["ssu","sans_comedy"], ["ie'","angels"], ["ory'","minions"], ["d ch","sisters"], ["wil","petra"], ["he'","fountain"], ["ui","helpdesk"], ["gu","bunnybat"], ["ty d","get_level"], ["atm","weathernet"], ["onit","eve"], ["emp","resource"], ["st a","bo"], ["3_","heard"], ["a s","teach"], ["gc","outta_juice"], ["sha","poetry"], ["ani","blazer"], ["mme","dead"], ["tent","engaged"], ["chi","a2231"], ["aic","obsessive"], ["dir","atlanta"], ["iom","skimmerite"], ["ssi","goodfellow"], ["6","piano"], ["nde","idp1p1"], ["w2","well"], ["tow","nubloopstone"], ["nam","sheriff"], ["cen","nowhere"], ["dd","executives"], ["kf","crowsnest"], ["rev","thirteen"], ["ai","diagalpha"], ["gr","bnnyhunter"], ["s:","unvarnishedpygmyumbrella"]]; // DATA_CHECK
	
	function call() {
		r=loc.call(p);
	}
	function ret(){
		return{r:r,p:p}
	}
    if (!loc)
    {	//Params Passed?
		r="!args";
		ret();
    }
	call();
	if(typeof r == "object"){
		ret();
	}
	if(r.includes("l.h")){ //Hardline error?
		ret();
	}
	
	
	
	var Locks = [["EZ","correct","open","unlock","release"],["c00","missing",["red","green","cyan","lime"], ["purple","lime","green","yellow"], ["blue","yellow","lime","orange"], ["cyan","orange","yellow","red"], ["green","red","orange","purple"], ["lime","purple","red","blue"], ["yellow","blue","purple","cyan"], ["orange","cyan","blue","green"]],["l0","k3y", "vc2c7q","tvfkyq","xwz7ja","6hh8xw","cmppiq","sa23uw","uphlaw","72umy0"],["DATA"]];
	
	
	for (;!r.includes("nn");){ //"Der einzige string der "nn" beinhaltet kommt bei Erfolg - Also knacken bis erfolg!
		 l = /.*`N(.*?)`.*$/.exec(r);
		 if(!l){
			 ret();
		 }
		 l = l[1];
		 var i = -1;
		 
		 do{
			 i++;
		 } while (!l.includes(Locks[i][0]) && i < 4)
			 
		switch(expression) {
		case 0: // EZ_XX
			
			break;
		case 1: // C00x
			
			break;
		case 2: // l0cket
			
			break;
		case 3: // DATA_CHECK
		
			break;
        
		}
	}
	
	
	
	for (;!r.includes("nn");){ //"Der einzige string der "nn" beinhaltet kommt bei Erfolg - Also knacken bis erfolg!
		 l = /.*`N(.*?)`.*$/.exec(r);
		 if(!l){
			 ret();
		 }
		 l = l[1];
		 var i = -1;
		 if(l.includes("EZ")){
			do { 
				i++;
				p[l]=ez[i];
				call();
			} while(r.includes("correct") && i < ez.length); // Solange unlock command NICHT stimmt
			var j = -1;
			if(l.includes("35")){ //EZ_35 - Benötigt digit
				do { 
					j++;
					p["digit"]=j;
					call();
				} while(r.includes("correct") && j < 10); // Solange unlock command NICHT stimmt
			}
			else if (l.includes("40")){ // EZ_40 - Benötigt ez_prime
				do { 
					j++;
					p["ez_prime"]=prime[j];
					call();
					//return{afterWhile:r, lock:l, parameters:p, pLen:prime.length, prime:prime[1]}
				} while(r.includes("correct") && j < 24); // Solange unlock command NICHT stimmt && j < prime.length
			}
		 }
		 else if(l.includes("c00")){
			var  c = -1;
			for(;!r.includes("missing") && c < col.length;){
				c++;
				p[l]=col[c][0];
				call();
			}
			if(l.includes("1")){ //c001
				p["color_digit"]=col[c][0].length; //Color digit = Länge der Farbe(Zeichen)
			}
			
			else if(l.includes("2")){ //c002
				p["c002_complement"]=col[c][1];
			}
			
			else if(l.includes("3")){ //c003
				p["c003_triad_1"]=col[c][2];
				p["c003_triad_2"]=col[c][3];
			}
			call();
		 }
		 else if(l.includes("l0")){ //l0cket
			var k = -1
			do{
				k++;
				p[l]=key[k];
				call();
			} while (r.includes("k3y") && k < key.length);
			
		 }
		 else if(l.includes("DATA")){
			p["DATA_CHECK"] = "";
			call();
			var rows = r.split("\n");
			var dca = "";
			for(var row = 0;row<3;row++){
				var b = -1;
				do {
					b++;	
					if (rows[row].includes(dc[b][0])) dca += dc[b][1];
				} while(!rows[row].includes(dc[b][0]) && b < 39);
			}
			p["DATA_CHECK"] = dca;
		 }
		 call();
	}
	ret();
}


