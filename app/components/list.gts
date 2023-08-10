import Component from '@glimmer/component';
//import { tracked } from '@glimmer/tracking';
import { tracked } from 'tracked-built-ins';
import { later } from '@ember/runloop';
import { on } from '@ember/modifier';
import { RemoteData } from 'ember-resources/util/remote-data';

/*
let show = tracked({value:false});
const getValue = (obj, key) => obj[key];
const gt = (leftValue, rightValue) => leftValue > rightValue;

const setupTimer = (timeout)=>{
  console.log('setupTimer')
  setTimeout(() => {
    console.log('setTimeout')
    show.value = true;
  }, timeout ?? 0);
} 

<template>
  {{(setupTimer @timeout)}}
  {{log show.value @id @timeout}}
  {{#if show.value}}
    {{log @id}}
    <div class="border p-4 grid gap-4" ...attributes>
      {{#let (RemoteData @url) as |request|}}
          {{#if request.isLoading}}
            <span data-test-list-loader>... loading</span>
          {{else if request.value}}
            {{#each request.value as |item|}}
              <div class="flex">
                {{#if @attrs}}
                  {{#each @attrs as |attr index|}}
                    {{~#if (this.gt index 0)}}
                      <span>&nbsp;-&nbsp;</span>
                    {{/if~}}
                    <div>{{(this.getValue item attr)}}</div>
                  {{/each}}
                {{else}}
                  <div>{{item}}</div>
                {{/if}}
              </div>
            {{/each}}
            {{#if (has-block 'end')}}
              {{yield to='end'}}
            {{else}}
              <div data-test-list-end>end</div>
            {{/if}}
          {{/if}}
      {{/let}}
    </div>
  {{/if}}
</template>
*/

/* Class Version */
interface ListSignature {
  Args: {
    url: string
    attrs?: Array<string>
    timer?: number;
  },
  Element: HTMLElement
}

export default class List extends Component<ListSignature> {

  constructor(owner:unknown, args: ListSignature.Args){
    super(owner, args);
    if(args.timeout){
      //setTimeout(() => this.show =true, args.timeout);
      later(() => this.show =true, args.timeout);
    }
  }

  getValue = (obj, key) => obj[key];
  gt = (leftValue, rightValue) => leftValue > rightValue;

  @tracked
  show = this.args.timeout ? false : true;

  <template>
    {{log @id}}
    <div class="border p-4 grid gap-4" ...attributes>
      {{#if this.show}}
        {{#let (RemoteData @url) as |request|}}
            {{#if request.isLoading}}
              <span data-test-list-loader>... loading</span>
            {{else if request.value}}
              {{#each request.value as |item|}}
                <div class="flex">
                  {{#if @attrs}}
                    {{#each @attrs as |attr index|}}
                      {{~#if (this.gt index 0)}}
                        <span>&nbsp;-&nbsp;</span>
                      {{/if~}}
                      <div>{{(this.getValue item attr)}}</div>
                    {{/each}}
                  {{else}}
                    <div>{{item}}</div>
                  {{/if}}
                </div>
              {{/each}}
              {{#if (has-block 'end')}}
                {{yield to='end'}}
              {{else}}
                <div data-test-list-end>end</div>
              {{/if}}
            {{/if}}
        {{/let}}
      {{/if}}
    </div>
  </template>
}