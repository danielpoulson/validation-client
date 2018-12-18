export function setAuth(passed) {
  const user = passed.data.signin;
  if (user.token) {
    sessionStorage.setItem("authorised", true);
    sessionStorage.setItem("token", user.token);
    sessionStorage.setItem("role", user.role);
    sessionStorage.setItem("username", user.username);
    sessionStorage.setItem("fullname", user.fullname);
    sessionStorage.setItem("id", user.id);
  }
}

export const fileRegex = /PM{1}\d{6}\s[-]\s/; //eslint-disable-line import/prefer-default-export

export const tabData = {
  project: [
    { tabPostion: 1, tabName: "Details", tabType: "DetailTab", tabCount: 0 },
    { tabPostion: 2, tabName: "Tasks", tabType: "TasksTab" },
    { tabPostion: 3, tabName: "Files", tabType: "FilesTab" },
    { tabPostion: 4, tabName: "Log", tabType: "LogTab", tabCount: 0 }
  ],
  validation: [
    { tabPostion: 1, tabName: "Details", tabType: "DetailTab", tabCount: 0 },
    { tabPostion: 2, tabName: "VMS", tabType: "VMSTab", tabCount: 0 },
    { tabPostion: 3, tabName: "Projects", tabType: "ProjectTab", tabCount: 0 },
    { tabPostion: 4, tabName: "Log", tabType: "LogTab", tabCount: 0 }
  ]
};

export function convertfilename(id: string, filename: string): string {
  let newfilename = "";
  //$FlowFixMe
  const regx = new RegExp(`^${id}`);
  const myArray = regx.exec(filename);
  // Filenames must have a SourceTd affixed. A regex is used to check if the conditon is true
  // if not a sourceId is added.
  // D.Poulson 24 Feb 2018 (Add Comment)
  if (myArray) {
    newfilename = filename;
  } else {
    newfilename = `${id} - ${filename}`;
  }
  return newfilename;
}

export function queryString(queryString: string): array {
  const [page, search] = queryString.split(",");
  let queryed = [];
  if (typeof search === "undefined") {
    queryed = [page.substring(6)];
  } else {
    queryed = [page.substring(6), search.substring(7)];
  }

  return queryed;
}
