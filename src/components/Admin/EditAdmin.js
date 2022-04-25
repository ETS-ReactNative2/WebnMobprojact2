import React, {useState,useEffect } from "react";
import { Paper,
  Box,
  Grid,
  TextField,
  Button,
  CircularProgress, } from "@material-ui/core";
import PageTitle from "../../components/PageTitle";
import useStyles from "./styles";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory,useParams  } from 'react-router-dom';
import {getAdminDetail,updateAdmin} from "./Service";
toast.configure();
const initialValue = {
    name:'',
    email:'',
    password:'',
    isLoading:false,
    image:'',
    company_name:'',
    registartion_number:'',
    address:'',
    country:'',
    phone_number:'',
}

export default function EditAdmin() {
  var classes = useStyles();
  let history = useHistory();
  const { id } = useParams();
  const [admin, setAdmin] = useState(initialValue);
  const {name,email,password,isLoading,company_name,registartion_number,address,country,phone_number} = admin;

const handleSubmit = async () => {
  //setIsLoading(true);
  setAdmin(prevState => ({ ...prevState, isLoading: true,}));
  let request = {
                  fullname: name,
                  email: email,
                  password:password,
                 // image:image,
                  company_name:company_name,
                  registartion_number:registartion_number,
                  address:address,
                  country:country,
                  phone_number:phone_number,
                }
  let response = await updateAdmin(id,request)  
  if(response.data.status === 200) {
      toast.success(response.data.data.message);
      history.push('/app/admin');
    
  }
  else
  {
    toast.error(response.data.data.message);
    setAdmin(prevState => ({ ...prevState, isLoading: false,}));
  }

};
const getAdminDetails = async() => {
    const response = await getAdminDetail(id);
    setAdmin(response.data);
}

const onValueChange = (e) => {
    setAdmin({...admin, [e.target.name]: e.target.value})
}
useEffect(() => {
    getAdminDetails();
}, []);

  return (
      <>
      <PageTitle title="Edit Admin"  />
      <Paper>
      <Box px={3} py={2}>
      <Grid container spacing={4}>   
      <Grid item xs={12} sm={6}>
        <label htmlFor="btn-upload">
          <input
            id="btn-upload"
            name="logo"
            style={{ display: 'none' }}
            type="file"
            onChange={(e) => onValueChange(e)}
          />
          <Button
            style={{ marginTop: '10px' }}
            fullWidth
            className="btn-choose"
            variant="outlined"
            component="span" >
             Upload Company Logo
          </Button>
        </label>

        </Grid> 
        <Grid item xs={12} sm={6}>
        <TextField
            required
            value={company_name}
            id="company_name"
            name="company_name"
            label="Company Name"
            variant='outlined'
            fullWidth
            margin="dense"
            onChange={(e) => onValueChange(e)}
          />
        </Grid>   
        <Grid item xs={12} sm={6}>
        <TextField
            required
            value={registartion_number}
            id="registartion_number"
            name="registartion_number"
            label="Registration No."
            variant='outlined'
            fullWidth
            margin="dense"
            onChange={(e) => onValueChange(e)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField
            required
            value={address}
            id="address"
            name="address"
            label="Address"
            variant='outlined'
            fullWidth
            margin="dense"
            onChange={(e) => onValueChange(e)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField
            required
            value={country}
            id="country"
            name="country"
            label="Country"
            variant='outlined'
            fullWidth
            margin="dense"
            onChange={(e) => onValueChange(e)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField
            required
            value={phone_number}
            id="phone_number"
            name="phone_number"
            label="Phone Number"
            variant='outlined'
            fullWidth
            margin="dense"
            onChange={(e) => onValueChange(e)}
          />
        </Grid>   
        <Grid item xs={12} sm={6}>
        <TextField
            required
            disabled
            value={email}
            id="email"
            name="email"
            label="Email"
            variant='outlined'
            fullWidth
            margin="dense"
            onChange={(e) => onValueChange(e)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField
            required
            value={password}
            id="password"
            name="password"
            label="Password"
            variant='outlined'
            fullWidth
            margin="dense"
            onChange={(e) => onValueChange(e)}
          />
        </Grid>
      </Grid>
      <Box mt={3}>
      {isLoading ? (
          <CircularProgress size={26} className={classes.loginLoader} />
        ) : (
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={handleSubmit}
        >
          Save
        </Button>
        )}
      </Box>

      </Box>
      
      </Paper>
    </>
  );
}
