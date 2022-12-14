import { markdown, markdownLanguage } from '@codemirror/lang-markdown';
import styled from '@emotion/styled';
import { EditorView, placeholder } from '@codemirror/view';
import { EditorState } from '@codemirror/state';
import { useEffect, useRef } from 'react';
import { HighlightStyle, syntaxHighlighting } from '@codemirror/language';
import { tags } from '@lezer/highlight';
import mdHtmlConverter from '@src/utils/mdHtmlConverter';
import { editorMarkdownModel } from './EditorMarkdownModel';
import EditorBinder from '../model/EditorBinder';

const Root = styled.div`
  width: 100%;
  font-family: NotoSansKR;
  font-size: 24px;
`;

const markdownHighlighting = HighlightStyle.define([
  { tag: tags.heading1, fontSize: '40px', fontWeight: 'bold' },
  { tag: tags.heading2, fontSize: '32px', fontWeight: 'bold' },
  { tag: tags.heading3, fontSize: '28px', fontWeight: 'bold' },
  { tag: tags.heading4, fontSize: '24px', fontWeight: 'bold' },
  { tag: tags.heading5, fontSize: '24px', fontWeight: 'bold' },
  { tag: tags.heading6, fontSize: '24px', fontWeight: 'bold' },
  { tag: tags.quote, fontSize: '20px', color: 'gray' , fontWeight: 'bold' },
  { tag: tags.content, fontSize: '18px' },
]);

const editorTheme = EditorView.theme({
  '&.cm-editor.cm-focused': {
    outline: 'none',
    fontFamily: 'NotoSansKR',
  },
  '& .cm-content': {
    width: '100%',
    fontFamily: 'NotoSansKR',
  },
  '& .cm-line': {
    'wordWrap': 'break-word',
    'whiteSpace': 'pre-wrap',
    'wordBreak': 'normal',
  },
});

export type PropsType = {
  initialBody: string;
  // setViewerHtml: (html: string) => void;
  editorBinder: EditorBinder;
};

export default function Editor (props: PropsType) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    new EditorView({
      state: EditorState.create({
        doc: props.initialBody,
      }),
      extensions: [
        markdown({
          base: markdownLanguage,
        }),
        syntaxHighlighting(markdownHighlighting),
        editorTheme,
        placeholder('새로운 아이디어...'),
        EditorView.updateListener.of(async (e) => {
          if (e.docChanged) {
            props.editorBinder.reflectBody(
              e.state.doc.sliceString(0, e.state.doc.length),
            );
          }
        }),
      ],
      parent: rootRef.current!,
    });
  }, []);
  return (
    <Root
      ref={rootRef}
    >
    </Root>
  );
}
