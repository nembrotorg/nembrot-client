import Deorphanise from './deorphanise'

describe('Deorphanise', () => {
  let makeService;

  beforeEach(window.module(Deorphanise.name));
  beforeEach(function() {
    makeService = () => {
      return new Deorphanise();
    };
  });

  describe('Service', () => {
    describe('.text', () => {
      it('adds nbsp to last space in text', () => {
        let service = makeService();
        expect(service.text('aaa bbb ccc'))
          .to.equal('aaa bbb\xA0ccc');
      });
    });

    describe('.html', () => {
      it('adds nbsp to last space in html', () => {
        let service = makeService();
        expect(service.html('<p>aaa bbb ccc</p><p>aaa bbb ccc</p>'))
          .to.equal('<p>aaa bbb\xA0ccc</p><p>aaa bbb\xA0ccc</p>');
      });
    });

    describe('.paragraphs', () => {
      it('adds nbsp to last space in paragraphs', () => {
        let service = makeService();
        expect(service.paragraphs('<p>aaa bbb ccc<span>aaa bbb ccc</span>aaa bbb</p>'))
          .to.equal('<p>aaa bbb ccc<span>aaa bbb ccc</span>aaa\xA0bbb</p>');
      });
      it('adds nbsp to last space in list items', () => {
        let service = makeService();
        expect(service.paragraphs('<p>aaa bbb ccc<ol><li>aaa bbb ccc</li></ol>aaa bbb</p>'))
          .to.equal('<p>aaa bbb ccc<ol><li>aaa bbb\xA0ccc</li></ol>aaa\xA0bbb</p>');
      });
    });
  });
});
