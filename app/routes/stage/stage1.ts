import Route from '@ember/routing/route';
import Transition from '@ember/routing/transition';
import { later } from '@ember/runloop';
import Stage1Controller from 'learning-async-ember-tests/controllers/stage/stage1';

export default class StageStage1Route extends Route {
  setupController(
    controller: Stage1Controller,
    _model: unknown,
    _transition: Transition<unknown>
  ): void {
    //setTimeout(() => (this.showStage1SubList = true), 500);
    later(() => (controller.showStage1SubList = true), 2500); //THIS SEEMS TO BE BLOCKING - What the HELL!!
  }
}
