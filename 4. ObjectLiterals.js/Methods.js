let Teacher = {
    name: 'success',
    age: 45,
    location: 'aba',
    email: 'emma@yahoo.com',
    blog: ['teachers guide', 'oliver twist', 'art of war', '10 commandents'],
    login: () => console.log('User logged In'),
    logout: () => console.log('User logged Out')
};

Teacher.login();
Teacher.logout();