export default defineEventHandler(async (event) => {
    try {
        const slug = getRouterParam(event, 'slug')

        if (!slug) {
            throw createError({
                statusCode: 400,
                statusMessage: 'Slug parameter is required'
            })
        }

        // Get Directus URL from environment or use default
        const directusUrl = process.env.DIRECTUS_URL || 'http://localhost:9640'

        // Fetch single blog post by slug from Directus
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
                    slug: {
                        _eq: slug
                    },
                    status: {
                        _eq: 'published'
                    }
                },
                limit: 1
            }
        })

        const post = response.data?.[0]

        if (!post) {
            throw createError({
                statusCode: 404,
                statusMessage: 'Blog post not found'
            })
        }

        // Transform the data to use public URLs for images
        const publicDirectusUrl = process.env.DIRECTUS_URL || 'http://localhost:9640'

        return {
            ...post,
            featured_image: post.featured_image
                ? `${publicDirectusUrl}/assets/${post.featured_image}`
                : null
        }
    } catch (error) {
        console.error('Error fetching blog post:', error)

        // Pass through HTTP errors
        if (error.statusCode) {
            throw error
        }

        // Return generic error for other issues
        throw createError({
            statusCode: 500,
            statusMessage: 'Failed to fetch blog post'
        })
    }
}) 