import {
  IoMdPizza as icon
} from 'react-icons/io';
import PriceAdd from "../components/PriceAdd"
export default {
  name: 'pie',
  title: 'Pies',
  type: 'document',
  icon,
  fields: [{
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
      validation: (Rule) => Rule.min(1000),
      inputComponent: PriceAdd,
      
    },
    {
      name: "toppings",
      title: "Toppings",
      type: "array",
      of: [{
        type: "reference",
        to: [{
          type: "topping"
        }]
      }]
    }
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
      topping0: "toppings.0.name",
      topping1: "toppings.1.name",
      topping2: "toppings.2.name",
      topping3: "toppings.3.name",
    },
    prepare: ({ title, media, ...toppings }) => {
      const noEmpty = Object.values(toppings).filter(Boolean);
      return {
        title,
        media,
        subtitle: Object.values(noEmpty).join(", ")
      }
    }
  }
};