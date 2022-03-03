const empleados = [
    {
        id: 1,
        nombre: 'Marisol'
    },
    {
        id: 2,
        nombre: 'Andrea'
    },
    {
        id: 3,
        nombre: 'Marlene'
    }
];

const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1500
    },
];

const getEmpleado = ( id ) => {
    return new Promise( (resolve, reject) => {
        const empleado = empleados.find( (e) => e.id == id )?.nombre;

       (empleado) ? resolve(empleado) : reject(`No existe empleado con id ${id}`);
        
    });
}

const getSalario = ( id ) => {
    return new Promise( (resolve, reject) => {
        const salario = salarios.find( (s) => s.id == id )?.salario;

        (salario) ? resolve(salario) : reject(`El salario para el empleado con id ${id} no existe`)
    });
}

const getInfoUsuario = async( id ) => {

    try{
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);
        return `El salario del empleado ${empleado} es de ${salario}`;
    } catch(err) {
        throw err;
    }
   
    
}

const id = 3;

getInfoUsuario( id )
    .then(msg => console.log(msg))
    .catch(err => console.log(err));