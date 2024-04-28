// Import utilites from `astro:content`
import { z, defineCollection } from 'astro:content';

// Define a `type` and `Schema` for each collection
const postsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        author: z.string(),
        categories: z.array(z.string()),
        date: z.string(),
        featured: z.boolean().default(false),
        image: z.string(),
        title: z.string()
    })
});

// Exporting to register collection(s)
export const collections = {
    posts: postsCollection,
}
