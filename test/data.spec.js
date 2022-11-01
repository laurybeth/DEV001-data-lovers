import { filterDataByProperty, filterDataByProperties, sortDataAZ, sortDataZA} from '../src/data.js';

describe('filterDataByProperty', () => {

  it('returns `filterData`', () => {
    expect(filterDataByProperty([
      { age: 10, name: "hola", gender: "male" },
      { age: 10, name: "hola", gender: "female" },
      { age: 10, name: "hola", gender: "male" },  
      { age: 10, name: "hola", gender: "male" }
    ], "gender")).toEqual(["male", "female"]);
  });
});


describe('filterDataByProperties', () => {

it('returns `filterDataByProperties`', () => {
  expect(filterDataByProperties([
    { age: 10, name: "hola", gender: "male" },
    { age: 10, name: "hola", gender: "female" },
    { age: 10, name: "hola", gender: "male" },  
    { age: 10, name: "hola", gender: "male" }
  ], ["age", "gender"])).toEqual([{"age": 10, "gender": "male"},{ "age": 10, "gender": "female"},{ "age": 10, "gender": "male"},{ "age": 10, "gender": "male"}]);
});
});

describe('sortDataAZ', () => {

it('returns `sortDataAZ`', () => {
  expect(sortDataAZ([
    { title: "Castle in the Sky"},
    { title: "My Neighbor Totoro" },
    { title: "Kiki's Delivery Service" },  
    { title: "Grave of the Fireflies" }
  ], "title")).toStrictEqual([{"title": "Castle in the Sky"},{ "title":  "Grave of the Fireflies"},{ "title": "Kiki's Delivery Service"},{ "title": "My Neighbor Totoro"}]);
});
});

describe('sortDatZA', () => {

  it('returns `sortDataZA`', () => {
    expect(sortDataZA([
      { title: "Castle in the Sky"},
      { title: "My Neighbor Totoro" },
      { title: "Kiki's Delivery Service" },  
      { title: "Grave of the Fireflies" }
    ], "title")).toStrictEqual([{"title": "My Neighbor Totoro"},{ "title":  "Kiki's Delivery Service"},{ "title": "Grave of the Fireflies"},{ "title": "Castle in the Sky"}]);
  });
  });