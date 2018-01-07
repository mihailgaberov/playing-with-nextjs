'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MyLayout = require('../components/MyLayout.js');

var _MyLayout2 = _interopRequireDefault(_MyLayout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\Git\\playing-with-nextjs\\pages\\post.js?entry';


var Content = function Content(props) {
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, _react2.default.createElement('h1', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, props.url.query.title), _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, 'This is the blog post content.'));
};

exports.default = function (props) {
  return _react2.default.createElement(_MyLayout2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, _react2.default.createElement(Content, { url: props.url, __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxwb3N0LmpzIl0sIm5hbWVzIjpbIkxheW91dCIsIkNvbnRlbnQiLCJwcm9wcyIsInVybCIsInF1ZXJ5IiwidGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVk7Ozs7Ozs7OztBQUVuQixJQUFNLFVBQVUsU0FBVixBQUFVLFFBQUEsQUFBQyxPQUFEO3lCQUNkLGNBQUE7O2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtBQUFBLEdBQUEsa0JBQ0UsY0FBQTs7Z0JBQUE7a0JBQUEsQUFBSztBQUFMO0FBQUEsV0FBSyxBQUFNLElBQU4sQUFBVSxNQURqQixBQUNFLEFBQXFCLEFBQ3JCLHdCQUFBLGNBQUE7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxLQUhZLEFBQ2QsQUFFRTtBQUhKLEFBT0E7O2tCQUFlLFVBQUEsQUFBQyxPQUFEO3lCQUNiLEFBQUM7O2dCQUFEO2tCQUFBLEFBQ0U7QUFERjtBQUFBLEdBQUEsZ0NBQ0UsQUFBQyxXQUFRLEtBQUssTUFBZCxBQUFvQjtnQkFBcEI7a0JBRlcsQUFDYixBQUNFO0FBQUE7O0FBRkoiLCJmaWxlIjoicG9zdC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJEOi9HaXQvcGxheWluZy13aXRoLW5leHRqcyJ9