(function () {

  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');

  var NxDomAttribute = nx.declare('nx.DomAttribute', {
    methods: {
      init: function (inElement) {
        this.element = inElement;
      },
      set: function (inKey, inValue) {
        this.element.setAttribute(inKey, inValue);
      },
      get: function (inKey) {
        this.element.getAttribute(inKey);
      },
      remove: function (inKey) {
        this.element.removeAttribute(inKey);
      },
    }
  });


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxDomAttribute;
  }

}());
