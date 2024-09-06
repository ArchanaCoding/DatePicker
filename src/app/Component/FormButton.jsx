import React from "react";

const FormButton = (props) => {
  return (
    <button
      disabled={props.isSubmitting}
      type={props.type != null ? props.type : "submit"}
      data-bs-dismiss={props.onClick != null ? null : "model"}
      className={
        props.type != null
          ? "btn fs-12 py-1 btn-outline-secondary m-1" + " " + props.className
          : "btn fs-12 py-1 btn-outline-primary m-1" + " " + props.className
      }
      onClick={props.onClick}
    >
      {props.isSubmitting && (
        <span>
          <i className="fa fa-spinner fa-spin"></i>
          {props.type != null
            ? props.label!=null ? props.label: "Canceled"
            : props.update != null
            ? props.update + "ing"
            : "Saving"}
        </span>
      )}
      {!props.isSubmitting && (
        <span>
          <i
            className={
              `bi me-1 ${props.type === 'reset' ? "bi-x-lg" : props.iconClassName != null ? props.iconClassName :"bi-check2-all"}`
            }
          ></i>
          {props.type != null
            ? props.label!=null ? props.label: "Cancel"
            : props.update != null
            ? props.update
            : "Save"}
        </span>
      )}
    </button>
  );
};

export default FormButton;
