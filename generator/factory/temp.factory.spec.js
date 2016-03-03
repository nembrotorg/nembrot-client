import <%= upCaseName %> from './<%= name %>'

describe('<%= upCaseName %>', () => {
  let makeFactory;

  beforeEach(window.module(<%= upCaseName %>.name));
  beforeEach(function() {
    makeFactory = () => {
      return new <%= upCaseName %>();
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
