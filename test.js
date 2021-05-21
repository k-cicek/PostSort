const posts = [
    { title: 'Post Başlık 1', detail: 'Post Detay 1' },
    { title: 'Post Başlık 2', detail: 'Post Detay 2' },
    { title: 'Post Başlık 3', detail: 'Post Detay 3' },
  ];
  
   /* //Promise version

   const listPosts = () => {
     posts.map((post) => {
       console.log(post);
     });
   };
  
   const addPost = (newPost) => {
     const promise1 = new Promise((resolve, reject) => {
       posts.push(newPost);
         //reject('BIR HATA OLUSTU');
     });
     return promise1;
   };
  
   addPost({ title: 'Post Başlık 10', detail: 'Post Detay 10' })
     .then(() => {
       console.log("YENI LISTE");
       listPosts();
     })
     .catch((error) => {
       console.log(error);
     });
  
   listPosts(); */
  
  // Async Version
  
   const listPosts = () => {
     posts.map((post) => {
       console.log(post);
     });
   };
  
   const addPost = (newPost) => {
     const promise1 = new Promise((resolve, reject) => {
       posts.push(newPost);
       resolve(posts);
       reject('Bir HATA OLUŞTU');
     });
     return promise1;
   };
  
   async function showPost() {
     try {
       await addPost({ title: 'Post Başlık 10', detail: 'Post Detay 10' });
       listPosts();
     } catch (error) {
       console.log(error);
     }
   }
  
   showPost(); 