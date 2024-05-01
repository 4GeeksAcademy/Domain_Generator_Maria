let pronouns = ['the', 'our'];
let adjs = ['amazing', 'little'];
let nouns = ['dog', 'guy'];
let extensions = ['net', 'com', 'io', 'us'];

let nombresDominios = [];

// for (let i = 0; i < pronouns.length; i++) {
//   for (let j = 0; j < adjs.length; j++) {
//       for (let k = 0; k < nouns.length; k++) {
//         nombresDominios.push(pronouns[i] + adjs[j] + nouns[k] + '.com');
//       }
//   }
// }

// for (let f = 0; f < nombresDominios.length; f++) {
//   console.log(nombresDominios[f]);
// }





pronouns.forEach(pronoun =>{
  adjs.forEach(adj =>{
      nouns.forEach(noun =>{
          extensions.forEach(extension =>{
              nombresDominios.push(pronoun + adj + noun + extension);
          });
      });
  });
});

console.log(nombresDominios);