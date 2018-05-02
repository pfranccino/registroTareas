const fs = require('fs');

const color = require('colors')

let saveData = [];


function writeData() {

    fs.writeFile('db/data.json', data, (err) => {
        if (err) {
            throw new Error('No se pudo grabar', err);
        } else {
            console.log('Accion registrada'.green);
        }
    });
}


let saveDB = () => {
    data = JSON.stringify(saveData);
    writeData(data);

}


let loadData = () => {

    try {

        saveData = require('../db/data.json');

    } catch (error) {

        saveData = [];
    }

}

let createWork = (descripcion) => {

    loadData();

    let work = {
        descripcion,
        estado: false
    }

    saveData.push(work);

    saveDB();
    return work;


}

let toList = () => {
    loadData();
    return saveData;
}

let deleteWork = (descripcion) => {

    loadData();
    let newSaveData = saveData.filter(work => {
        return work.descripcion !== descripcion

    });


    if (newSaveData.length === saveData) {
        console.log('No se ha eliminado la tarea'.red);
    } else {
        saveData = newSaveData;
        console.log('Tarea eliminada'.red);
        saveDB();
    }


}


let update = (descripcion, estado) => {

    loadData()

    let index = saveData.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        saveData[index].estado = estado
        saveDB();
        return console.log("Tarea actualizada".blue);
    } else {
        return console.log("No se pudo actualizar tarea".red);
    }
}




module.exports = {
    toList,
    createWork,
    update,
    deleteWork
}