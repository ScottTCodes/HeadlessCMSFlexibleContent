export default function PageTemplate({ page = {} }) {
  const { title = '' } = page;

  return (<h1>{title}</h1>);
};
