// const data = [
//   {
//     id: 1,
//     name: "Pepe",
//     last_name: "Perez",
//   },
// ];
const data =[
]

 let ultimoId = 0;

//listar todo
export const findAll = () => {
  return data;
};

//buscar por el id
export const findOne = (id) => {
  return data.find((u) => u.id === Number(id));
};

//agregar producto
export const store = (user) => {
  
  user.id = ultimoId + 1;
  data.push(user);
  ultimoId=user.id;
};

//Actualizar
export const update = (id, user) => {
  const index = data.findIndex((u) => u.id === Number(id));

  data[index] = {
    ...data[index],
    ...user,
  };
};

//eliminar
export const remove = (id) => {
  const users = data.filter((u) => u.id !== Number(id));

  data.length = 0;
  data.push(...users);
};
