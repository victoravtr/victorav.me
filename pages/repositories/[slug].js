import { useRouter } from 'next/router';
import { Panel, Header } from '../../containers';
import { README } from '../../components';
import markdownToHtml from '../../lib/markdownToHtml';
import { getPostBySlug, getAllPosts, getAvatarURL } from '../../lib/data';

export default function Repository({ avatarURL, content }) {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <>
      <Header avatar={avatarURL} />
      <Panel title={`repositories/${slug}/README.md`}>
        <README content={content} />
      </Panel>
    </>
  );
}

export async function getStaticProps(context) {
  const avatarURL = await getAvatarURL();
  const data = await getPostBySlug(context.params.slug, ['title', 'description', 'content']);
  const content = await markdownToHtml(data.content);
  return {
    props: { content, avatarURL },
  };
}

export async function getStaticPaths() {
  const accountRepos = await getAllPosts(['slug'])
  const paths = accountRepos.map((repo) => ({
      params: { slug: repo['slug'] }
  }))
  return {
      paths,
      fallback: false
  }
}
