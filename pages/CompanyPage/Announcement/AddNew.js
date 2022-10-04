import React, { useEffect, useRef, useState, Component } from "react";
import styles from "/styles/Announcement/AddNew.module.css";
import Organization from "./Organization";

const AddNewAnnouncement = ({ closeModal, name, value }) => {
  const editorRef = useRef();
  const [editorLoaded, setEditorLoaded] = useState(false);
  const { CKEditor, ClassicEditor } = editorRef.current || {};

  useEffect(() => {
    setEditorLoaded(true);
    editorRef.current = {
      CKEditor: require("@ckeditor/ckeditor5-react").CKEditor, // v3+
      ClassicEditor: require("@ckeditor/ckeditor5-build-classic"),
    };
  }, []);
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={`${styles.modal} modal-content rounded-0`}>
          <div
            className={`${styles.modalContent} modal-header mt-2 ms-3 mb-3 me-3`}
          >
            <h3 class="modal-title">Add Announcement</h3>
          </div>
          <div class="modal-body ms-3">
            <div class="d-flex justify-content-between">
              <div class="col-12">
                <label
                  for="subject"
                  className={`${styles.formLabel} form-label`}
                >
                  Subject
                </label>
                <div className={`input-group mb-4`}>
                  <input
                    type="text"
                    id="subject"
                    className={`${styles.inputsubject} form-control`}
                  ></input>
                </div>
              </div>
            </div>

            <h6>Content</h6>
            {editorLoaded ? (
              <CKEditor
                type=""
                name={name}
                editor={ClassicEditor}
                data={value}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  // onChange(data);
                }}
              />
            ) : (
              <div>Editor loading</div>
            )}
            <button
              type="button"
              className={`${styles.btnupload} btn btn-outline-secondary mt-2 me-1 btn-sm`}
              onClick={() => closeModal(false)}
            >
              UPLOAD FILE
            </button>
            <div class="d-flex justify-content-start mt-4">
              <div className="form-check me-5">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                ></input>
                <label class="form-check-label" for="flexCheckDefault">
                  Send to Email
                </label>
              </div>
            </div>
            <button
              type="button"
              className={`${styles.btnorganization} btn btn-outline-secondary mt-2 me-5 btn-sm`}
              onClick={() => closeModal(false)}
            >
              FILTER BY ORGANIZATION
            </button>
            <button
              type="button"
              className={`${styles.btnbranch} btn btn-outline-secondary mt-2 me-5 btn-sm`}
              onClick={() => closeModal(false)}
            >
              FILTER BY BRANCH
            </button>
          </div>
          <div class="modal-footer border-top mb-2">
            <button
              type="button"
              className={`${styles.btnModal} btn btn-outline-secondary mt-2 me-1 btn-sm`}
              onClick={() => closeModal(false)}
            >
              CREATE ANNOUNCEMENT
            </button>
            <button
              type="button"
              className={`${styles.btnModal} btn btn-outline-secondary mt-2 me-2 btn-sm`}
              data-bs-dismiss="modal"
            >
              CANCEL
            </button>
          </div>
        </div>
        <div
          class="modal fade"
          id="modalCreate"
          tabindex="-1"
          aria-labelledby="modalAdd"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <Organization />
          </div>
        </div>
      </main>
    </div>
  );
};

export default AddNewAnnouncement;
