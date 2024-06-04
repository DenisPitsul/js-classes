class Post {
    constructor(id, name, author, text, postDate, likesCount, img, tags) {
        this._id = id;
        this._name = name;
        this._author = author;
        this._text = text;
        this._postDate = postDate;
        this.likesCount = likesCount;
        this._img = img;
        this._tags = tags;
    }

    updateText(newText) {
        this._text = newText;
    }

    likeInc() {
        this._likesCount++;
    }

    likeDec() {
        if(likesCount > 0) {
            this._likesCount--;
        }
    }

    render() {
        const TAG_COLORS = {
            web: 'green',
            javascript: 'yellow',
            fullstack: 'blue',
            react: 'orange',
            nodejs: 'brown',
            eduaction: 'red',
        };
        const {_id, _name, _author, _text, _postDate, _likesCount, _img, _tags} = this;
        const dateStr = _postDate.toISOString().split('T')[0];

        const tagsMarckup = _tags
            .map(tag => `<span class="tag" style="background-color:${TAG_COLORS[tag]}">${tag}</span>`)
            .join('');

        document.write(`
            <article class="post">
                <div class="post-header">
                    <h2 class="post-name">${_name}</h2>
                    <p class="post-author">${_author}</p>
                    <p class="post-date">${dateStr}</p>
                </div>
                <div class="post-content">
                    <p class="post-text">${_text}</p>
                    <img class="post-img" src="${_img}" alt="Image ${_id}">
                </div>
                <div class="post-footer">
                    <p class="post-likes">Likes: <span class="likes-count">${_likesCount}</span></p>
                    <p class="post-tags">Tags: ${tagsMarckup}</p>
                </div>
            </article>
        `);
    }

    set likesCount(value) {
        const likesCountRange = new RangeValidator(0, 1000000);
        if(!likesCountRange.isValid(value)) {
            throw RangeError(`like counts must be from ${likesCountRange.from} to ${likesCountRange.to}`);
        }
        this._likesCount = value;
    }

    get likesCount() {
        return this._likesCount;
    }

    addTag(tag) {
        if(this._tags.length >= 6) {
            throw RangeError('You can not add new tag, max tags length is 6');
        }
        this._tags.push(tag);
    }
}

const posts = [
    new Post(1, 'First Post', 'John Doe', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', new Date(2024, 5, 3), 10, '../assets/images/post.jpg', ['web', 'javascript', 'fullstack']),
    new Post(2, 'Second Post', 'Jane Smith', 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', new Date(2024, 5, 2), 20, '../assets/images/post.jpg', ['web', 'javascript', 'react', 'education']),
    new Post(3, 'Third Post', 'Alice Johnson', 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', new Date(2024, 5, 1), 30, '../assets/images/post.jpg', ['web', 'javascript', 'nodejs'])
];

document.write('<section>');
posts.forEach(post => post.render());
document.write('</section>');
