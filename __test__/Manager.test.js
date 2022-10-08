const Manager = require('../lib/Manager');

test('Create a manager object with name, id, email and office number',()=>{
    const manager = new Manager('Mau','123','mau@mail.com','545');

    expect(manager.name).toBe('Mau');
    expect(manager.id).toBe('123');
    expect(manager.email).toBe('mau@mail.com');
    expect(manager.officeNumber).toBe('545');
});

test('Gets employee name',()=>{
    const manager = new Manager('Mau','123','mau@mail.com','545');

    expect(manager.getName()).toEqual(expect.stringContaining('Mau'));
});

test('Gets employee id',()=>{
    const manager = new Manager('Mau','123','mau@mail.com','545');

    expect(manager.getId()).toEqual(expect.stringContaining('123'));
});

test('Gets employee email',()=>{
    const manager = new Manager('Mau','123','mau@mail.com','545');

    expect(manager.getEmail()).toEqual(expect.stringContaining('mau@mail.com'));
});

test('Gets employee role',()=>{
    const manager = new Manager('Mau','123','mau@mail.com','545');

    expect(manager.getRole()).toBe('Manager');
});