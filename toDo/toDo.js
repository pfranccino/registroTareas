const fs = require('fs');

const color = require('colors')

let saveData = [];


function writeData() {

    fs.writeFile('db/data.json', data, (err) => {
        if (err) {
            throw new Error('No se pudo grabar', err);
        } else {
            console.log('Tarea generada'.green);
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


module.exports = {
    toList,
    createWork,
    loadData,
    writeData

}