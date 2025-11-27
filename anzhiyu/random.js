var posts=["2025/11/27/这是一篇新的博文/","2025/11/27/My-First-Post/","2025/11/27/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };