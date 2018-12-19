import React from "react";
import styled from "styled-components";
import FormInput from "../../components/common/FormInput";
import TextArea from "../../components/common/TextArea";
import SelectInput from "../../components/common/SelectInput";
import DatePicker from "../../components/common/DatePicker";

const Form = styled.form`
  padding-right: 6rem;
`;

const Box = styled.div`
  margin-top: -25px;
  border: 1px solid lightblue;
  border-radius: 5px;
`;

type Props = {
  project: any,
  onProjectStateChange: any,
  onDateProject: any,
  users: any,
  status: any,
  errors: any
};

const ProjectForm = ({
  errors,
  project,
  status,
  users,
  onDateProject,
  onProjectStateChange
}: Props) => (
  <Box className="box">
    <Form>
      <FormInput
        name="pj_title"
        label="Project Title"
        value={project.pj_title}
        onChange={onProjectStateChange}
        placeholder="Enter the title of your project (Required)"
        error={errors.pj_title}
      />

      <TextArea
        name="pj_descp"
        label="Project Description"
        value={project.pj_descp || ""}
        rows="5"
        onChange={onProjectStateChange}
        error={errors.pj_descp}
      />

      <FormInput
        name="pj_link"
        label="Linkage"
        value={project.pj_link}
        onChange={onProjectStateChange}
        placeholder="Associated project?"
        inputbox="dp-size-300"
        error={errors.pj_link}
      />

      <SelectInput
        name="pj_champ"
        label="Champion"
        value={project.pj_champ}
        defaultOption="Select Champion"
        options={users}
        onChange={onProjectStateChange}
        error={errors.pj_champ}
      />

      <FormInput
        name="pj_sponsor"
        label="Project Sponsor"
        value={project.pj_sponsor}
        onChange={onProjectStateChange}
        placeholder="Enter the project sponsor (Required)"
        inputbox="dp-size-300"
        error={errors.pj_sponsor}
      />

      <FormInput
        name="pj_cust"
        label="Customer"
        value={project.pj_cust}
        onChange={onProjectStateChange}
        placeholder="Enter a customer for your project (Required)"
        inputbox="dp-size-300"
        error={errors.pj_cust}
      />

      <TextArea
        name="pj_objt"
        label="Project Obectives"
        value={project.pj_objt || ""}
        rows="5"
        onChange={onProjectStateChange}
        error={errors.pj_objt}
      />

      <TextArea
        name="pj_delry"
        label="Project Deliveries"
        value={project.pj_delry || ""}
        rows="5"
        onChange={onProjectStateChange}
        error={errors.pj_delry}
      />

      <DatePicker
        name="pj_start"
        label="Start Date"
        selectedDay={project.pj_start}
        onChange={onDateProject.bind(null, "pj_start")} // eslint-disable-line react/jsx-no-bind
        error={errors.pj_target}
      />

      <DatePicker
        name="pj_target"
        label="Target Date"
        selectedDay={project.pj_target}
        onChange={onDateProject.bind(null, "pj_target")} // eslint-disable-line react/jsx-no-bind
        error={errors.pj_target}
      />

      <DatePicker
        name="pj_closed"
        label="Date Completed"
        selectedDay={project.pj_closed}
        onChange={onDateProject.bind(null, "pj_closed")} // eslint-disable-line react/jsx-no-bind
        error={errors.pj_closed}
      />

      <FormInput
        name="pj_pry"
        label="Priority"
        value={project.pj_pry}
        onChange={onProjectStateChange}
        inputbox="dp-size-100"
        error={errors.pj_pry}
      />

      <SelectInput
        name="pj_stat"
        label="status"
        labelstyle="col-sm-2 control-label"
        inputdiv="col-sm-3"
        value={project.pj_stat}
        defaultOption="Select status"
        options={status}
        onChange={onProjectStateChange}
        error={errors.pj_stat}
      />
    </Form>
  </Box>
);

export default ProjectForm;
