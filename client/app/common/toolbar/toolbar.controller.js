class ToolbarController {
  constructor($rootScope, $location) {
    this.name = 'toolbar';
    this.xxx = 'ppp';
    this.shareable_url = $location;

    let scope = $rootScope;
    scope.$watch($location, (newValue) => console.log(newValue))

  }
}

export default ToolbarController;
