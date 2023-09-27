// Génération d'un nombre aléatoire entre min & max
export const getRandomIndex = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  };