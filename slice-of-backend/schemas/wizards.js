import {MdPerson
   as icon
} from "react-icons/md";
export default {
  name: "wizard",
  title: "Wizards",
  type: "document",
  icon,
  fields: [{
      name: "name",
      title: "Wizard name",
      type: "string",
      description: "Name of the wizard",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 100,
      }
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      description: "Tell us about the wizard"
    }, 
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};