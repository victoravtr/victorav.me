const fs = require('fs');

export function saveData(file, content) {
  fs.writeFileSync(file, content);
}

export function readData(file) {
  return fs.readFileSync(file, 'utf8');
}

export function getFileModificationDate(file) {
  return fs.statSync(file).mtime;
}

export function updatedAt(string) {
  const date = new Date(string);
  const days = Math.floor((new Date() - date) / (1000 * 60 * 60 * 24));
  if (days === 0) {
    return 'Updated today';
  }
  if (days <= 7) {
    return `Updated ${days} days ago`;
  }
  return `Updated on ${date.getDate()} ${date.toLocaleString('default', { month: 'short' })} ${date.getFullYear()}`;
}
