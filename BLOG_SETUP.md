# Go Mission Blog Setup with Directus CMS

## Quick Start

1. **Start the services:**
   ```bash
   docker-compose up -d
   ```

2. **Access Directus Admin:**
   - URL: http://localhost:9640
   - Email: admin@go-mission.dk  
   - Password: changeme123!

3. **Blog will be available at:**
   - Blog listing: http://localhost:9639/blog
   - Individual posts: http://localhost:9639/blog/[slug]

## Setting Up the Blog Collection

### 1. Create Blog Posts Collection

1. Go to **Settings** → **Data Model** → **Create Collection**
2. Collection Name: `blog_posts`
3. Configure the following fields:

#### Core Fields:
- **title** (Text Input)
  - Type: String
  - Required: Yes
  - Interface: Input

- **slug** (Text Input)  
  - Type: String
  - Required: Yes
  - Interface: Input
  - Note: URL-friendly version of title

- **short_description** (Textarea)
  - Type: Text
  - Interface: Textarea
  - Placeholder: "Brief description for cards and SEO"

- **content** (WYSIWYG Editor)
  - Type: Text
  - Interface: WYSIWYG
  - Options: Enable all formatting tools

#### Media Fields:
- **featured_image** (File)
  - Type: UUID
  - Interface: File
  - Allowed file types: Images only

#### Publishing Fields:
- **published_date** (Date & Time) ⭐ NEW FIELD
  - Type: DateTime
  - Interface: DateTime
  - Required: No
  - Note: Controls the visual published date shown to users

- **status** (Dropdown)
  - Type: String
  - Interface: Select Dropdown
  - Options: `draft`, `published`
  - Default: `draft`

#### Metadata Fields:
- **author** (Text Input)
  - Type: String
  - Interface: Input

- **tags** (Tags)
  - Type: JSON
  - Interface: Tags

### 2. Set Field Permissions

1. Go to **Settings** → **Roles & Permissions** → **Public**
2. Find `blog_posts` collection
3. Set Read permissions for all fields:
   - ✅ id
   - ✅ title  
   - ✅ slug
   - ✅ short_description
   - ✅ content
   - ✅ featured_image
   - ✅ author
   - ✅ tags
   - ✅ status
   - ✅ **published_date** ⭐
   - ✅ date_created
   - ✅ date_updated

### 3. Create Your First Blog Post

1. Go to **Content** → **Blog Posts** → **Create Item**
2. Fill in:
   - **Title**: Your blog post title
   - **Slug**: url-friendly-version (e.g., "my-first-post")
   - **Short Description**: Brief excerpt for cards
   - **Content**: Full blog post content with formatting
   - **Featured Image**: Upload a cover image
   - **Published Date**: ⭐ Set your desired display date (independent of creation date)
   - **Status**: Change to `published`
   - **Author**: Your name
   - **Tags**: Add relevant tags

## Published Date Field Benefits

The new `published_date` field gives you control over:

- **Display Date**: Show any date to users regardless of when you created the post
- **Scheduling**: Create posts now but show future publication dates  
- **Backdating**: Migrate old content and maintain original publication dates
- **Sorting**: Posts are sorted by `published_date` first, then `date_created` as fallback
- **Flexibility**: If `published_date` is empty, it automatically falls back to `date_created`

## Content Management Tips

### Writing Content
- Use the WYSIWYG editor for rich formatting
- Headlines will automatically get beautiful styling on the frontend
- Images uploaded in content will respect their original dimensions
- Add line breaks between sections for better readability

### SEO Best Practices
- Write descriptive titles (keep under 60 characters for Google)
- Use `short_description` for meta descriptions (under 160 characters)
- Choose relevant, descriptive slugs
- Add meaningful alt text to images

### Publishing Workflow
1. Create post with status `draft`
2. Preview and edit content
3. Set appropriate `published_date`
4. Change status to `published`
5. Post immediately appears on the website

## Technical Details

### Data Storage
- **Database**: SQLite file in Docker volume `directus_database`
- **Images**: Stored in Docker volume `directus_data`
- **Config**: Environment variables in `docker-compose.yml`

### API Endpoints
- List posts: `/api/blog/posts`
- Single post: `/api/blog/posts/[slug]`

### Backup Important
Make sure to backup:
1. Database volume: `directus_database` 
2. Uploads volume: `directus_data`
3. Configuration: `docker-compose.yml`

## Troubleshooting

### Posts Not Showing
- Check status is `published`
- Verify field permissions are set for Public role
- Check browser console for API errors

### Images Not Loading  
- Ensure images are uploaded through Directus
- Check file permissions in Directus
- Verify image URLs in API response

### Styling Issues
- Headlines get automatic styling from the content formatter
- Images respect original dimensions from Directus
- Custom CSS is applied automatically to content

## Production Considerations

For production deployment:
- Change admin password in `docker-compose.yml`
- Use external database (PostgreSQL recommended)  
- Set up cloud file storage (AWS S3, etc.)
- Configure proper backup automation
- Set up SSL certificates
- Use environment variables for secrets 