import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import {useDispatch, useSelector} from "react-redux";

import TreeView from "@material-ui/lab/TreeView";
import TreeItem from "@material-ui/lab/TreeItem";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

// saga
import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware } from "redux";
import {CategoryDetails} from "./Redux/Actions/CategoryAction";
import { Provider } from "react-redux";
import reducer from "./reducer";
import rootSaga from "./saga";

const sagaMiddleware = createSagaMiddleware();
// Create redux store with history
const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

const getTreeItemsFromData = treeItems => {
  return treeItems.map(treeItemData => {
    let subCate = undefined;
    if (treeItemData.subCate && treeItemData.subCate.length > 0) {
      subCate = getTreeItemsFromData(treeItemData.subCate);
    }
    return (
      <TreeItem
        key={treeItemData.id}
        nodeId={treeItemData.id.toString()}
        label={treeItemData.name}
        children={subCate}
      />
    );
  });
};

const DataTreeView = ({ treeItems }) => {
  const Contextmenu = (e) => {
    e.preventDefault();
    if (e.type === 'contextmenu') {
      console.log('Right click');
    }
  }

  return (
    <TreeView
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      onContextMenu={(e) => Contextmenu(e)}
    >
      {getTreeItemsFromData(treeItems)}
    </TreeView>
  );
};

function App() {

  const dispatch = useDispatch();
  const { CustomerDetails } = useSelector(
      state => ({
        CustomerDetails: state.CategoryDetailsReducer.data,
      })
  );

  useEffect(() => {
    dispatch(CategoryDetails());
  }, [dispatch]);

  return (
    <div className="App">
      {CustomerDetails && CustomerDetails.data && <DataTreeView treeItems={CustomerDetails.data}/>}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
);
