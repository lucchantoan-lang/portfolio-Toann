const fs = require('fs');
const data = JSON.parse(fs.readFileSync('C:/Users/Admin/.gemini/antigravity-ide/brain/31d973e6-1109-4ede-801a-977a88261f25/.system_generated/steps/37/output.txt', 'utf8'));

const nodes = data.nodes['308:4'].document.children;
const screenNames = [];

nodes.forEach(node => {
  if (node.type === 'FRAME' || node.type === 'CANVAS' || node.type === 'SECTION') {
    screenNames.push(node.name);
    if (node.children) {
        node.children.forEach(child => {
            if (child.type === 'FRAME' || child.type === 'SECTION') {
                 screenNames.push("  - " + child.name);
            }
        });
    }
  }
});

console.log(screenNames.join('\n'));
