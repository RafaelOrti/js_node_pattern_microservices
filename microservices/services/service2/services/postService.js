const Post = require('../models/Post');

class PostService {
  async getAllPosts() {
    return await Post.find();
  }

  // ... other service methods
}

module.exports = new PostService();
