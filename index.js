import React, {PureComponent} from 'react';
import ReactDom from 'react-dom';
// import Convert from './Component/Convert';
import Main from './Component/Main';
// import Main from './Component/Module1';
// import TransactionList from './Component/TransactionList';
import './index.css';



 let root = document.querySelector('#root')
 ReactDom.render(<Main/>, root)