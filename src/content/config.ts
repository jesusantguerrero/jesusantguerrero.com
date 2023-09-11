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
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  'projects': projectCollection,
};