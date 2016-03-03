import Book from './book'

describe('Book', () => {
  let makeFactory;

  beforeEach(window.module(Book.name));
  beforeEach(function() {
    makeFactory = () => {
      return new Book();
    };
  });

  describe('Service', () => {
    describe('.do', () => {
      it('modifies input', () => {
        let factory = makeFactory();
        expect(factory.do('a')).to.equal('ab');
      });
    });
  });
});
