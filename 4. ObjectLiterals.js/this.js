// let Teacher = {
//     name: 'success',
//     age: 45,
//     location: 'aba',
//     email: 'emma@yahoo.com',
//     blogs: ['teachers guide', 'oliver twist', 'art of war', '10 commandents'],
//     login: () => console.log('User logged In'),
//     logout: () => console.log('User logged Out'),
//     logBlogs: () => console.log(Teacher.blogs) // console.log(Teacher['blogs'])
// };

// Teacher.logBlogs();



let Teacher = {
    name: 'success',
    age: 45,
    location: 'aba',
    email: 'emma@yahoo.com',
    blogs: ['teachers guide', 'oliver twist', 'art of war', '10 commandents'],
    login: () => console.log('User logged In'),
    logout: () => console.log('User logged Out'),

    logBlogs() {
        console.log('techer has wriiten these blogs');
        this.blogs.forEach(blog => {
            console.log(blog);
        })
    }

};

Teacher.logBlogs();

