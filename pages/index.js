import markdownToHtml from '../lib/markdownToHtml';
import { README, Card } from '../components';
import { Panel, Header } from '../containers';
import {
  getPostBySlug, getPinnedRepos, getAvatarURL, getLanguageColor,
} from '../lib/data';

export default function Home({ avatarURL, readmeContent, pinnedRepos }) {
  const title = 'home/README.md';
  return (
    <>
      <Header avatar={avatarURL} />
      <Panel title={title}>
        <README content={readmeContent} />
      </Panel>
      <Panel title="Pinned">
        {
          pinnedRepos.map((repo) => (
            <Card
              key={repo.id}
              repo={repo}
              path={`/repositories/${repo.name}`}
              width="40%"
            />
          ))
        }
      </Panel>
    </>
  );
}

export async function getStaticProps() {
  const avatarURL = await getAvatarURL();
  const post = await getPostBySlug('victoravtr', ['content']);
  const readmeContent = await markdownToHtml(post.content);
  const pinnedRepos = [];
  for (const repo of await getPinnedRepos()) {
    const languageColor = await getLanguageColor(repo.language);
    const languageData = languageColor ? { language: repo.language, color: languageColor.color } : { language: '', color: '' };
    pinnedRepos.push({
      id: repo.id,
      name: repo.name,
      description: repo.description,
      language: languageData,
      stargazers_count: repo.stargazers_count,
      html_url: repo.html_url,
    });
  }
  return {
    props: { avatarURL, readmeContent, pinnedRepos },
  };
}
