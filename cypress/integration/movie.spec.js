/// <reference types="cypress" />

import Movie from '../../movie/movie.js'

const movie = new Movie();

describe('Unit Test Application Code', function () {
  context('movie.js', function () {
    it('Abaixo de R$100', function () {
      expect(movie.calcTotal(10, [2])).to.eq(0);
    });

    it('Acima de R$ 100 e abaixo de R$ 200 => 10%', function () {
      expect(movie.calcTotal(100, [2,3])).to.eq(15);
    });

    it('Acima de R$ 200 e abaixo de R$ 300 => 20%', function () {
      expect(movie.calcTotal(200, [2,6])).to.eq(40);
    });

    it('Acima de R$ 300 e abaixo de R$ 400 => 25%', function () {
      expect(movie.calcTotal(300, [3,2,6])).to.eq(90);
    });

    it('Acima de R$ 400 => 30%', function () {
      expect(movie.calcTotal(400, [3,4,5,6])).to.eq(140);
    });

    it('Try Catch não implementado', function () {
      expect(movie.calcTotal(null, [null])).to.eq('Error');
    });
  });
});
