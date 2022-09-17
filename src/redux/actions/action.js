export const Add = (iteams) => {
  return {
    type:"ADD_DATA",
    payload : iteams
  }
}

export const Remove = (id) => {
  return {
    type:"RMV_DATA",
    payload : id
  }
}

export const Update_date = (items,id) => {
  return {
    type:"UPDATE_DATA",
    payload : items,
    d : id
  }
}