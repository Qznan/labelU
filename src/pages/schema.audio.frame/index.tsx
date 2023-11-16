import MarkdownWithHighlight from '@/components/markdown-with-highlight';

import Markdown from './example.mdx';

export default function Page() {
  return (
    <MarkdownWithHighlight>
      <Markdown />
    </MarkdownWithHighlight>
  );
}
