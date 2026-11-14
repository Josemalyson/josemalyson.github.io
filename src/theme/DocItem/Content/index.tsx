import React, {type ReactNode} from 'react';
import Content from '@theme-original/DocItem/Content';
import type {Props} from '@theme/DocItem/Content';
import ArticleByline from '@site/src/components/ArticleByline';

export default function DocItemContentWrapper(props: Props): ReactNode {
  return (
    <>
      <ArticleByline />
      <Content {...props} />
    </>
  );
}
