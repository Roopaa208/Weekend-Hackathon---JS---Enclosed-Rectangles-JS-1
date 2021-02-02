//rec = {
//	top: '25px',
//	left: '96px',
//	width: '64px',
//	height: '96px',
//      children: []
//}

function isInside(rec,top,left,height,width){
	let rTop=Number(rec.top.substr(0,rec.top.length-2));
	let rLeft=Number(rec.left.substr(0,rec.left.length-2));
	let rHeight=Number(rec.height.substr(0,rec.height.length-2));
	let rWidth=Number(rec.width.substr(0,rec.width.length-2));
	if(rTop>top && rLeft>left && rHeight>height && rWidth>width)
		return 0;
	else if(rTop<=top && rLeft<=left && rHeight<height && rWidth<width)
		return 1;
	return -1;
}
function updateStructure(rec1,rec2){
	//write your code
	let top=Number(rec2.top.substr(0,rec2.top.length-2))-Number(rec1.top.substr(0,rec1.top.length-2));
	let left=Number(rec2.left.substr(0,rec2.left.length-2))-Number(rec1.left.substr(0,rec1.left.length-2));
	let height=Number(rec2.height.substr(0,rec2.height.length-2))-Number(rec1.height.substr(0,rec1.height.length-2));
	let width=Number(rec2.width.substr(0,rec2.width.length-2))-Number(rec1.width.substr(0,rec1.width.length-2));
	
	if(isInside(rec1,top,left,height,width)===0){
		
		rec={...rec1,
			children:[{top:Math.abs(top)+"px",
			left:Math.abs(left)+"px",
			height:Math.abs(height)+"px",
			width:Math.abs(width)+"px"}]
		}
	 	return rec;
	}else if(isInside(rec2,top,left,height,width)===1){
		rec={...rec2,
			children:[{top:Math.abs(top)+"px",
			left:Math.abs(left)+"px",
			height:Math.abs(height)+"px",
			width:Math.abs(width)+"px"}]
		}
	 	return rec;
	}
	rec={...rec1};
	 return rec;
}

module.exports = updateStructure;
