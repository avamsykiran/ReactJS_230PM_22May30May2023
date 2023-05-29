import axios from 'axios';

import {
    createWaitAction,
    createErrAction,
    createRefreshAction,
    createAddAction,
    createDeleteAction,
    createReplaceAction
} from './contactsActions';

const apiUrl = "http://localhost:9999/contacts";

//action thunks creators
export const createRefreshActionThunk = () => dispatch => {
    dispatch(createWaitAction("Please wait while loading..."));
    axios.get(apiUrl)
        .then( resp => dispatch(createRefreshAction(resp.data)) )
        .catch( err => {console.log(err); dispatch(createErrAction("Sorry Unable to Load! Please Try later")); })
};

export const createAddActionThunk = contact => dispatch => {
    dispatch(createWaitAction("Please wait while saving..."));
    axios.post(apiUrl,contact)
        .then( resp => dispatch(createAddAction(resp.data)) )
        .catch( err => {console.log(err); dispatch(createErrAction("Sorry Unable to Save! Please Try later")); })
};

export const createUpdateActionThunk = contact => dispatch => {
    dispatch(createWaitAction("Please wait while saving..."));
    axios.put(apiUrl+"/"+contact.id,{...contact,isEditing:undefined})
        .then( resp => dispatch(createReplaceAction(resp.data)) )
        .catch( err => {console.log(err); dispatch(createErrAction("Sorry Unable to Save! Please Try later")); })
};

export const createDeleteActionThunk = id => dispatch => {
    dispatch(createWaitAction("Please wait while deleting..."));
    axios.delete(apiUrl+"/"+id)
        .then( resp => dispatch(createDeleteAction(id)) )
        .catch( err => {console.log(err); dispatch(createErrAction("Sorry Unable to Delete! Please Try later")); })
};