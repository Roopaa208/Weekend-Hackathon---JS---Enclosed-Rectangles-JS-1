const { Children } = require("react");
function isInside(a, b) {
	let ans = {};
	let child = {};
	let t1 = a.top ? parseInt(a.top) : 0;
	let b1 = a.bottom ? parseInt(a.bottom) : 0;
	let l1 = a.left ? parseInt(a.left) : 0;
	let r1 = a.right ? parseInt(a.right) : 0;
	let h1 = a.height ? parseInt(a.height) : 0;
	let w1 = a.width ? parseInt(a.width) : 0;

	let t2 = b.top ? parseInt(b.top) : 0;
	let b2 = b.bottom ? parseInt(b.bottom) : 0;
	let l2 = b.left ? parseInt(b.left) : 0;
	let r2 = b.right ? parseInt(b.right) : 0;
	let h2 = b.height ? parseInt(b.height) : 0;
	let w2 = b.width ? parseInt(b.width) : 0;

	if (t2 >= t1 && l2 >= l1 && r2 >= r1 && b2 >= b1) 
	{
	   if ((a.height && 
		(t1 + h1 >= t2 + h2 && b1 + h1 >= b2 + h2) &&
		(l1 + w1 >= l2 + w2 && r1 + w1 >= r2 + w2) )||
		(!a.height)) 
	   	{
			if (a.top) {
				child.top = `${t2 - t1}px`;
			}
			if (a.left) {
				child.left = `${l2 - l1}px`;
			}
			if (a.bottom) {
				child.bottom = `${b2 - b1}px`;
			}
			if (a.right) {
				child.right = `${r2 - r1}px`;
			}
			if (a.height) {
				child.height = `${h2}px`;
				child.width = `${w2}px`;
			}
			return ans = { ...a, children: [{ ...child, children: [] }] };
		}

	}
	return -1;
}
function updateStructure(rec1, rec2) {
	let res = isInside(rec1, rec2);
	if (res !== -1) {
		return res;
	}
	res = isInside(rec2, rec1);
	if (res !== -1) {
		return res;
	}
	return rec1;
}

module.exports = updateStructure;


//rec = {
//	top: '25px',
//	left: '96px',
//	width: '64px',
//	height: '96px',
//      children: []
//}
//caller
// function updateStructure(rec1,rec2){
// 	return updateStructure1(rec1,rec2);
// // 	return updateStructure2(rec1,rec2);
// }

// //************************IMPLEMENTTION********************************
// function hasProperty(rec){
// 	return {
// 	top: (!rec.hasOwnProperty("top")?"0px":rec.top),
// 	left: (!rec.hasOwnProperty("left")?"0px":rec.left),
// 	height: (!rec.hasOwnProperty("height")?"0px":rec.height),
// 	width: (!rec.hasOwnProperty("width")?"0px":rec.width),
// 	children: (!rec.hasOwnProperty("children")?"[]":rec.children),
// 	}
// }

// function updateStructure1(rec1,rec2){
//         //write your code
// 	let re1=hasProperty(rec1);
// 	let re2=hasProperty(rec2);
// // 	let top2=Number(rec2.top.substr(0,rec2.top.length-2)),top1=Number(rec1.top.substr(0,rec1.top.length-2));
// // 	let left2=Number(rec2.left.substr(0,rec2.left.length-2)),left1=Number(rec1.left.substr(0,rec1.left.length-2));
// // 	let height2=Number(rec2.height.substr(0,rec2.height.length-2)),height1=Number(rec1.height.substr(0,rec1.height.length-2));
// // 	let width2=Number(rec2.width.substr(0,rec2.width.length-2)),width1=Number(rec1.width.substr(0,rec1.width.length-2));
// 	let top2=Number(re2.top.substr(0,re2.top.length-2)),top1=Number(re1.top.substr(0,re1.top.length-2));
// 	let left2=Number(re2.left.substr(0,re2.left.length-2)),left1=Number(re1.left.substr(0,re1.left.length-2));
// 	let height2=Number(re2.height.substr(0,re2.height.length-2)),height1=Number(re1.height.substr(0,re1.height.length-2));
// 	let width2=Number(re2.width.substr(0,re2.width.length-2)),width1=Number(re1.width.substr(0,re1.width.length-2));
//             if(top1 > top2 && left1 > left2 && (top2+height2) > (top1+height1) && (left2+width2) >(left1+width1)){
//                 return {
// 			...re2,
//                         children: [{
//                         top: `${Math.abs(top1-top2)}px`,
//                         left: `${Math.abs(left1-left2)}px`,
//                         width: re1.width,
//                         height: re1.height,
//                         children: []
//                     }]
//                 }
//             }else if(top1 <= top2 && left1 <= left2 && (top2+height2) <= (top1+height1) && (left2+width2) <= (left1+width1)){
//                 return {
// 			...re1,
//                         children: [{
//                         top: `${Math.abs(top2-top1)}px`,
//                         left: `${Math.abs(left2-left1)}px`,
//                         width: re2.width,
//                         height: re2.height,
//                         children: []
//                     }]
//                 }
//             }else {
//                 return {...rec1}
//         }

// }
// //************************* 2******************************
// function updateStructure2(rec1,rec2){
//         //write your code
// 	let re1=hasProperty(rec1);
// 	let re2=hasProperty(rec2);
// // 	let top2=Number(rec2.top.substr(0,rec2.top.length-2)),top1=Number(rec1.top.substr(0,rec1.top.length-2));
// // 	let left2=Number(rec2.left.substr(0,rec2.left.length-2)),left1=Number(rec1.left.substr(0,rec1.left.length-2));
// // 	let height2=Number(rec2.height.substr(0,rec2.height.length-2)),height1=Number(rec1.height.substr(0,rec1.height.length-2));
// // 	let width2=Number(rec2.width.substr(0,rec2.width.length-2)),width1=Number(rec1.width.substr(0,rec1.width.length-2));
// 	let top2=Number(re2.top.substr(0,re2.top.length-2)),top1=Number(re1.top.substr(0,re1.top.length-2));
// 	let left2=Number(re2.left.substr(0,re2.left.length-2)),left1=Number(re1.left.substr(0,re1.left.length-2));
// 	let height2=Number(re2.height.substr(0,re2.height.length-2)),height1=Number(re1.height.substr(0,re1.height.length-2));
// 	let width2=Number(re2.width.substr(0,re2.width.length-2)),width1=Number(re1.width.substr(0,re1.width.length-2));
// 	if (top2 > top1 && top1 + height1 > top2 + height2 && left2 > left1 && left1 + width1 > left2 + width2) {
// 		//rec 1 k andar rec 2
// 		return {
// 			...re1,
//                         children: [{
//                         top: `${Math.abs(top2-top1)}px`,
//                         left: `${Math.abs(left2-left1)}px`,
//                         width: rec2.width,
//                         height: rec2.height,
//                         children: []
//                     }]
//                 }
// 	}
// 	else if (top2 == top1 && top1 + height1 == top2 + height2 && left2 == left1 && left1 + width1 == left2 + width2) {
// 		//rec 1 and rec 2 overlap
// 		return {
// 			...re1,
//                         children: [{
//                         top: `${Math.abs(top2-top1)}px`,
//                         left: `${Math.abs(left2-left1)}px`,
//                         width: rec2.width,
//                         height: rec2.height,
//                         children: []
//                     }]
//                 }
// 	}
// 	else if (top1 > top2 && top2 + height2 > top1 + height1 &&	left1 > left2 && left2 + width2 > left1 + width1) {
// 		//rec 2 k andar rec 1
// 		return {
// 			...re2,
//                         children: [{
//                         top: `${Math.abs(top1-top2)}px`,
//                         left: `${Math.abs(left1-left2)}px`,
//                         width: rec1.width,
//                         height: rec1.height,
//                         children: []
//                     }]
//                 }
// 	}
// 	else {
// 		return {...rec1};
// 	}
// }

// module.exports = updateStructure;
