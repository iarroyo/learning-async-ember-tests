import Controller from '@ember/controller';
//import { later } from '@ember/runloop';
import { tracked } from '@glimmer/tracking';

export default class Stage1Controller extends Controller {
  @tracked
  showStage1SubList = false;

  /*constructor() {
    super();
    //setTimeout(() => (this.showStage1SubList = true), 500);
    later(() => (this.showStage1SubList = true), 2500); //THIS SEEMS TO BE BLOCKING because of the settled on test!!
  }*/
}
