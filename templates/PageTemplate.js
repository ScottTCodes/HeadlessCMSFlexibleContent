import components from '../components';

export default function PageTemplate({ page = { components: [] } }) {
  return (
    <>
      {page.components.map((item, index) => {
        const FlexibleComponent = components[item._type];

        return <FlexibleComponent {...item} key={index} />;
      })}
    </>
  );
};
