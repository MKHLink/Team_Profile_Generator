const Intern = require('../lib/Intern');

test('creates Intern object with name,id,email and school',()=>{
    const intern = new Intern('Mau','123','mau@mail.com','BMCC');

    expect(intern.name).toBe('Mau');
    expect(intern.id).toBe('123');
    expect(intern.email).toBe('mau@mail.com');
    expect(intern.school).toBe('BMCC');
});

test('Gets intern"s name',()=>{
    const intern = new Intern('Mau','123','hasan@email.com','MKHLink');

    expect(intern.getName()).toEqual(expect.stringContaining('Mau'));
});

test('Gets intern"s id',()=>{
    const intern = new Intern('Mau','123','hasan@email.com','MKHLink');

    expect(intern.getId()).toEqual(expect.stringContaining('123'));
});

test('Gets engineer"s email',()=>{
    const intern = new Intern('Mau','123','mau@mail.com','MKHLink');

    expect(intern.getEmail()).toEqual(expect.stringContaining('mau@mail.com'));
});

test('Gets intern"s school',()=>{
    const intern = new Intern('Mau','123','mau@mail.com','BMCC');

    expect(intern.getSchool()).toEqual(expect.stringContaining('BMCC'));
});

test('Gets intern role',()=>{
    const intern = new Intern('Mau','123','mau@mail.com','545');

    expect(intern.getRole()).toBe('Intern');
});