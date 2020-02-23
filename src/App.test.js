import {add, total} from './App'

console.log(add(1,2))



test('add',()=>{
    // const value = add(1,2);
    // expect(value).toBe(3);
    expect(add(1,2)).toBe(3);
    expect(add(5,2)).toBe(7);
}); 

test('total', ()=>{
    expect(total(5,20)).toBe('$25')
})

// test('Fake Test2',()=>{
//     expect(true).toBeTruthy();
// });