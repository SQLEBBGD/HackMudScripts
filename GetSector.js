function(context, args) //sector:"", security:"fs"
{
    var targetSector = args.sector;
	var secLevel = args.security;
    if (!targetSector)
    {						//Params Passed?
		return {ok:false,msg:"No arguments passed"};
    }

    var message = "";	
	#2s.chats.join({channel:targetSector})
	if(secLevel == "ns"){
		message = #4s.scripts.nullsec({sector: targetSector});
	}
	else if (secLevel == "ls"){
		message = #4s.scripts.lowsec({sector: targetSector});
	}
	else if (secLevel == "ms"){
		message = #4s.scripts.midsec({sector: targetSector});
	}
	else if (secLevel == "hs"){
		message = #4s.scripts.highsec({sector: targetSector});
	}
	else {
		message = #4s.scripts.fullsec({sector: targetSector});
	}
	#2s.chats.leave({channel:targetSector})
	
	return {ok:true, msg:message}
}