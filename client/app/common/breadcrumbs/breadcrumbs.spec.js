import BreadcrumbsModule from './breadcrumbs'
import BreadcrumbsController from './breadcrumbs.controller';
import BreadcrumbsComponent from './breadcrumbs.component';
import BreadcrumbsTemplate from './breadcrumbs.html';

describe('Breadcrumbs', () => {
  let $rootScope, makeController;

  beforeEach(window.module(BreadcrumbsModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new BreadcrumbsController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(BreadcrumbsTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = BreadcrumbsComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(BreadcrumbsTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(BreadcrumbsController);
      });
  });
});
