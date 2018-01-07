'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MyLayout = require('../components/MyLayout.js');

var _MyLayout2 = _interopRequireDefault(_MyLayout);

var _link = require('next\\dist\\lib\\link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\Git\\playing-with-nextjs\\pages\\index.js?entry';


var PostLink = function PostLink(props) {
  return _react2.default.createElement('li', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement(_link2.default, { href: '/post?title=' + props.title, __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react2.default.createElement('a', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, props.title)));
};

exports.default = function () {
  return _react2.default.createElement(_MyLayout2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, _react2.default.createElement('h1', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, 'My Blog'), _react2.default.createElement('ul', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, _react2.default.createElement(PostLink, { title: 'Hello Next.js', __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }), _react2.default.createElement(PostLink, { title: 'Learn Next.js is awesome', __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }), _react2.default.createElement(PostLink, { title: 'Deploy apps with Zeit', __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  })));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJMYXlvdXQiLCJMaW5rIiwiUG9zdExpbmsiLCJwcm9wcyIsInRpdGxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU87Ozs7Ozs7OztBQUVQLElBQU0sV0FBVyxTQUFYLEFBQVcsU0FBQSxBQUFDLE9BQUQ7eUJBQ2YsY0FBQTs7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO0FBQUEsR0FBQSxrQkFDRSxBQUFDLGdDQUFLLHVCQUFxQixNQUEzQixBQUFpQztnQkFBakM7a0JBQUEsQUFDRTtBQURGO3FCQUNFLGNBQUE7O2dCQUFBO2tCQUFBLEFBQUk7QUFBSjtBQUFBLFdBSFcsQUFDZixBQUNFLEFBQ0UsQUFBVTtBQUhoQixBQVFBOztrQkFBZSxZQUFBO3lCQUNiLEFBQUM7O2dCQUFEO2tCQUFBLEFBQ0U7QUFERjtBQUFBLEdBQUEsa0JBQ0UsY0FBQTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBREYsQUFDRSxBQUNBLDRCQUFBLGNBQUE7O2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtBQUFBLG1DQUNFLEFBQUMsWUFBUyxPQUFWLEFBQWdCO2dCQUFoQjtrQkFERixBQUNFLEFBQ0E7QUFEQTtvQ0FDQSxBQUFDLFlBQVMsT0FBVixBQUFnQjtnQkFBaEI7a0JBRkYsQUFFRSxBQUNBO0FBREE7b0NBQ0EsQUFBQyxZQUFTLE9BQVYsQUFBZ0I7Z0JBQWhCO2tCQU5TLEFBQ2IsQUFFRSxBQUdFO0FBQUE7O0FBTk4iLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiRDovR2l0L3BsYXlpbmctd2l0aC1uZXh0anMifQ==