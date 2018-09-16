module.exports = function check (str, bracketsConfig) {

function remove_couples(str,bracketsConfig)
{
	var flag=false;
  for (var key in bracketsConfig) {
  	var couple=bracketsConfig[key][0]+bracketsConfig[key][1];
  	var pos=str.indexOf(couple,0);
  	if(pos>=0)
  	{
  		flag=true;
  		str=str.substring(0,pos)+str.substring(pos+2);
  	}
  }
  return [str,flag];
}
var flag=true;
while (str.length*flag>0) {
	var arr=remove_couples(str,bracketsConfig);
	str=arr[0];
	flag=arr[1];
   }
if(str.length==0)
	return true;
return false;
}
