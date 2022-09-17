import React, { useContext, useState } from "react";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { useSelector, useDispatch } from "react-redux";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Remove , Update_date} from "../redux/actions/action";
import { DeleteContext } from "./context/ContaxtProvider";

const Todo = () => {
  const { User_data } = useSelector((state) => state.todoreducers);

  const {dlttask,setDelttask} = useContext(DeleteContext) 

  const [showeye, setShoweye] = useState(false);
  const [showeyevalue, setShoweyeValue] = useState("");

  const [show, setShow] = useState(false);

  const [update, setUpdate] = useState("");

  const [int, setInt] = useState("");

  const handleClose = () => setShow(false);

  const dispatch = useDispatch();

  const handleShow = (el) => {
    setShow(true);
    setUpdate(el);
  };

  const remove = (id) => {
    dispatch(Remove(id))
    setDelttask(true)
  };

  const usertask_update = () => {
    dispatch(Update_date(update,int))
    handleClose()

  };

  return (
    <>
      <div className="todo_data col-lg-5 mx-auto mt-2">
        {User_data.map((ele, k) => {
          return (
            <>
              <div
                className="todo_container mb-2 d-flex justify-content-between align-items-center px-2"
                key={k}
                style={{
                  background: "#dcdde1",
                  borderRadius: "3px",
                  height: "45px",
                }}
              >
                <li style={{ listStyle: "none" }}>{ele}</li>
                <div className="edit_dlt col-lg-3 py-2 d-flex justify-content-between align-items-center">
                  <ModeEditOutlineIcon
                    style={{ color: "#3c40c6", cursor: "pointer" }}
                    onClick={() => {
                      handleShow(ele);
                      setInt(k);
                    }}
                  />
                  <DeleteIcon
                    style={{ color: "red", cursor: "pointer" }}
                    onClick={() => remove(k)}
                  />
                  <RemoveRedEyeIcon
                    style={{ color: "#1dd1a1", cursor: "pointer" }}
                    onClick={() => {
                      setShoweye(true);
                      setShoweyeValue(ele);
                    }}
                  />
                </div>
              </div>
            </>
          );
        })}

        <Modal show={showeye}>
          <h1 className="text-center">{showeyevalue}</h1>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShoweye(false)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>


        <Modal show={show} onHide={handleClose}>
           <h3 className="text-center mt-2">Update Your Task</h3>
              <Modal.Header >
              <div className="todo col-lg-5 mx-auto d-flex justify-content-between align-items-center">
                <input name='task' value={update} 
                onChange={(e)=>setUpdate(e.target.value)} className='form-control col-lg-5 mt-2' />
                 
            </div>
              </Modal.Header>
             
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={()=>usertask_update()}>
                 Update
                </Button>
              </Modal.Footer>
      </Modal>
      </div>
    </>
  );
};

export default Todo;
