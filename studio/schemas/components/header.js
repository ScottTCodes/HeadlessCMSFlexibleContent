import removeIcon from '../removeIcon';

export default {
  name: 'HeaderComponent',
  type: 'object',
  title: 'Header',
  showIcons: false,
  fields: [
    {
      title: 'Header Text',
      name: 'text',
      type: 'text',
      validation: Rule =>
        Rule.required()
          .min(1)
          .max(50),
    },
  ],
  preview: {
    prepare() {
      return {
        // This below string is what will appear in the 
        title: 'Header',
        media: removeIcon()
      }
    }
  }
};
