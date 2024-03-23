export const MonthFormatter = (month: string) => {
  let returnStatement;

  switch (month) {
    case "01":
      returnStatement = "January";
      break;
    case "02":
      returnStatement = "February";
      break;
    case "03":
      returnStatement = "March";
      break;
    case "04":
      returnStatement = "April";
      break;
    case "05":
      returnStatement = "May";
      break;
    case "06":
      returnStatement = "June";
      break;
    case "07":
      returnStatement = "July";
      break;
    case "08":
      returnStatement = "August";
      break;
    case "09":
      returnStatement = "September";
      break;
    case "10":
      returnStatement = "October";
      break;
    case "11":
      returnStatement = "November";
      break;
    case "12":
      returnStatement = "December";
      break;

    default:
      returnStatement = month;
      break;
  }

  return returnStatement;
};
