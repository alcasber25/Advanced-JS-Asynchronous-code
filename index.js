//RESUELVE TUS EJERCICIOS AQUI
//Prueba de la API
fetch("https://dog.ceo/api/breeds/list/all")
    .then(response => {
        if (!response.ok) throw new Error('Error');
        return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.error('Hubo un problema:', error));


//EJERCIO 1

// FUNCIÓN getAllBreeds()
//   try
//     Pedir datos a la API
//     Convertir a objeto
//     Sacar los nombres de las razas
//     Devolver lista de razas
//   catch
//     Mostrar error

const getAllBreeds = async () => {
    try {
        const response = await fetch('https://dog.ceo/api/breeds/list/all');
        const data = await response.json();
        return Object.keys(data.message);
    } catch (error) {
        console.error('Error:', error);
    }
}

//EJERCIO 2
// FUNCIÓN getRandomDog()
//   try
//     Pedir imagen a la API
//     Convertir a objeto
//     Sacar la URL de la imagen
//     Devolver la URL
//   catch
//     Mostrar error

const getRandomDog = async () => {
    try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await response.json();
        return data.message;
    } catch (error) {
        console.error('Error:', error);
    }
}

//EJERCIO 3

// 3.- Declara una función **getAllImagesByBreed** que obtenga todas las imágenes de la raza komondor.

// FUNCIÓN getAllImagesByBreed()
//   try
//     Pedir imagen a la API
//     Convertir a objeto
//     Sacar la URL de la imagen de la raza komondor
//     Devolver la URL
//   catch
//     Mostrar error

const getAllImagesByBreed = async () => {
    try {
        const response = await fetch ('https://dog.ceo/api/breed/komondor/images')
        const data = await response.json();
        return data.message;
    }catch (error) {
        console.error('Error:', error);
    }
}