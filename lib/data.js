import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { readData } from './utils';

const postsDirectory = join(process.cwd(), '/lib/docs');
const filePath = join(process.cwd(), '/lib/data/repos.json');

export async function getPostsFolders() {
  return fs.readdirSync(postsDirectory);
}

export async function getPostBySlug(slug, fields = []) {
  const fullPath = join(postsDirectory, `/${slug}/index.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const items = {};
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = slug;
    }
    if (field === 'content') {
      items[field] = content;
    }

    if (data[field]) {
      items[field] = data[field];
    }
  });
  return items;
}

export async function getAllPosts(fields = []) {
  const folders = await getPostsFolders();
  const posts = folders.map(async (folder) => getPostBySlug(folder, fields));
  const allPostsData = await Promise.all(posts);
  return allPostsData;
}

export async function getAccountRepos() {
  const data = readData(filePath);
  return JSON.parse(data);
}

export async function getPinnedRepos() {
  const data = readData(join(process.cwd(), '/lib/data/pinned.json'));
  return JSON.parse(data);
}

export async function getAvatarURL() {
  const baseURL = 'https://avatars.githubusercontent.com/u/';
  const userID = '61812413';
  return `${baseURL}${userID}`;
}

export async function getLanguageColor(language) {
  const data = readData(join(process.cwd(), '/lib/colors.json'));
  return JSON.parse(data)[language];
}
