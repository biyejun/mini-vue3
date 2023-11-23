const fg = require('fast-glob');
const fs = require('fs');
const path = require('path');
const outputDir = path.resolve(__dirname, '../docs/study');

const names = [];

fg.sync('videos/*').forEach((fileName) => {
  const resultFileName = fileName.replace('videos/', '').replace('.vip', '');
  names.push(resultFileName);
  const outputFilePath = path.resolve(outputDir, resultFileName + '.md');

  const data = `# ${resultFileName} \n`;

  if (fs.existsSync(outputFilePath)) {
    console.log(resultFileName, '已存在');
    return;
  }
  fs.writeFileSync(outputFilePath, data, 'utf-8');
});

const items = [];
names.forEach((key) => {
  items.push({ text: key, link: key });
});

const itemFilePath = path.resolve(__dirname, '../temp/items.json');
if (!fs.existsSync(itemFilePath)) {
  fs.writeFileSync(itemFilePath, JSON.stringify(items, null, 2), 'utf-8');
}
