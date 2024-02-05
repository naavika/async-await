// Assuming these functions represent async operations
function getButter() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Husband got butter");
        resolve("Butter");
      }, 2000);
    });
  }
  
  function getColdDrinks() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Husband got cold drinks");
        resolve("Cold Drinks");
      }, 1500);
    });
  }
  
  // Using Promise
  function getGroceriesPromise() {
    getButter()
      .then((butter) => {
        console.log("Received", butter);
        return getColdDrinks();
      })
      .then((drinks) => {
        console.log("Received", drinks);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  
  getGroceriesPromise();
  
  // Using async/await
  async function getGroceriesAsyncAwait() {
    try {
      const butter = await getButter();
      console.log("Received", butter);
      
      const drinks = await getColdDrinks();
      console.log("Received", drinks);
    } catch (error) {
      console.error("Error:", error);
    }
  }
  
  getGroceriesAsyncAwait();
  
  // Handling Promise.all with async/await
  async function fetchData() {
    const [post, user] = await Promise.all([getPost(), getUser()]);
    console.log("Post:", post);
    console.log("User:", user);
  }
  
  // Assuming createPost and deletePost are asynchronous functions
  async function createPostAsync() {
    try {
      const result = await createPost();
      console.log("Post created:", result);
    } catch (error) {
      console.error("Error creating post:", error);
    }
  }
  
  async function deletePostAsync(postId) {
    try {
      const result = await deletePost(postId);
      console.log("Post deleted:", result);
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  }
  