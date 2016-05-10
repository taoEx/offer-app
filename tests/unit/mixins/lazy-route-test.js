/* jshint expr:true */
import { expect } from 'chai';
import {
  describe,
  it
} from 'mocha';
import Ember from 'ember';
import LazyRouteMixin from 'offer-app/mixins/lazy-route';

describe('LazyRouteMixin', function() {
  // Replace this with your real tests.
  it('works', function() {
    let LazyRouteObject = Ember.Object.extend(LazyRouteMixin);
    let subject = LazyRouteObject.create();
    expect(subject).to.be.ok;
  });
});
