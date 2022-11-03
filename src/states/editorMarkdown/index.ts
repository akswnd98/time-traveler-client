import { atom } from 'recoil';

const editorMarkdown = atom<string>({
  key: 'editorMarkdown',
  default: '',
});

export default editorMarkdown;
