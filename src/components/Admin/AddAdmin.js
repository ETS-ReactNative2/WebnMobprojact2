import React, {useState } from "react";
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
import { useHistory  } from 'react-router-dom';
import {addAdmin} from "./Service";

toast.configure();
export default function AddAdmin() {
var classes = useStyles();
let history = useHistory();
const [isLoading, setIsLoading] = useState(false);
const [fullname, setFullName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [phoneNumber, setPhoneNumber] = useState("");
const [address, setAddress] = useState("");
const [image, setImage] = useState("");
const [country, setCountry] = useState("");
const [companyName, setCompanyName] = useState("");
const [registrationno, setRegistrationno] = useState("");

const handleSubmit = async () => {
  setIsLoading(true)
  /*
  const formData = new FormData();
      formData.append(
        "image",
        image,
        image.name
      );

      */
      

  
  let request = {
                  fullname: fullname,
                  email: email,
                  password:password,
                  phoneNumber:phoneNumber,
                  address:address,
                  registrationno:registrationno,
                  country:country,
                  //image:formData,
                  companyName:companyName,
                }
  let response = await addAdmin(request)
  //console.log(response);
  
  if(response.data.status === 200) {
      //setFullName("");
      //setEmail("");
      //setPassword("");
      toast.success(response.data.data.message);
      history.push('/app/admin');
    
  }
  else
  {
    toast.error(response.data.data.message);
    setIsLoading(false);
  }
};

  return (
      <>
      <PageTitle title="Add Admin"  />
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
            onChange={(e) => setImage(e.target.files[0])}
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
            value={companyName}
            id="company"
            name="company"
            label="Company Name"
            variant='outlined'
            fullWidth
            margin="dense"
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField
            required
            value={registrationno}
            id="registrationno"
            name="registrationno"
            label="Registration No."
            variant='outlined'
            fullWidth
            margin="dense"
            onChange={(e) => setRegistrationno(e.target.value)}
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
            onChange={(e) => setAddress(e.target.value)}
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
            onChange={(e) => setCountry(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField
            required
            value={phoneNumber}
            id="phonenumber"
            name="phonenumber"
            label="Phone Number"
            variant='outlined'
            fullWidth
            margin="dense"
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField
            required
            value={email}
            id="email"
            name="email"
            label="Email"
            variant='outlined'
            fullWidth
            margin="dense"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Grid>
        
        <Grid item xs={12} sm={6}>
        <TextField
            required
            value={password}
            type="password"
            id="password"
            name="password"
            label="Password"
            variant='outlined'
            fullWidth
            margin="dense"
            onChange={(e) => setPassword(e.target.value)}
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
