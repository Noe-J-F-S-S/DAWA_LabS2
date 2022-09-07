// const data2 = [
//     {
//         id: 1,
//         name: "monitor",
//         precio: 250
//     },
// ];
const data2 = [];
let ultimoId = 0;

//listar todo
export const findAll =() =>{
    return data2;
}

//buscar por el id
export const findOne = (id) =>{
    return data2.find((p) => p.id=== Number(id));
};

//agregar producto
export const store = (product) => {
    product.id = ultimoId + 1;
    data2.push(product);
    ultimoId=product.id;
};

//Actualizar
export const update = (id, product) =>{
    const index = data2.findIndex((p) => p.id === Number(id));
    data2[index] = {
        ...data2[index],
        ...product,
    };
};

//eliminar
export const remove =(id) =>{
    const product = data2.filter((p) => p.id !== Number(id));
    data2.length = 0;
    data2.push(...product)
}