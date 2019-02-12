(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');

  var NxDomAttribute = nx.declare('nx.DomAttribute', {
    statics: {
      set: function(inElement, inProp, inValue) {
        if (inValue == null) {
          inElement.removeAttribute(inProp);
        } else {
          inElement.setAttribute(inProp, inValue);
        }
      },
      get: function(inElement, inProp) {
        return inElement.getAttribute(inProp);
      },
      sets: function(inElement, inProps) {
        nx.forIn(
          inProps,
          function(key, value) {
            this.set(inElement, key, value);
          },
          this
        );
      },
      gets: function(inElement) {
        var attributes = {};
        nx.forEach(inElement.attributes, function(attr) {
          attributes[attr.name] = attr.value;
        });
        return attributes;
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxDomAttribute;
  }
})();
