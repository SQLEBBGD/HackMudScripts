function(context, args) {//start:0, end:1
if (args.start === undefined || args.end === undefined) return{ok:false,msg:"parameter-error"}
var start = args.start;
var end = args.end;
var anzahl = end - start + 1;
var uebergabe = [];
for(var i = 0;i < anzahl;i++) {
uebergabe[i] = i+start;
}
#ns.sys.cull({i:uebergabe,confirm:true});
return {ok:true}
}