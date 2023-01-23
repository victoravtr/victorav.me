import { Card } from '../components';
import { Panel, Header } from '../containers';
import { getAccountRepos, getLanguageColor, getAvatarURL } from '../lib/data';
import { updatedAt } from '../lib/utils';

export default function Repositories({ posts, avatarURL }) {
  return (
    <>
      <Header avatar={avatarURL} />
      <Panel title="repositories/README.md">
        {
        posts.map((repo) => (
          <Card
            key={repo.id}
            repo={repo}
            path={`/repositories/${repo.name}`}
          />
        ))
      }
      </Panel>
    </>
  );
}

export async function getStaticProps() {
  const posts = [];
  const avatarURL = await getAvatarURL();
  for (const repo of await getAccountRepos()) {
    const languageColor = await getLanguageColor(repo.language);
    const languageData = languageColor ? { language: repo.language, color: languageColor.color } : { language: '', color: '' };
    posts.push({
      ...repo,
      language: languageData,
      updated_at: updatedAt(repo.pushed_at),
    });
  }
  return {
    props: { posts, avatarURL },
  };
}
