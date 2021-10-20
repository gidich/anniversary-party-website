import LinkTo from '@storybook/addon-links/react';

export default {
  title: 'Link',
};

export const first = () => (
  <LinkTo
    kind="Example/Leaf"
    story="Default View"
    target="_blank"
    title="link to second story"
    style={{ color: '#1474f3' }}
  >
    Go to Second
  </LinkTo>
);
