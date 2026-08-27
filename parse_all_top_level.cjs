const fs = require('fs');
const data = JSON.parse(fs.readFileSync('C:/Users/Admin/.gemini/antigravity-ide/brain/31d973e6-1109-4ede-801a-977a88261f25/.system_generated/steps/149/output.txt', 'utf8'));

const nodes = data.nodes['0:1'].document.children;

nodes.forEach(node => {
  console.log(node.name + ' (ID: ' + node.id + ')');
  if (node.children) {
    node.children.forEach(child => {
        console.log('  - ' + child.name + ' (ID: ' + child.id + ')');
    });
  }
});
