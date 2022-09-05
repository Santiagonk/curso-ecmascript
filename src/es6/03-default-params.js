function newUser(name, age, country) {
    var name = name || 'Santiago';
    var age = age || 30;
    var country = country || 'CO';
    console.log(name, age, country);
}

newUser();
newUser('Oscar', 34, 'MX');

function newAdmin(name = 'Santiago', age = 30, country = 'CO'){
    console.log(name, age, country);
}

newAdmin();
newAdmin('Oscar', 34, 'MX');