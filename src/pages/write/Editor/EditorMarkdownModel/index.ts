export default class EditorMarkdownModel {
  private markdown: string = '';

  getMarkdown () {
    return this.markdown;
  }

  setMarkdown (markdown: string) {
    this.markdown = markdown;
  }
}

export const editorMarkdownModel = new EditorMarkdownModel();
