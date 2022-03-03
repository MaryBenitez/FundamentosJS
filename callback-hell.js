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

const getEmpleado = ( id, callback ) => {
    const empleado = empleados.find( (e) => e.id == id )

    if(empleado){
        callback(null, empleado);
    } else {
         callback(`Empleado con id ${id} no existe`)
    }

}

const getSalario = ( id, callback ) => {
    const salario = salarios.find( (s) => s.id == id )?.salario;

    if(salario){
        callback(null, salario);
    } else {
         callback(`El salario para el empleado con id ${id} no existe`);
    }

}

const id = 3;

//console.log( getEmpleado(2) );

getEmpleado(id, (err, empleado) => {

    if(err){
        console.log('ERROR!!');
        console.log(err);
    } else {
        console.log('Empleado existe!');
        console.log(empleado.nombre);

        getSalario(id, (err, salario) => {

            if(err){
                console.log('ERROR!!');
                console.log(err);
            } else {
                console.log('El empleado', empleado.nombre, 'tiene un salario de', salario);
            }

        });
    }
    
});




