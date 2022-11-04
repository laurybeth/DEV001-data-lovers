import { filterDataByProperty, filterDataByProperties, sortDataAZ, sortDataZA, filterDataByValue} from '../src/data.js';

describe('filterDataByProperty', () => {

  it('Debe retornar un array con los valores que cumplan con la condición de la propiedad indicada', () => {
    expect(filterDataByProperty([
      { age: 10, name: "hola", gender: "male" },
      { age: 10, name: "hola", gender: "female" },
      { age: 10, name: "hola", gender: "male" },  
      { age: 10, name: "hola", gender: "male" }
    ], "gender")).toEqual(["male", "female"]);
  });
});


describe('filterDataByProperties', () => {

it('Debe retornar un array de objetos que cumplan con la condición de las propiedades indicadas', () => {
  expect(filterDataByProperties([
    { age: 10, name: "hola", gender: "male" },
    { age: 10, name: "hola", gender: "female" },
    { age: 10, name: "hola", gender: "male" },  
    { age: 10, name: "hola", gender: "male" }
  ], ["age", "gender"])).toEqual([{"age": 10, "gender": "male"},{ "age": 10, "gender": "female"},{ "age": 10, "gender": "male"},{ "age": 10, "gender": "male"}]);
});
});

describe('sortDataAZ', () => {

it('Debe retornar un array de objetos ordenados de la A a la Z por la propiedad indicada', () => {
  expect(sortDataAZ([
    { title: "Castle in the Sky"},
    { title:  "Kiki's Delivery Service"},
    { title: "My Neighbor Totoro" },
    { title: "Kiki's Delivery Service" },  
    { title: "Grave of the Fireflies" }
  ], "title")).toStrictEqual([{"title": "Castle in the Sky"},{ "title":  "Grave of the Fireflies"},{ "title": "Kiki's Delivery Service"},{ "title":  "Kiki's Delivery Service"},{ "title": "My Neighbor Totoro"}]);
});
});

describe('sortDatZA', () => {

  it('Debe retornar un array ordenado de la Z a la A por la propiedad indicada', () => {
    expect(sortDataZA([
      { title: "Castle in the Sky"},
      { title: "Kiki's Delivery Service" }, 
      { title: "My Neighbor Totoro" },
      { title: "Kiki's Delivery Service" },  
      { title: "Grave of the Fireflies" }
    ], "title")).toStrictEqual([{"title": "My Neighbor Totoro"},{ "title":  "Kiki's Delivery Service"},{ "title":  "Kiki's Delivery Service"},{ "title": "Grave of the Fireflies"},{ "title": "Castle in the Sky"}]);
  });
  });

  describe('filterDataByValue', () => {

    it('Debe retornar un array de objetos que coincidan con el valor de la propiedad indicada', () => {
      expect(filterDataByValue([
        { director: "Hayao Miyazaki", title: "Castle in the Sky" },
        { director: "Hayao Miyazaki", title: "My Neighbor Totoro" },
        { director: "Hayao Miyazaki", title: "Kiki's Delivery Service" },  
        { director: "Isao Takahata", title: "Grave of the Fireflies" }
      ],"director","Hayao Miyazaki")).toEqual([{"director": "Hayao Miyazaki","title": "Castle in the Sky"},{"director": "Hayao Miyazaki","title": "My Neighbor Totoro"},{"director": "Hayao Miyazaki","title": "Kiki's Delivery Service"}]);
    });
    });