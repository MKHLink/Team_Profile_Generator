const Employee = require('../lib/Employee');

test('Creates employess object with name, id and email',() =>{
    const employee = new Employee('Mau','123','hasan@email.com');

    expect(employee.name).toBe('Mau');
    expect(employee.id).toBe('123');
    expect(employee.email).toBe('hasan@email.com');
});

test('Gets employee name',()=>{
    const employee = new Employee('Mau','123','hasan@email.com');

    expect(employee.getName()).toEqual(expect.stringContaining('Mau'));
});

test('Gets employee id',()=>{
    const employee = new Employee('Mau','123','hasan@email.com');

    expect(employee.getId()).toEqual(expect.stringContaining('123'));
});

test('Gets employee email',()=>{
    const employee = new Employee('Mau','123','hasan@email.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining('hasan@email.com'));
});

test('Gets employee role',()=>{
    const employee = new Employee('Mau','123','hasan@email.com');

    expect(employee.getRole()).toBe('Employee');
});