import classes from "./Modal.module.css";
import React from "react";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.offShowCart} />;
};

const ModalOverlay = (props) => {
  return <div className={classes.modal}>{props.children} </div>;
};

const portalHelper = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop offShowCart={props.offShowCart} />, portalHelper)}
      {ReactDOM.createPortal(
        <ModalOverlay >{props.children}</ModalOverlay>,
        portalHelper
      )}
    </React.Fragment>
  );
};

export default Modal;
