import { MDLocalPizza as icon } from 'react-icons/md';

export default {
  name: 'pie',
  title: 'Pies',
  type: 'document',
  icon: () => '🍕',
  fields: [
    {
      name: 'name',
      title: 'Pizza Name',
      type: 'string',
      description: 'Name of pizza',
    },
    {
      name: 'Slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      description: 'Price of pizza in cents',
      options: {
        validation: (Rule) => Rule.min(1000).max(50000),
        // TODO: Add custom input component
      },
    },
  ],
};
