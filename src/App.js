import React from 'react';
import ReactDOM from 'react-dom';
// import test from './css/test.scss';
import '../src/css/reset.scss';
import '../src/css/rwd.scss';
import '../src/css/common.scss';
import '../src/css/index.scss';

import  {Test}  from './js/component/test.jsx';
// let Test = () => {
//     return <div>0009998</div>
// }

ReactDOM.render(<Test />, document.getElementById('root'));