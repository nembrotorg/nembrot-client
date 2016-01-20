import PaginationModule from './pagination'
import PaginationController from './pagination.controller';
import PaginationComponent from './pagination.component';
import PaginationTemplate from './pagination.html';

describe('Pagination', () => {
  let $rootScope, $stateParams, makeController;

  beforeEach(window.module(PaginationModule.name));
  beforeEach(inject((_$rootScope_, _$stateParams_) => {
    $rootScope = _$rootScope_;
    $stateParams = _$stateParams_;
    $stateParams.p = 1;
    makeController = () => {
      return new PaginationController($stateParams);
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property', () => {
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has pagination HTML', () => {
      expect(PaginationTemplate).to.match(/nav\sclass\s?=\s?\"pagination\"/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = PaginationComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(PaginationTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(PaginationController);
      });
  });
});
