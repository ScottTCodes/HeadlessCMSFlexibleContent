import components from '../components';

export default {
  name: "page",
  type: "document",
  title: "Page",
  fieldsets: [
    {
      title: "SEO & metadata",
      name: "metadata",
    },
  ],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Page Title',
      description: 'Enter a title for the page'
    },
    {
      name: 'components',
      title: 'Components',
      type: 'array',
      description: 'Choose which components this page will display',
      showIcons: false,
      of: components,
      options: {
        collapsible: true,
        collapsed: false,
      }
    },
    {
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published at',
      description: 'Set a particular time for this page to go live. Leave blank for it to go live on save/publish.'
    },
    {
      name: "description",
      type: "text",
      title: "Description",
      description: "This description populates meta-tags on the webpage",
      fieldset: "metadata",
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title = 'No title' }) {
      return {
        title,
      }
    }
  }
};
