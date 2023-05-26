
//action types
export const ADD = "Add Contact";
export const REPLACE = "Replace Contact";
export const DELETE = "Delete Contact";
export const MARK_EDITABLE = "Mark Contact Editable";
export const UNMARK_EDITABLE = "UnMark Contact Editable";

//action creators
export const createAddAction = contact => ({type:ADD,contact});
export const createReplaceAction = contact => ({type:REPLACE,contact});
export const createDeleteAction = id => ({type:DELETE,id});
export const createMarkEditableAction = id => ({type:MARK_EDITABLE,id});
export const createUnMarkEditableAction = id => ({type:UNMARK_EDITABLE,id});


