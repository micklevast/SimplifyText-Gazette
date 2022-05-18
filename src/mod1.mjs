const a="vishal";
const b="pawan";
const c="laxmi";

let arr=[a,b,c];
export default arr;  //default export

export {a};   //named export
export {b};     //this should be export and use as it  by it's name only otherwise it will show an error
export {c};