const movies = [
  { 
    id: 1,
    filme: 'Senhor dos Anéis',
    genero: 'Fantasia',
    valor: 45.00
  }, 
  {
    id: 2, 
    filme: 'As Branquelas',
    genero: 'Comédia',
    valor: 55.00
  }, 
  {
    id: 3,
    filme: 'Velozes e Furiosos 7',
    genero: 'Ação',
    valor: 100.00
  },
  {
    id: 4,
    filme: 'Velozes e Furiosos 6',
    genero: 'Ação',
    valor: 55.00
  },
  {
    id: 5,
    filme: 'The Scapegoat',
    genero: 'Drama',
    valor: 100.00
  },
  {
    id: 6,
    filme: 'Meu Malvado Favorito',
    genero: 'Animação',
    valor: 200.00
  },
];

class Movie {
  calcTotal(valor, cart) {
    if (!valor) throw 'Error';
    if (!cart.length) throw 'Error'; 

    let discount = 0;
    const discountExtra = 0;

    for (const item of cart) {
      let genre = movies.find(element => element.id === item).genero;
      if (genre === 'Ação') {
        discountExtra = 5;
      }
    }

    if (valor >= 100 && valor <= 199) {
      discount = parseFloat(valor * ((discountExtra + 10) / 100));
    }

    if (valor >= 200 && valor <= 299) {
      discount = parseFloat(valor * ((discountExtra + 20) / 100));
    }

    if (valor >= 300 && valor <= 399) {
      discount = parseFloat(valor * ((discountExtra + 25) / 100));
    }

    if (valor >= 400) {
      discount = parseFloat(valor * ((discountExtra + 30) / 100));
    }

    return discount;
  }
};

export default Movie;
