import moment from "moment";

export const stage = [
  { value: 1, text: "Not Started" },
  { value: 2, text: "In Process" },
  { value: 3, text: "Approved" },
  { value: 4, text: "Reval" }
];
export const vmsType = [
  { value: 10, text: "Validation Plan (VP)" },
  { value: 15, text: "Risk Assessment  (RA)" },
  { value: 20, text: "User Requirement (USR)" },
  { value: 25, text: "Functional Design Specification (FDS)" },
  { value: 30, text: "Design Qualification - DQ" },
  { value: 35, text: "Site Acceptanace Test - SAT" },
  { value: 40, text: "Installation Qualification - IQ" },
  { value: 45, text: "Operational Qualification - OQ" },
  { value: 50, text: "Equipment Qualification - IOQ" },
  { value: 55, text: "Performance Qualification - PQ" },
  { value: 60, text: "Process Validation - PV" },
  { value: 65, text: "Filling Validation - FV" },
  { value: 70, text: "Cleaning Validation - CV" },
  { value: 80, text: "Validation Report - VR" }
];

export function getValStage(num) {
  const _stageDesc = stage.find(s => s.value === +num);
  return _stageDesc.text;
}

export function addDays(currentDate, days) {
  return moment(currentDate).add(days, "d")._d;
}
