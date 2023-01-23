import remark from 'remark';
import html from 'remark-html';
import codeFrontmatter from 'remark-code-frontmatter';
import remarkHighlightjs from 'remark-highlight.js';
import plugin from './plugin';

export default async function markdownToHtml(markdown) {
  const result = await remark()
    .use(codeFrontmatter)
    .use(remarkHighlightjs)
    .use(plugin)
    .use(html, { sanitize: false })
    .process(markdown);
  return result.toString();
}
