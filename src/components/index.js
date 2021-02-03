//rec = {
//	top: '25px',
//	left: '96px',
//	width: '64px',
//	height: '96px',
//      children: []
//}

// function isInside(top,left,height,width){
//     if(top>=0 && left>=0 && height+top <=0 && width+left <=0)
//         return 0;
//     else if(top<0 && left<0 && height+top > 0 && width+left > 0)
//         return 1;
//     return -1;
// }
// function updateStructure(rec1,rec2){
// 	//write your code
// 	let top=Number(rec2.top.substr(0,rec2.top.length-2))-Number(rec1.top.substr(0,rec1.top.length-2));
// 	let left=Number(rec2.left.substr(0,rec2.left.length-2))-Number(rec1.left.substr(0,rec1.left.length-2));
// 	let height=Number(rec2.height.substr(0,rec2.height.length-2))-Number(rec1.height.substr(0,rec1.height.length-2));
// 	let width=Number(rec2.width.substr(0,rec2.width.length-2))-Number(rec1.width.substr(0,rec1.width.length-2));
	
// 	if(isInside(top,left,height,width)===0){
		
// 		rec={...rec1,
// 			children:[{top:Math.abs(top)+"px",
// 			left:Math.abs(left)+"px",
// 			height:Math.abs(height)+"px",
// 			width:Math.abs(width)+"px"}]
// 		}
// 	 	return rec;
// 	}else if(isInside(top,left,height,width)===1){
// 		rec={...rec2,
// 			children:[{top:Math.abs(top)+"px",
// 			left:Math.abs(left)+"px",
// 			height:Math.abs(height)+"px",
// 			width:Math.abs(width)+"px"}]
// 		}
// 	 	return rec;
// 	}
// 	rec={...rec1};
// 	 return rec;
// }
function updateStructure(rec1,rec2){
        //write your code
//         var top1 = rec1.top, top2 = rec2.top;
//         var left1 = rec1.left, left2 = rec2.left;
//         var width1 = rec1.width, width2 = rec2.width;
//         var height1 = rec1.height, height2 = rec2.height;
	let top2=Number(rec2.top.substr(0,rec2.top.length-2)),top1=Number(rec1.top.substr(0,rec1.top.length-2));
	let left2=Number(rec2.left.substr(0,rec2.left.length-2)),left1=Number(rec1.left.substr(0,rec1.left.length-2));
	let height2=Number(rec2.height.substr(0,rec2.height.length-2)),height1=Number(rec1.height.substr(0,rec1.height.length-2));
	let width2=Number(rec2.width.substr(0,rec2.width.length-2)),width1=Number(rec1.width.substr(0,rec1.width.length-2));
//             top1 = top1.slice(0,-1); top1 = top1.slice(0,-1);
//             top1 = Number(top1);
//             top2 = top2.slice(0,-1); top2 = top2.slice(0,-1);
//             top2 = Number(top2);
//             left1 = left1.slice(0,-1); left1 = left1.slice(0,-1);
//             left1 = Number(left1);
//             left2 = left2.slice(0,-1); left2 = left2.slice(0,-1);
//             left2 = Number(left2);
//             width1 = width1.slice(0,-1); width1 = width1.slice(0,-1);
//             width1 = Number(width1);
//             width2 = width2.slice(0,-1); width2 = width2.slice(0,-1);
//             width2 = Number(width2);
//             height1 = height1.slice(0,-1); height1 = height1.slice(0,-1);
//             height1 = Number(height1);
//             height2 = height2.slice(0,-1); height2 = height2.slice(0,-1);
//             height2 = Number(height2);
// 	top1 = top1.slice(0,-2); top1 = top1.slice(0,-2);
//             top1 = Number(top1);
//             top2 = top2.slice(0,-2); top2 = top2.slice(0,-2);
//             top2 = Number(top2);
//             left1 = left1.slice(0,-2); left1 = left1.slice(0,-2);
//             left1 = Number(left1);
//             left2 = left2.slice(0,-2); left2 = left2.slice(0,-2);
//             left2 = Number(left2);
//             width1 = width1.slice(0,-2); width1 = width1.slice(0,-2);
//             width1 = Number(width1);
//             width2 = width2.slice(0,-2); width2 = width2.slice(0,-2);
//             width2 = Number(width2);
//             height1 = height1.slice(0,-2); height1 = height1.slice(0,-2);
//             height1 = Number(height1);
//             height2 = height2.slice(0,-2); height2 = height2.slice(0,-2);
//             height2 = Number(height2);
            if(top1 > top2 && left1 > left2 && (top2+height2) > (top1+height1) && (left2+width2) >(left1+width1)){
                return {
			...rec2,
                        children: [{
                        top: `${Math.abs(top1-top2)}px`,
                        left: `${Math.abs(left1-left2)}px`,
                        width: rec1.width,
                        height: rec1.height,
                        children: []
                    }]
                }
            }else if(top1 <= top2 && left1 <= left2 && (top2+height2) <= (top1+height1) && (left2+width2) <= (left1+width1)){
                return {
			...rec1,
                        children: [{
                        top: `${Math.abs(top2-top1)}px`,
                        left: `${Math.abs(left2-left1)}px`,
                        width: rec2.width,
                        height: rec2.height,
                        children: []
                    }]
                }
            }else {
                return {...rec1}
        }
}
// function isInside(rec,top,left,height,width){
// 	let rTop=Number(rec.top.substr(0,rec.top.length-2));
// 	let rLeft=Number(rec.left.substr(0,rec.left.length-2));
// 	let rHeight=Number(rec.height.substr(0,rec.height.length-2));
// 	let rWidth=Number(rec.width.substr(0,rec.width.length-2));
// // 	if(rTop>top &amp;amp;&amp;amp; rLeft>left &amp;amp;&amp;amp; rHeight>height &amp;amp;&amp;amp; rWidth>width)
// // 		return 0;
// // 	else if(rTop<=top &amp;amp;&amp;amp; rLeft<=left &amp;amp;&amp;amp; rHeight<height &amp;amp;&amp;amp; rWidth<width)
// // 		return 1;
// // 	return -1;
// 	if(top>=0 && left>=0 && height+top <=0 && width+left <=0)
// 		return 0;
//     	else if(top<0 && left<0 && height+top > 0 && width+left > 0)
// 		return 1;
//     	return -1;
// }
// function updateStructure(rec1,rec2){
// 	let top=Number(rec2.top.substr(0,rec2.top.length-2))-Number(rec1.top.substr(0,rec1.top.length-2));
// 	let left=Number(rec2.left.substr(0,rec2.left.length-2))-Number(rec1.left.substr(0,rec1.left.length-2));
// 	let height=Number(rec2.height.substr(0,rec2.height.length-2))- Number(rec1.height.substr(0,rec1.height.length-2));
// 	let width=Number(rec2.width.substr(0,rec2.width.length-2))-Number(rec1.width.substr(0,rec1.width.length-2));
	
// 	if(isInside(rec1,top,left,height,width)===0){
		
// 		rec={...rec1,
// 			children:[{top:Math.abs(top)+"px",
// 			left:Math.abs(left)+"px",
// 			height:Math.abs(height)+"px",
// 			width:Math.abs(width)+"px",
// 			children: []}]
// 		}
// 	 	return rec;
// 	}else if(isInside(rec2,top,left,height,width)===1){
// 		rec={...rec2,
// 			children:[{top:Math.abs(top)+"px",
// 			left:Math.abs(left)+"px",
// 			height:Math.abs(height)+"px",
// 			width:Math.abs(width)+"px",
// 			children: []}]
// 		}
// 	 	return rec;
// 	}
// 	rec={...rec1};
module.exports = updateStructure;
