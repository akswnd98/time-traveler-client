const no = '120px';
const writer = '120px';
const writeDate = '120px';
const views = '120px';
const recommand = '120px';
const title = `calc(100% - ${no} - ${writer} - ${writeDate} - ${views} - ${recommand})`;

const columnWidth = {
  no, title, writer, writeDate, views, recommand,
};

export default columnWidth;
