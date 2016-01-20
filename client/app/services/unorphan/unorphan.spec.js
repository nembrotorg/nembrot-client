import Unorphan from './unorphan'

describe('Unorphan', () => {
  let makeService;

  beforeEach(window.module(Unorphan.name));
  beforeEach(function() {
    makeService = () => {
      return new Unorphan();
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
