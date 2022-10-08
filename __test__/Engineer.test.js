const Engineer = require('../lib/Engineer');

test('Creates enjoneer object with name, id,email and github username',() =>{
    const engineer = new Engineer('Mau','123','hasan@email.com','MKHLink');

    expect(engineer.name).toBe('Mau');
    expect(engineer.id).toBe('123');
    expect(engineer.email).toBe('hasan@email.com');
    expect(engineer.gitHub).toBe('MKHLink');
});

test('Returns the engineer"s github user name',()=>{
    const engineer = new Engineer('Mau','123','hasan@email.com','MKHLink');

    expect(engineer.getGithub()).toEqual(expect.stringContaining('MKHLink'));
});

test('Gets engineer"s name',()=>{
    const engineer = new Engineer('Mau','123','hasan@email.com','MKHLink');

    expect(engineer.getName()).toEqual(expect.stringContaining('Mau'));
});

test('Gets engineer"s id',()=>{
    const engineer = new Engineer('Mau','123','hasan@email.com','MKHLink');

    expect(engineer.getId()).toEqual(expect.stringContaining('123'));
});

test('Gets engineer"s email',()=>{
    const engineer = new Engineer('Mau','123','mau@mail.com','MKHLink');

    expect(engineer.getEmail()).toEqual(expect.stringContaining('mau@mail.com'));
});

test('Gets employee role',()=>{
    const engineer = new Engineer('Mau','123','mau@mail.com','MKHLink');

    expect(engineer.getRole()).toBe('Engineer');
});