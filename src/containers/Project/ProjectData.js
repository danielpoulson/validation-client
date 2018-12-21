import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Project from "./index";

const PROJECT_QUERY = gql`
  query PROJECT_QUERY($pj_no: String) {
    project(pj_no: $pj_no) {
      _id
      pj_no
      pj_title
      pj_sponsor
      pj_link
      pj_champ
      pj_cust
      pj_pry
      pj_start
      pj_target
      pj_closed
      created
      dateclosed
      pj_stat
      pj_descp
      pj_objt
      pj_delry
    }
    tasks(source: $pj_no) {
      _id
      TKName
      TKTarg
      TKChamp
      TKStat
      SourceId
    }
    users {
      fullname
    }
  }
`;

const ProjectData = props => {
  return (
    <Query
      query={PROJECT_QUERY}
      variables={
        { pj_no: props.match.params.id } // fetchPolicy="network-only"
      }
    >
      {({ data, error, loading }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error: {error.message}</p>;
        return (
          <Project
            project={data.project}
            tasks={data.tasks}
            users={data.users}
            {...props}
          />
        );
      }}
    </Query>
  );
};

export default ProjectData;
