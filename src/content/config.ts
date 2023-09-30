import { defineCollection, z } from 'astro:content';
// 2. Define your collection(s)
const projectCollection = defineCollection({ 
    type: 'content',
    schema: z.object({
        title: z.string(),
        technologies: z.array(z.string()),
        imageUrl: z.string().optional(),
        description: z.string().optional(),
        author: z.string().optional()
    })
});


const seedCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    planted: z.string(),
    author: z.string(),
    tags: z.array(z.string()),
    language: z.string(),
    status: z.enum(["seedling", "budding", "evergreen"]),
  })
})
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  'seeds': seedCollection,
  'projects': projectCollection,
};