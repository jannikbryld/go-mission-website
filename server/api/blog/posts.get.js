export default defineEventHandler(async (event) => {
    try {
        // Get Directus URL from environment or use default
        const directusUrl = process.env.DIRECTUS_URL || 'http://localhost:9640'

        // Fetch published blog posts from Directus
        const response = await $fetch(`${directusUrl}/items/blog_posts`, {
            query: {
                fields: [
                    'id',
                    'title',
                    'slug',
                    'short_description',
                    'content',
                    'featured_image',
                    'author',
                    'tags',
                    'status',
                    'published_date',
                    'date_created',
                    'date_updated'
                ].join(','),
                filter: {
                    status: {
                        _eq: 'published'
                    }
                },
                sort: '-published_date,-date_created',
                limit: 50
            }
        })

        // Transform the data to use public URLs for images
        const posts = response.data || []
        const publicDirectusUrl = 'http://localhost:9640'

        return posts.map(post => ({
            ...post,
            featured_image: post.featured_image
                ? `${publicDirectusUrl}/assets/${post.featured_image}`
                : null
        }))
    } catch (error) {
        console.error('Error fetching blog posts:', error)

        // Return meaningful error response
        throw createError({
            statusCode: error.status || 500,
            statusMessage: error.message || 'Failed to fetch blog posts'
        })
    }
}) 