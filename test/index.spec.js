import {Container} from 'aurelia-dependency-injection';
import {FormRendererBootstrap} from '../src/index';

describe('FormRendererBootstrap', function() {
  describe('render()', function() {
    it('Should render', function() {
      let renderer = (new Container).get(FormRendererBootstrap);
      expect(typeof renderer.render).toBe('function');
    });
  });

  describe('add()', function() {
    it('Should add', function() {
      let renderer = (new Container).get(FormRendererBootstrap);
      expect(typeof renderer.add).toBe('function');
    });
  });

  describe('remove()', function() {
    it('Should remove', function() {
      let renderer = (new Container).get(FormRendererBootstrap);
      expect(typeof renderer.remove).toBe('function');
    });
  });
});
