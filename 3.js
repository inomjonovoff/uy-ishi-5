class LikeCounter {
  constructor() {
    this.likes = 0;
  }

  like() {
    this.likes = this.likes + 1;
  }

  reset() {
    this.likes = 0;
  }
}

const post = new LikeCounter();

post.like();
post.like();

console.log(post.likes);
post.reset();

console.log(post.likes);
