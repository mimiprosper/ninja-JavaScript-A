
let Users = {
    name: 'success',
    age: 45,
    location: 'aba',
    email: 'emma@yahoo.com',
    blogs: [
        { title: 'teachers guide', likes: 50, author: 'john drew' },
        { title: 'art of war', likes: 30, author: 'collin powell' }
    ],
    login: () => console.log('User logged In'),
    logout: () => console.log('User logged Out'),

    logBlogs() {
        console.log('some users have wriiten these blogs');
        this.blogs.forEach(blog => {
            console.log(`Author: ${blog.author}, Title: ${blog.title}, Likes: ${blog.likes}`);
        })
    }

};

Users.logBlogs()
console.log(Users);