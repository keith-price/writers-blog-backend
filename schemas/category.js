// schemas/category.js

export default {
  name: 'category',
  type: 'document',
  title: 'Category',
  fields: [
    {
      name: 'category',
      type: 'string',
      title: 'Category',
      validation: (Rule) => Rule.required().min(2).max(20),
    },
  ],
}
