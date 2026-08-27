const fs = require('fs');
const data = JSON.parse(fs.readFileSync('C:/Users/Admin/.gemini/antigravity-ide/brain/31d973e6-1109-4ede-801a-977a88261f25/.system_generated/steps/37/output.txt', 'utf8'));

const nodes = data.nodes['308:4'].document.children;
const screens = [];

nodes.forEach(node => {
  if (node.type === 'FRAME' || node.type === 'CANVAS') {
    screens.push({ name: node.name, id: node.id });
  }
});

console.log(JSON.stringify(screens, null, 2));
