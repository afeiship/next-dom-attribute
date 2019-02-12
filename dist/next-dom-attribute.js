(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');

  var NxDomAttribute = nx.declare('nx.DomAttribute', {
    statics: {
      set: function(inElement, inKey, inValue) {
        if (inValue == null) {
          inElement.removeAttribute(inKey);
        } else {
          inElement.setAttribute(inKey, inValue);
        }
      },
      get: function(inElement, inKey) {
        return inElement.getAttribute(inKey);
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxDomAttribute;
  }
})();
