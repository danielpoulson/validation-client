function dayDiff(date) {
  let _dayDiff = 0;
  if (date) {
    const currentTime = Math.ceil(new Date() / (1000 * 3600 * 24));
    const logTime = Math.ceil(new Date(date) / (1000 * 3600 * 24));
    _dayDiff = currentTime - logTime;
  }
  return _dayDiff;
}

export function getPry(pry) {
  let styled = "dp-table-font has-text-centered";
  switch (pry) {
    case "A":
      styled = `${styled} dpRed`;
      break;
    case "B":
      styled = `${styled} dpOrange`;
      break;
    case "C":
      styled = `${styled} dpGreen`;
      break;
    default:
      styled = "";
  }

  return styled;
}

export function getExt(ext) {
  let styled = "";

  switch (ext) {
    case "doc":
    case "docx":
      styled = "fa fa-file-word-o fa-lg";
      break;
    case "xls":
    case "xlsx":
    case "xlsm":
      styled = "fa fa-file-excel-o fa-lg";
      break;
    case "ppt":
    case "pptx":
      styled = "fa fa-file-powerpoint-o fa-lg";
      break;
    case "pdf":
      styled = "fa fa-file-pdf-o fa-lg";
      break;
    case "jpg":
    case "png":
    case "gif":
    case "tif":
      styled = "fa fa-file-image-o fa-lg";
      break;
    case "zip":
      styled = "fa fa-file-archive-o fa-lg";
      break;
    default:
      styled = "fa fa-file-text-o fa-lg";
      break;
  }

  return styled;
}

export function getStatus(status) {
  let styled = "";
  const _status = parseInt(status, 10);

  switch (_status) {
    case 1:
      styled = "fa fa-star fa-lg";
      break;
    case 2:
      styled = "fa fa-check-square fa-lg";
      break;
    case 3:
      styled = "fa fa-warning fa-lg";
      break;
    case 4:
      styled = "fa fa-exclamation-triangle fa-lg";
      break;
    case 5:
      styled = "fa fa-flag-checkered fa-lg";
      break;
    default:
      styled = "fa fa-archive fa-lg";
      break;
  }
  return styled;
}

export function getStatCC(status) {
  let styled = "";
  const _status = parseInt(status, 10);

  switch (_status) {
    case 1:
      styled = "fa fa-star fa-lg";
      break;
    case 2:
      styled = "fa fa-check-square-o fa-lg";
      break;
    case 3:
      styled = "fa fa-coffee fa-lg";
      break;
    case 4:
      styled = "fa fa-flag-checkered fa-lg";
      break;
    case 5:
      styled = "fa fa-ban fa-lg";
      break;
    default:
      styled = "";
  }

  return styled;
}

export function getTraffic(date, percent) {
  let _status = "fa fa-check-square fa-lg";

  if (percent === 100) {
    _status = "fa fa-flag-checkered fa-lg";
  } else {
    const _diff = dayDiff(date, 0);

    if (_diff > 0) {
      _status = "fa fa-exclamation-triangle fa-lg";
    } else if (_diff <= 0 && _diff >= -7) {
      _status = "fa fa-warning fa-lg";
    }
  }
  return _status;
}
