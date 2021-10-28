import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
  root: {
    borderBottom: "none",
    fontSize: "18px",
    fontWeight: 500,
    marginLeft: "25px",
    lineHeight: "30px",
    color: "#000",
    marginTop: "-22px",
  },
  ul: {
    listStyle: "none",
    margin: "8px 0px 8px 35px",
  },
  li: {
    borderLeft: "solid 2px #eee",
    padding: "0 0 23px 20px",
    fontSize: "14px",
    color: "#787878",
    "&::before": {
      content: '""',
      border: `solid 2px ${theme.palette.primary.main}`,
      width: "8px",
      height: "8px",
      borderRadius: "50px",
      fontSize: "8px",
      marginLeft: "-25px",
      marginTop: "2px",
      fontWeight: "400",
      background: "#fff",
      display: "block",
      position: "absolute",
      boxSizing: "border-box",
    },
  },
  lastLi: {
    border: "0",
    marginLeft: "2px",
    marginTop: "-2px",
  },
  firstLi: {
    display: "flex",
    "padding-bottom": "10px",
    "padding-left": "30px",
    position: "relative",
    "&::before": {
      color: "#000",
      background: theme.palette.primary.main,
      borderColor: theme.palette.primary.main,
      marginLeft: "-51px",
      marginTop: "-30px",
      marginBottom: "20px",
      position: "relative",
      border: "0",
      width: "40px",
      height: "40px",
      padding: "11px 14px",
      boxShadow: "0px 2px 32px 0px rgba(4, 123, 248, 0.3)",
      content: '""',
      borderRadius: "50px",
      fontSize: "8px",
      fontWeight: "400",
      display: "block",
    },
  },
  title: {
    color: "#000",
    marginRight: "5px",
  },
  content: {
    fontSize: "15px",
    color: "#7f7f7f",
    lineHeight: "12px",
  },
  dates: {
    fontSize: 16,
    padding: "9px 0",
    color: "#000",
  },
}));
