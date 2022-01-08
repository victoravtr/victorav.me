import {
  HomeIcon, BookIcon, RepoIcon, StarIcon, LawIcon,
} from '@primer/octicons-react';

export default function Icon({ icon }) {
  switch (icon) {
    case 'HomeIcon':
      return <HomeIcon height="16" fill="currentcolor" />;
    case 'BookIcon':
      return <BookIcon height="16" fill="currentcolor" />;
    case 'RepoIcon':
      return <RepoIcon height="16" fill="currentcolor" />;
    case 'StarIcon':
      return <StarIcon height="16" fill="currentcolor" />;
    case 'LawIcon':
      return <LawIcon height="16" fill="currentcolor" />;
    default:
      return null;
  }
}
