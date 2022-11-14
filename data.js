// estas funciones son de ejemplo

export const filterDataByProperty = (data, condition) => {
  const result = [];

  data.forEach((data) => {

    if (!result.includes(data[condition])) { result.push(data[condition]); }

    return result;

  });
  return result;

};


export const filterDataByValue = (data, condition, value) => {

  return data.filter(film => film[condition] === value);

};


export const filterDataByProperties = (data, properties) => {

  return data.map(data => {

    const obj = new Object();

    properties.forEach(value => { obj[value] = data[value]; });

    return obj;
  });

};

export const sortDataAZ = (data, sortBy) => {
  return [...data].sort((itemLeft, itemRight) => {
    // el titulo de la izquierda va primero
    if (itemLeft[sortBy] < itemRight[sortBy]) {
      return -1;
    }
    // el titulo de la derecha va primero
    if (itemLeft[sortBy] > itemRight[sortBy]) {

      return 1;
    }
    // los titulos son iguales
    return 0;
  });

};

export const sortDataZA = (data, sortBy) => {
  return [...data].sort((itemLeft, itemRight) => {
    // el titulo de la izquierda va primero
    if (itemLeft[sortBy] < itemRight[sortBy]) {
      return 1;
    }
    // el titulo de la derecha va primero
    if (itemLeft[sortBy] > itemRight[sortBy]) {

      return -1;
    }
    // los titulos son iguales
    return 0;
  });

};


export const averageFunction = (data, condition) => {console.log("c:"+data[0][condition]);

   /*let sum = [...data].reduce(function (accumulator, currentValue) {

    return {
      
      data[condition]: parseInt(accumulator[condition],10) + parseInt(currentValue[condition],10)
    };
  }, { condition: 0 });

  console.log("sumaaaa:"+sum[condition]);

  return (sum.condition / data.length).toFixed(2);

  data.reduce (function (accumulator, currentValue) =>  ((accumulator + currentValue)));
 */

  let sum = 0;
    data.forEach(data => {
      sum += parseInt(data[condition], 10);
    });
       
  return (sum/data.length).toFixed(2);
};
