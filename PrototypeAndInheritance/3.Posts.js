function solve() {

    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            return `Post: ${this.title}\nContent: ${this.content}`;
        }
    }


    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];
        }

        addComment(c) {
            this.comments.push(c);
        }

        toString() {
            let output = super.toString() + "\n";
            output += `Rating: ${this.likes - this.dislikes}\n`;
            if (this.comments.length > 0) {
                output += `Comments:\n`;
                output += this.comments.map((commen) => ` * ${commen}`).join('\n');
            }
            return output.trim();
        }
    }


    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content);
            this.views = views;
        }

        view() {
            //- view() - which increments the views of the object with 1,
            // every time it is called.
            // The function should return the object, so that chaining is supported. 
            //tove e za da si vru6ta this=a i klasa vseki pat, da moje da napi6em = blogpost.view().view()/view() i da ne se 4upi,
            // a ne 3 puti da vikame blogpost.view()   ==> chaining
            this.views += 1;
            return this;
        }

        toString() {
            return `${super.toString()}\nViews: ${this.views}`;
        }
    }
    return {
        Post,
        SocialMediaPost,
        BlogPost
    }

}