function car(clientOrder) {
 
    let posibilities = [
        { power : 90, volume: 1800 },
        { power : 120, volume: 2400 },
        { power : 200, volume: 3500 },

    ];

    return {
        model: clientOrder.model,
        engine: posibilities.find((p) => clientOrder.power <= p.power),
        carriage: {type: clientOrder.carriage, color: clientOrder.color},
        wheels: Array(4).fill(clientOrder.wheelsize % 2 === 0 ? clientOrder.wheelsize - 1 :clientOrder.wheelsize)
        
    }
  
}

//better with destructuring: 
function carDestructuring({model, power, color, carriage,wheelsize}) {
 
    let posibilities = [
        { power : 90, volume: 1800 },
        { power : 120, volume: 2400 },
        { power : 200, volume: 3500 },

    ];

    return {
        model,
        engine: posibilities.find((p) => power <= p.power),
        carriage: {type: carriage, color},
        wheels: Array(4).fill(wheelsize % 2 === 0 ? wheelsize - 1 :wheelsize)
        
    }  
}

carDestructuring(
    {
        model: 'VW Golf II',
        power: 90,
        color: 'blue',
        carriage: 'hatchback',
        wheelsize: 14
    })