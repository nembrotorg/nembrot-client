import <%= upCaseName %> from './<%= name %>'

describe('<%= upCaseName %>', () => {
  let makeService;

  beforeEach(window.module(<%= upCaseName %>.name));
  beforeEach(function() {
    makeService = () => {
      return new <%= upCaseName %>();
    };
  });

  describe('Service', () => {
    describe('.do', () => {
      it('modifies input', () => {
        let service = makeService();
        expect(service.do('a')).to.equal('ab');
      });
    });
  });
});
