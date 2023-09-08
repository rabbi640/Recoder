"use strict";
var submitBtnEle = document.getElementById("add-edit");
var projHeaderEle = document.getElementById("project");
var modalHeaderEle = document.getElementById("staticBackdropLabel");
var projectBioEle = document.getElementById("txtarea1");
//@param All String =>
function setModalData(
  projHeader,
  modalHeader,
  projectBio,
  submitBtn,
  reqType,
  projectId
) {
  projectBioEle.textContent = projectBio;
  projHeaderEle.value = projHeader;
  modalHeaderEle.textContent = modalHeader;
  submitBtnEle.value = submitBtn;

  document.getElementById("req_type").value = reqType;
  document.getElementById("project-id").value = projectId;
}

//iterating on projects to map each project with a Listener that changes the href of the Delete Modal
//to delete a specific project
document.querySelectorAll("[data-id-project]").forEach((e) => {
  e.addEventListener("click", () => {
    document.getElementById("project-delete-btn").href =
      "page.php?id=" +
      e.attributes.getNamedItem("data-id-project").nodeValue +
      "&source=delete";
  });
});
document.querySelectorAll("[data-edit-project]").forEach((e) => {
  e.addEventListener("click", () => {
    const listOptions = e.parentElement.parentElement;
    const projectBio =
      listOptions.previousElementSibling.previousElementSibling;
    const projectHeader = projectBio.previousElementSibling;
    const projID = projectHeader.previousElementSibling;
    setModalData(
      projectHeader.textContent.trim(),
      "Edit Project",
      projectBio.textContent.trim(),
      "Edit",
      "edit",
      projID.value
    );
  });
});
document.querySelector("#close-btn-edit-add").addEventListener("click", () => {
  setModalData("", "Add Project", "", "Add", "add", "");
});
