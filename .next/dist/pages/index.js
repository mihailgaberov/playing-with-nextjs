'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx\\style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MyLayout = require('../components/MyLayout.js');

var _MyLayout2 = _interopRequireDefault(_MyLayout);

var _link = require('next\\dist\\lib\\link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\Git\\playing-with-nextjs\\pages\\index.js?entry';


function getPosts() {
  return [{ id: 'hello-nextjs', title: 'Hello Next.js' }, { id: 'learn-nextjs', title: 'Learn Next.js is awesome' }, { id: 'deploy-nextjs', title: 'Deploy apps with ZEIT' }];
}

var PostLink = function PostLink(_ref) {
  var post = _ref.post;
  return _react2.default.createElement('li', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, _react2.default.createElement(_link2.default, { as: '/p/' + post.id, href: '/post?title=' + post.title, __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, _react2.default.createElement('a', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, post.title)));
};

exports.default = function () {
  return _react2.default.createElement(_MyLayout2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, _react2.default.createElement('h1', {
    className: 'jsx-2987328901',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, 'My Blog'), _react2.default.createElement('ul', {
    className: 'jsx-2987328901',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, getPosts().map(function (post) {
    return _react2.default.createElement(PostLink, { key: post.id, post: post, __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      }
    });
  })), _react2.default.createElement(_style2.default, {
    styleId: '2987328901',
    css: 'h1.jsx-2987328901,a.jsx-2987328901{font-family:"Arial";}ul.jsx-2987328901{padding:0;}li.jsx-2987328901{list-style:none;margin:5px 0;}a.jsx-2987328901{text-decoration:none;color:blue;}a.jsx-2987328901:hover{opacity:0.6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcz9lbnRyeSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyQmdCLEFBRzZCLEFBSVYsQUFJTSxBQUtLLEFBS1QsVUFiZCxFQWNBLElBVmUsSUFSZixDQWFhLFFBSmIsR0FLQSIsImZpbGUiOiJwYWdlc1xcaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiRDovR2l0L3BsYXlpbmctd2l0aC1uZXh0anMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTXlMYXlvdXQuanMnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmZ1bmN0aW9uIGdldFBvc3RzKCkge1xyXG4gIHJldHVybiBbXHJcbiAgICB7IGlkOiAnaGVsbG8tbmV4dGpzJywgdGl0bGU6ICdIZWxsbyBOZXh0LmpzJyB9LFxyXG4gICAgeyBpZDogJ2xlYXJuLW5leHRqcycsIHRpdGxlOiAnTGVhcm4gTmV4dC5qcyBpcyBhd2Vzb21lJyB9LFxyXG4gICAgeyBpZDogJ2RlcGxveS1uZXh0anMnLCB0aXRsZTogJ0RlcGxveSBhcHBzIHdpdGggWkVJVCcgfSxcclxuICBdXHJcbn1cclxuXHJcbmNvbnN0IFBvc3RMaW5rID0gKHsgcG9zdCB9KSA9PiAoXHJcbiAgPGxpPlxyXG4gICAgPExpbmsgYXM9e2AvcC8ke3Bvc3QuaWR9YH0gaHJlZj17YC9wb3N0P3RpdGxlPSR7cG9zdC50aXRsZX1gfT5cclxuICAgICAgPGE+e3Bvc3QudGl0bGV9PC9hPlxyXG4gICAgPC9MaW5rPlxyXG4gIDwvbGk+XHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcclxuICA8TGF5b3V0PlxyXG4gICAgPGgxPk15IEJsb2c8L2gxPlxyXG4gICAgPHVsPlxyXG4gICAgICB7Z2V0UG9zdHMoKS5tYXAoKHBvc3QpID0+IChcclxuICAgICAgICA8UG9zdExpbmsga2V5PXtwb3N0LmlkfSBwb3N0PXtwb3N0fSAvPlxyXG4gICAgICApKX1cclxuICAgIDwvdWw+XHJcbiAgICA8c3R5bGUganN4PntgXHJcbiAgICAgIGgxLCBhIHtcclxuICAgICAgICBmb250LWZhbWlseTogXCJBcmlhbFwiO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB1bCB7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgbGkge1xyXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgbWFyZ2luOiA1cHggMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgYSB7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIGNvbG9yOiBibHVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBhOmhvdmVyIHtcclxuICAgICAgICBvcGFjaXR5OiAwLjY7XHJcbiAgICAgIH1cclxuICAgIGB9PC9zdHlsZT5cclxuICA8L0xheW91dD5cclxuKSJdfQ== */\n/*@ sourceURL=pages\\index.js?entry */'
  }));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJMYXlvdXQiLCJMaW5rIiwiZ2V0UG9zdHMiLCJpZCIsInRpdGxlIiwiUG9zdExpbmsiLCJwb3N0IiwibWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPOzs7Ozs7Ozs7QUFFUCxTQUFBLEFBQVMsV0FBVyxBQUNsQjtTQUFPLENBQ0wsRUFBRSxJQUFGLEFBQU0sZ0JBQWdCLE9BRGpCLEFBQ0wsQUFBNkIsbUJBQzdCLEVBQUUsSUFBRixBQUFNLGdCQUFnQixPQUZqQixBQUVMLEFBQTZCLDhCQUM3QixFQUFFLElBQUYsQUFBTSxpQkFBaUIsT0FIekIsQUFBTyxBQUdMLEFBQThCLEFBRWpDOzs7QUFFRCxJQUFNLFdBQVcsU0FBWCxBQUFXLGVBQUE7TUFBQSxBQUFHLFlBQUgsQUFBRzt5QkFDbEIsY0FBQTs7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO0FBQUEsR0FBQSxrQkFDRSxBQUFDLGdDQUFLLFlBQVUsS0FBaEIsQUFBcUIsSUFBTSx1QkFBcUIsS0FBaEQsQUFBcUQ7Z0JBQXJEO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxjQUFBOztnQkFBQTtrQkFBQSxBQUFJO0FBQUo7QUFBQSxVQUhXLEFBQ2YsQUFDRSxBQUNFLEFBQVM7QUFIZixBQVFBOztrQkFBZSxZQUFBO3lCQUNiLEFBQUM7O2dCQUFEO2tCQUFBLEFBQ0U7QUFERjtBQUFBLEdBQUEsa0JBQ0UsY0FBQTtlQUFBOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsS0FERixBQUNFLEFBQ0EsNEJBQUEsY0FBQTtlQUFBOztnQkFBQTtrQkFBQSxBQUNHO0FBREg7QUFBQSxnQkFDRyxBQUFXLElBQUksVUFBQSxBQUFDLE1BQUQ7eUNBQ2QsQUFBQyxZQUFTLEtBQUssS0FBZixBQUFvQixJQUFJLE1BQXhCLEFBQThCO2tCQUE5QjtvQkFEYyxBQUNkO0FBQUE7S0FBQTtBQUpOLEFBRUUsQUFDRzthQUhMO1NBRGEsQUFDYjtBQUFBO0FBREYiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiRDovR2l0L3BsYXlpbmctd2l0aC1uZXh0anMifQ==