const BlogPost = require('../hard/blogPost');

describe('BlogPost', () => {
    let post;

    beforeEach(() => {
        post = new BlogPost('Title', 'Content', 'Author');
    });

    test('initialize', () => {
        expect(post.getDetails()).toEqual({
            title: 'Title',
            content: 'Content',
            author: 'Author',
        });
    });

    test('editTitle', () => {
        post.editTitle('New Title');
        expect(post.getDetails().title).toBe('New Title');
    });

    test('editContent', () => {
        post.editContent('New Content');
        expect(post.getDetails().content).toBe('New Content');
    });

    test('editAuthor', () => {
        post.editAuthor('New Author');
        expect(post.getDetails().author).toBe('New Author');
    });

    test('getDetails', () => {
        expect(post.getDetails()).toEqual({
            title: 'Title',
            content: 'Content',
            author: 'Author',
        });
    });
});
