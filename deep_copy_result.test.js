import { test, expect } from 'vitest';
import {
    man,
    manFullCopy,
    man1,
    numbers,
    numbersFullCopy,
    man1FullCopy,
    man2,
    man2FullCopy,
    man3,
    man3FullCopy,
    man4,
    man4FullCopy,
    people,
    peopleFullCopy,
    man5,
    man5FullCopy,
    man6,
    man6FullCopy,
    man7,
    man7FullCopy,
} from './deep_copy_result';


test('1. Simple object', () => {
    expect(manFullCopy).toEqual(man);
    expect(manFullCopy).not.toBe(man);
})


test('2. Array of primitives', () => {
    expect(numbersFullCopy).toEqual(numbers);
    expect(numbersFullCopy).not.toBe(numbers);
})


test('3. Object inside an object', () => {
    expect(man1FullCopy).toEqual(man1);
    expect(man1FullCopy.mother).not.toBe(man1.mother);
})


test('4. Array of primitives inside an object', () => {
    expect(man2FullCopy).toEqual(man2);
    expect(man2FullCopy.friends).not.toBe(man2.friends);
})


test('5. Array of objects', () => {
    expect(peopleFullCopy).toEqual(people);
    expect(peopleFullCopy[0]).not.toBe(people[0]);
})


test('6. Array of objects inside an object', () => {
    expect(man3FullCopy).toEqual(man3);
    expect(man3FullCopy.friends[0]).not.toBe(man3.friends[0]);
})


test('7. Object inside an object, inside an object', () => {
    expect(man4FullCopy).toEqual(man4);
    expect(man4FullCopy.mother.work).not.toBe(man4.mother.work);
})


test('8. Array of objects inside object -> object', () => {
    expect(man5FullCopy).toEqual(man5);
    expect(man5FullCopy.mother.parents[0]).not.toBe(man5.mother.parents[0]);
})


test('9. Object inside an object -> array -> object -> object', () => {
    expect(man6FullCopy).toEqual(man6);
    expect(man6FullCopy.mother.parents[0].favoriteDish).not.toBe(man6.mother.parents[0].favoriteDish);
})


test('10. Array of objects inside object -> object -> array -> object -> object', () => {
    expect(man7FullCopy).toEqual(man7);
    expect(man7FullCopy.mother.parents[0].favoriteDish.ingredients[0]).not.toBe(man7.mother.parents[0].favoriteDish.ingredients[0]);
})
