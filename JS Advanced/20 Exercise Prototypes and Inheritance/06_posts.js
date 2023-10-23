function posts() {
    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }
        toString() {
            let text = `Post: ${this.title}\nContent: ${this.content}`;
            return text;
        }
    }
    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = Number(likes);
            this.dislikes = Number(dislikes);
            this.comments = [];
        }

        addComment(comment) {
            this.comments.push(comment);
        }
        toString() {
            let text = super.toString();
            text += `\nRating: ${this.likes - this.dislikes}\n`
            if (this.comments.length > 0) {
                text += `Comments:\n`
                this.comments.forEach(comment => {
                    text += ` * ${comment}\n`;
                })
                return text.trim();
            }
            return text.trim();///

        }
    }

    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content);
            this.views = Number(views);
        }

        view() {
            this.views++;
            return this;
        }
        toString() {
            let text = super.toString();
            text += `\nViews: ${this.views}`;
            return text;
        }
    }

    return {
        Post,
        SocialMediaPost,
        BlogPost
    }
}
const classes = posts();
let post = new classes.Post("Post", "Content");

console.log(post.toString());

// Post: Post
// Content: Content

let scm = new classes.SocialMediaPost("TestTitle", "TestContent", 25, 30);

scm.addComment("Good post");
scm.addComment("Very good post");
scm.addComment("Wow!");

console.log(scm.toString());

// Post: TestTitle
// Content: TestContent
// Rating: -5
// Comments:
//  * Good post
//  * Very good post
//  * Wow!


// Post: TestTitle
// Content: TestContent
// Rating: -5
// Comments:
//  * Good post
//  * Very good post
//  * Wow!

let bpost = new classes.BlogPost("Title", "TestContent", 30);
console.log(bpost.toString());
bpost.view();
bpost.view();
bpost.view();
console.log(bpost.view());
