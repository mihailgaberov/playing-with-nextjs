'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MyLayout = require('../components/MyLayout.js');

var _MyLayout2 = _interopRequireDefault(_MyLayout);

var _isomorphicUnfetch = require('isomorphic-unfetch');

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\Git\\playing-with-nextjs\\pages\\post.js?entry';


var Post = function Post(props) {
  return _react2.default.createElement(_MyLayout2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement('h1', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, props.show.name), _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, props.show.summary.replace(/<[/]?p>/g, '')), _react2.default.createElement('img', { src: props.show.image.medium, __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }));
};

Post.getInitialProps = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(context) {
    var id, res, show;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id = context.query.id;
            _context.next = 3;
            return (0, _isomorphicUnfetch2.default)('https://api.tvmaze.com/shows/' + id);

          case 3:
            res = _context.sent;
            _context.next = 6;
            return res.json();

          case 6:
            show = _context.sent;

            console.log('Fetched show: ' + show.name);

            return _context.abrupt('return', { show: show });

          case 9:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = Post;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxwb3N0LmpzIl0sIm5hbWVzIjpbIkxheW91dCIsImZldGNoIiwiUG9zdCIsInByb3BzIiwic2hvdyIsIm5hbWUiLCJzdW1tYXJ5IiwicmVwbGFjZSIsImltYWdlIiwibWVkaXVtIiwiZ2V0SW5pdGlhbFByb3BzIiwiY29udGV4dCIsImlkIiwicXVlcnkiLCJyZXMiLCJqc29uIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU87Ozs7Ozs7OztBQUVQLElBQU0sT0FBTyxTQUFQLEFBQU8sS0FBQSxBQUFDLE9BQUQ7eUJBQ1gsQUFBQzs7Z0JBQUQ7a0JBQUEsQUFDRTtBQURGO0FBQUEsR0FBQSxrQkFDRSxjQUFBOztnQkFBQTtrQkFBQSxBQUFLO0FBQUw7QUFBQSxXQUFLLEFBQU0sS0FEYixBQUNFLEFBQWdCLEFBQ2hCLHVCQUFBLGNBQUE7O2dCQUFBO2tCQUFBLEFBQUk7QUFBSjtBQUFBLFdBQUksQUFBTSxLQUFOLEFBQVcsUUFBWCxBQUFtQixRQUFuQixBQUEyQixZQUZqQyxBQUVFLEFBQUksQUFBdUMsQUFDM0MsNkNBQUssS0FBSyxNQUFBLEFBQU0sS0FBTixBQUFXLE1BQXJCLEFBQTJCO2dCQUEzQjtrQkFKUyxBQUNYLEFBR0U7QUFBQTs7QUFKSjs7QUFRQSxLQUFBLEFBQUssOEJBQUw7c0ZBQXVCLGlCQUFBLEFBQWdCLFNBQWhCO2lCQUFBO2tFQUFBO2dCQUFBO3lDQUFBO2VBQ2I7QUFEYSxpQkFDTixRQURNLEFBQ0UsTUFERixBQUNiOzRCQURhO21CQUVILG1FQUZHLEFBRUgsQUFBc0M7O2VBQWxEO0FBRmUsMkJBQUE7NEJBQUE7bUJBR0YsSUFIRSxBQUdGLEFBQUk7O2VBQWpCO0FBSGUsNEJBS3JCOztvQkFBQSxBQUFRLHVCQUFxQixLQUxSLEFBS3JCLEFBQWtDOzs2Q0FFM0IsRUFBRSxNQVBZLEFBT2Q7O2VBUGM7ZUFBQTs0QkFBQTs7QUFBQTtnQkFBQTtBQUF2Qjs7dUJBQUE7NEJBQUE7QUFBQTtBQVVBOztrQkFBQSxBQUFlIiwiZmlsZSI6InBvc3QuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiRDovR2l0L3BsYXlpbmctd2l0aC1uZXh0anMifQ==