class ToolbarController {
  constructor($location) {
    this.name = 'toolbar';
    this.shareableUrl = $location.absUrl();

  }
}

export default ToolbarController;
