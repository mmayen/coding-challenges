// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]
const Node = require('./node');

function levelWidth(root) {
    const widthArr = [0];
    const holdingArr = [root, 's'];

    while(holdingArr.length > 1) {
        let currNode = holdingArr.shift();

        if(currNode === 's') {
            widthArr.push(0);
            holdingArr.push('s');
        } else {
            widthArr[widthArr.length - 1]++;
            holdingArr.push(...currNode.children);
        }   
    }
    return widthArr;
}

module.exports = levelWidth;
