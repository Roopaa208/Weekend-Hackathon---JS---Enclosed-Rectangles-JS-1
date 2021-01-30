//rec = {
//	top: '25px',
//	left: '96px',
//	width: '64px',
//	height: '96px',
//      children: []
//}

function updateStructure(rec1,rec2){
	//write your code
	rec2.top=Math.abs(Number(rec2.top.substr(0,rec2.top.length-2))-Number(rec1.top.substr(0,rec1.top.length-2)))+"px";
	rec2.left=Math.abs(Number(rec2.left.substr(0,rec2.left.length-2))-Number(rec1.left.substr(0,rec1.left.length-2)))+"px";
	rec2.height=Math.abs(Number(rec2.height.substr(0,rec2.height.length-2))-Number(rec1.height.substr(0,rec1.height.length-2)))+"px";
	rec2.width=Math.abs(Number(rec2.width.substr(0,rec2.width.length-2))-Number(rec1.width.substr(0,rec1.width.length-2)))+"px";
	return rec1.children.push(rec2);
}

module.exports = updateStructure;
