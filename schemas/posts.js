// schemas/posts.js

export default {
  name: 'post',
  type: 'document',
  title: 'Post',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required().min(10).max(80),
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        maxLength: 96,
        isUnique: (value, context) => context.defaultIsUnique(value, context),
      },
      validation: (rule) => rule.required(),
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'excerpt',
      type: 'text',
      title: 'Excerpt',
      validation: (Rule) => Rule.required().min(10).max(200),
    },
    {
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'date',
      title: 'Date',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    },
    {
      name: 'author',
      type: 'string',
      title: 'Author',
      validation: (Rule) => Rule.required().min(5).max(20),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Poetry', value: 'poetry'},
          {title: 'Short Story', value: 'short story'},
          {title: 'Flash Fiction', value: 'flash fiction'},
          {title: 'Memoir/Non-Fiction', value: 'memoir/non-fiction'},
          {title: 'Novel Extracts', value: 'novel extracts'},
          {title: 'Diary', value: 'diary'},
        ],
      },
    },
  ],
}
