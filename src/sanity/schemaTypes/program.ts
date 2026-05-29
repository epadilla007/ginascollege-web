import { defineField, defineType } from 'sanity'

export const programSchema = defineType({
  name: 'program',
  title: 'Program',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Program Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: { source: 'title' },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'type',
      title: 'Program Type',
      type: 'string',
      options: {
        list: [
          { title: 'Diploma Program', value: 'diploma' },
          { title: 'Certificate Program', value: 'certificate' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'duration',
      title: 'Duration',
      type: 'string',
      description: 'e.g. "12 months" or "8 weeks"',
    }),
    defineField({
      name: 'highlight',
      title: 'One-Line Highlight',
      type: 'string',
      description: 'Short hook shown on program cards',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'body',
      title: 'Full Program Body',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'outcomes',
      title: 'Career Outcomes',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Job titles graduates pursue',
    }),
    defineField({
      name: 'salaryRange',
      title: 'Salary Range',
      type: 'string',
      description: 'e.g. "$55,000–$90,000+"',
    }),
    defineField({
      name: 'image',
      title: 'Featured Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'campuses',
      title: 'Available At Campuses',
      type: 'array',
      of: [
        {
          type: 'string',
          options: {
            list: [
              { title: 'Mississauga', value: 'mississauga' },
              { title: 'Waterloo', value: 'waterloo' },
              { title: 'Ottawa', value: 'ottawa' },
            ],
          },
        },
      ],
    }),
    defineField({
      name: 'cidesco',
      title: 'CIDESCO Track',
      type: 'boolean',
      description: 'Does this program qualify toward CIDESCO certification?',
    }),
    defineField({
      name: 'osapEligible',
      title: 'OSAP Eligible',
      type: 'boolean',
    }),
    defineField({
      name: 'metaTitle',
      title: 'SEO Title',
      type: 'string',
      group: 'seo',
    }),
    defineField({
      name: 'metaDescription',
      title: 'SEO Description',
      type: 'text',
      rows: 2,
      group: 'seo',
    }),
  ],
  groups: [
    { name: 'seo', title: 'SEO' },
  ],
  preview: {
    select: { title: 'title', subtitle: 'type', media: 'image' },
    prepare({ title, subtitle, media }) {
      return {
        title,
        subtitle: subtitle === 'diploma' ? 'Diploma Program' : 'Certificate Program',
        media,
      }
    },
  },
})
