import { makeStyles } from '@mui/styles';
export const useStyles = makeStyles((theme) => ({
  textColor: {
    color: theme.palette.primary.main,
  },
  nooutline: {
    outline: 'none',
  },
  noBorder: {
    border: 'none',
  },
  iconColor: {
    color: theme.palette.secondary.main,
  },
  endAdn: {
    paddingRight: '3.5px'
  },
  input: {
    height: 0,
    textOverflow: "ellipsis"
  },
  disabled: {
    color: "#000000",
    backgroundColor: "#f3f3f3"
  },
  paperRoot: {
    width: '100%',
    height: 'auto',
    border: '1px',
    position: "relative",
    boxShadow: '0px 4px 6px -2px rgb(90 85 85 / 20%)',
    outline: 'none',
    background: theme.palette.background.paper,
    display: 'flex',
    alignItems: 'center',
   
  },
  roundBorder:{
    borderRadius:"50%"
  }
}))
