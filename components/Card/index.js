import Link from 'next/link';
import { RepoIcon, StarIcon, LawIcon } from '@primer/octicons-react';
import {
  Container, Section, Title, Text, LanguageColor, Language, Star, Topic, Topics, License,
} from './styles/Card';

export default function Card({ repo, path, width }) {
  const handleClick = (event) => {
    event.preventDefault();
  };
  return (
    <Container width={width}>
      <Section margin="4px 0 0 0">
        <RepoIcon fill="#57606a" />
        <Link legacyBehavior onClick={handleClick} href={path} passHref>
          <a href={path}>
            <Title>
              {repo.name}
            </Title>
          </a>
        </Link>
      </Section>
      <Section margin="8px 0 0 0">
        <Text>{repo.description}</Text>
      </Section>

      { repo.topics
        && (
        <Section>
          <Topics>
            {repo.topics.map((topic) => (
              <Topic key={topic}>{topic}</Topic>
            ))}
          </Topics>
        </Section>
        )}
      <Section>
        {repo.language.language !== ''
          && (
          <Language>
            <LanguageColor color={repo.language.color} />
            <Text>{repo.language.language}</Text>
          </Language>
          )}
        {repo.stargazers_count > 0
          && (
          <Star>
            <a href={repo.html_url} target="_blank" rel="noreferrer">
              <StarIcon />
            </a>
            <Text>{repo.stargazers_count}</Text>
          </Star>
          )}
        {repo.license
          && (
          <License>
            <LawIcon fill="#57606a" />
            <Text>{repo.license.name}</Text>
          </License>
          )}
        {repo.updated_at
          && <Text>{repo.updated_at}</Text>}
      </Section>

    </Container>
  );
}
