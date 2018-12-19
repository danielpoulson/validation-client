/* eslint-disable import/prefer-default-export */
export function projectFormIsValid(project) {
  let formIsValid = true;
  const errors = []; //Clears any previous errors
  const errorsObj = {}; //Clears any previous errors

  if (!project.pj_title) {
    errors.push("Project Title - is required");
    errorsObj.pj_title = true;
    formIsValid = false;
  } else if (project.pj_title.length < 20) {
    errors.push("Project Title - Must more than 20 characters");
    errorsObj.pj_title = true;
    formIsValid = false;
  }

  if (!project.pj_sponsor) {
    errors.push("A sponsor - This field is required");
    errorsObj.pj_sponsor = true;
    formIsValid = false;
  } else if (project.pj_sponsor.length < 3) {
    errors.push("Sponsor - Must be atleast 3 characters");
    errorsObj.pj_sponsor = true;
    formIsValid = false;
  }

  if (!project.pj_champ) {
    errors.push("Champion - Please select a project champion");
    errorsObj.pj_champ = true;
    formIsValid = false;
  }

  if (!project.pj_cust) {
    errors.push("Customer - This field is required");
    errorsObj.pj_cust = true;
    formIsValid = false;
  } else if (project.pj_cust.length < 3) {
    errors.push("Customer - Must be atleast 3 characters");
    errorsObj.pj_cust = true;
    formIsValid = false;
  }

  if (!project.pj_target) {
    errors.push("Target Date - A Target Date must be set");
    errorsObj.pj_target = true;
    formIsValid = false;
  } else if (project.pj_target === null) {
    errors.push("Target Date - A Target Date must be set");
    errorsObj.pj_target = true;
    formIsValid = false;
  }

  if (!project.pj_pry) {
    errors.push("Priority - This field is required, please select A, B or C");
    errorsObj.pj_pry = true;
    formIsValid = false;
  }

  return { formIsValid, errors, errorsObj };
}
