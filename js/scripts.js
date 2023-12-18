// // const alessio = [
// //     'Alessio',
// //     'Vietri',
// //     '25/11/1991',
// //     175,
// //     false,
// //     [
// //         'php',
// //         'js'
// //     ]
// // ];

// // const nomiValoriInAlessio = [
// //     'firstName',
// //     'lastName',
// //     'birthDate',
// //     'height',
// //     'married',
// //     'knownLanguages'
// // ];

// // for (let i = 0; i < alessio.length; i++) {
// //     console.log(nomiValoriInAlessio[i] + ':', alessio[i]);    
// // }

// const alessio = {
//     firstName: 'Alessio',
//     lastName: 'Vietri',
//     birthDate: '25/11/1991',
//     height: 175,
//     // key: 'Questo è il valore della chiave key',
//     married: false,
//     knownLanguages: [
//         'php',
//         'js',
//         'python',
//         'java',
//         'c++',
//     ],
//     actualClass: {
//         number: 114,
//         students: [
//             'Francesco Folgheraiter',
//             'Diego Farrugio'
//         ]
//     }
// };

// console.log('alessio', alessio, typeof alessio);
// console.log('nome di alessio', alessio.firstName, typeof alessio.firstName);
// console.log('married di alessio', alessio.married, typeof alessio.married);
// console.log('knownLanguages di alessio', alessio.knownLanguages, typeof alessio.knownLanguages);

// console.log('Tutti i linguaggi conosciuti da Alessio:');

// for (let i = 0; i < alessio.knownLanguages.length; i++) {
//     console.log('-', alessio.knownLanguages[i]);
// }



// for (let key in alessio) {
//     // Questo funziona: perché mi va a prendere SEMPRE il valore della chiave che ha il nome corrispondente alla stringa che c'è DENTRO la variabile key
//     console.log(key + ':', alessio[key]);
//     // Questo NON funziona: perché così mi va a prendere SEMPRE il valore della chiave che si chiama "key"
//     console.log(key + ':', alessio.key);
// }
















// const students114 = [];

// /* SOLUZIONE 1 */
// // const danieleAngeletti = {
// //     nome: 'Daniele',
// //     cognome: 'Angeletti',
// //     dataNascita: '19/08/1996'
// // };

// // students114.push(danieleAngeletti);
// // console.log('students114', students114, typeof students114);

// // students114.push({
// //     nome: 'Jordan',
// //     cognome: 'Romagnoli',
// //     dataNascta: '19/08/1996'
// // });
// // console.log('students114', students114, typeof students114);

// // console.log('Tutti gli studenti di classe 114:');
// // for (let i = 0; i < students114.length; i++) {
// //     console.log('-', students114[i].nome, students114[i].cognome, students114[i].dataNascita);
// // }


// /* SOLUZIONE 2 */
// const danieleAngeletti = createStudentObject('Daniele', 'Angeletti', '19/08/1996');
// danieleAngeletti['nome'] = 'Daniel';
// const nuovaChiave = 'peso';
// danieleAngeletti[nuovaChiave] = 55;

// students114.push(danieleAngeletti);
// students114[0].cognome = 'Little Angels';
// console.log('students114', students114, typeof students114);

// students114.push(createStudentObject('Jordan', 'Romagnoli', '19/08/1996'));
// console.log('students114', students114, typeof students114);

// // Ad un certo punto, voglio cambiare il nome di Jordan in Giordano:
// students114[1]['nome'] = 'Giordano';
// students114[1].peso = 60;

// console.log('Tutti gli studenti di classe 114:');
// // const stringaCheMiIdentificaIlNome = 'nome';
// let stringaCheMiIdentificaIlNome = 'nome';
// if (Math.floor(Math.random() * 10) % 2 == 0) {
//     stringaCheMiIdentificaIlNome = 'cog' + stringaCheMiIdentificaIlNome;
// }

// for (let i = 0; i < students114.length; i++) {
//     console.log('-', students114[i][stringaCheMiIdentificaIlNome], students114[i].cognome, students114[i].dataNascita);
// }


// function createStudentObject(nome, cognome, dataNascita) {
//     const newStudent = {
//         nome: nome,
//         cognome: cognome,
//         dataNascita: dataNascita,
//     };

//     return newStudent;
// }









const classi = [
    {
       'nome' : 'Classe#1',
       'numeroStudenti' : 10,
    },
    {
       'nome' : 'Classe#2',
       'numeroStudenti' : 12,
    },
];

console.log(classi);

const classe3 = {
    nome: 'Classe#3',
    numeroStudenti: 14
};

console.log(classe3);

classi.push(classe3);

console.log(classi);

for (let i = 0; i < classi.length; i++) {
    console.log('-', classi[i]);
    // console.log('-- Nome:', classi[i].nome);
    // console.log('-- Numero studenti:', classi[i].numeroStudenti);

    for (let key in classi[i]) {
        console.log('-- ' + key + ':', classi[i][key]);
    }
}


console.log('console', console, typeof console);