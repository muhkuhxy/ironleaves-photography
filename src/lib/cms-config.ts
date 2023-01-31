import type { Config } from "@staticcms/core";

export const config: Config = {
  backend: {
    name: "git-gateway",
    branch: "astro/main",
  },
  media_folder: "public/images/stories",
  public_folder: "/images/stories/",
  collections: [
    {
      name: "stories",
      editor: { frame: false },
      create: true,
      label: "Stories",
      label_singular: "Story",
      folder: "src/content/stories",
      format: "yaml-frontmatter",
      summary: "{{title}}",
      sortable_fields: {
        fields: ["title", "createdAt"],
        default: {
          field: "createdAt",
          direction: "Descending",
        },
      },
      view_groups: [
        {
          label: "Tag",
          field: "tag",
        },
      ],
      fields: [
        {
          label: "Titel",
          name: "title",
          widget: "string",
        },
        {
          label: "Tag",
          name: "tag",
          widget: "select",
          options: ["stories", "tipps", "infos"],
          default: "stories",
        },
        {
          label: "Datum",
          name: "createdAt",
          widget: "datetime",
        },
        {
          label: "Bild",
          name: "imgSrc",
          widget: "image",
        },
        {
          label: "Bild-Alt",
          name: "imgAlt",
          widget: "string",
        },
        {
          label: "Story Bilder",
          label_singular: "Story Bild",
          name: "storyTellingImgs",
          widget: "list",
          hint: "Ein Bild pro Kapitel-Überschrift",
          summary: "{{fields.img}}",
          fields: [
            {
              label: "Bild",
              name: "img",
              widget: "image",
            },
          ],
        },
        {
          label: "Kapitel",
          name: "body",
          widget: "text",
          hint: "Absatz bis zur ersten Überschrift ist Vorschau/Introtext",
        },
        {
          label: "Slider Bilder",
          label_singular: "Slider Bild",
          name: "slides",
          widget: "list",
          summary: "{{fields.img}}",
          fields: [
            {
              label: "Bild",
              name: "img",
              widget: "image",
            },
          ],
        },
        {
          label: "Kundenstimme",
          name: "testimonial",
          required: false,
          summary: "{{fields.name}}",
          widget: "object",
          fields: [
            {
              label: "Name",
              name: "name",
              widget: "string",
              required: false,
            },
            {
              label: "Bild",
              name: "imgSrc",
              widget: "image",
              required: false,
            },
            {
              label: "Bild-Alt",
              name: "imgAlt",
              widget: "string",
              required: false,
            },
            {
              label: "Text",
              name: "text",
              widget: "text",
              required: false,
            },
          ],
        },
      ],
    },
  ],
};
