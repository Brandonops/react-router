class BlogService {
    constructor() {
      this.blogs = [
        {
          id: 1,
          title: "Best Breakfast Foods",
          content: "Pancakes. Obvi."
        },
        {
          id: 2,
          title: "Other good foods",
          content: "waffles, bacon, eggs"
        },
        {
          id: 3,
          title: "Top things to eat in 2021",
          content: "French Toast, hash browns, english muffins"
        }
      ];
    }
  
    getPostByID(id) {
      const post = this.blogs.find((blog) => blog.id === id);
      return Promise.resolve(post);
    }
  
    getAll() {
      return Promise.resolve(this.blogs);
    }
  }
  
  const blogService = new BlogService();
  
  export default blogService;
  