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
    it('has a name property', () => {
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('contains breadcrumbs HTML', () => {
      expect(BreadcrumbsTemplate).to.match(/ol\sclass\s?=\s?"breadcrumb"/g);
    });
    it('iterates through vm.crumbs', () => {
      expect(BreadcrumbsTemplate).to.match(/ng-repeat\s?=\s?\"crumb in vm\.crumbs\"/g);
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
