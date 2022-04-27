import React from "react";
import {
  Route,
  Switch,
  Redirect,
  withRouter,
} from "react-router-dom";
import classnames from "classnames";
import { Box, IconButton, Link } from '@material-ui/core'
import Icon from '@mdi/react'

//icons
// styles
import useStyles from "./styles";

// components
import Header from "../Header";
import Sidebar from "../Sidebar";

// pages
import Dashboard from "../../pages/dashboard";
import Typography from "../../pages/typography";
// import Notifications from "../../pages/notifications";
import Maps from "../../pages/maps";
import Tables from "../../pages/tables";
import Icons from "../../pages/icons";
import Charts from "../../pages/charts";
import Admin from "../Admin/Admin";
import AddAdmin from "../Admin/AddAdmin";
import EditAdmin from "../Admin/EditAdmin";
import Merchants from "../merchant/Merchants";
import AddMerchant from "../merchant/AddMerchant";
import Settings from "../Admin/Settings/Settings";
import Notifications from "../Admin/Notifications/Notifications";
import Contactus from "../Admin/Contactus/Contactus";
import FAQ from "../Admin/FAQ/FAQ"
import Termsandservices from "../Admin/Terms and Services/Termsandservices";
import Privacypolicy from "../Admin/Privacy Policy/Privacypolicy";

// context
import { useLayoutState } from "../../context/LayoutContext";
import EditMerchant from "../merchant/EditMerchant";

function Layout(props) {
  var classes = useStyles();

  // global
  var layoutState = useLayoutState();

  return (
    <div className={classes.root}>
      <>
        <Header history={props.history} />
        <Sidebar />
        <div
          className={classnames(classes.content, {
            [classes.contentShift]: layoutState.isSidebarOpened,
          })}
        >
          <div className={classes.fakeToolbar} />
          <Switch>
            <Route path="/app/dashboard" component={Dashboard} />
            <Route path="/app/typography" component={Typography} />
            <Route path="/app/admin" component={Admin} />
            <Route path="/app/add-admin" component={AddAdmin} />
            <Route path="/app/edit-admin/:id" component={EditAdmin} />
            <Route path="/app/merchants" component={Merchants} />
            <Route path="/app/add-merchant" component={AddMerchant} />
            <Route path="/app/edit-merchant/:id" component={EditMerchant} />
            <Route path="/app/tables" component={Tables} />
            {/* <Route path="/app/notifications" component={Notifications} /> */}
            <Route exact path="/app/ui" render={() => <Redirect to="/app/ui/icons" />} />
            <Route path="/app/ui/maps" component={Maps} />
            <Route path="/app/ui/icons" component={Icons} />
            <Route path="/app/ui/charts" component={Charts} />
            <Route path="/app/settings" component={Settings} />
            <Route path="/app/notifications" component={Notifications} />
            <Route path="/app/contact-us" component={Contactus} />
            <Route path="/app/faq" component={FAQ} />
            <Route path="/app/terms-and-services" component={Termsandservices} />
            <Route path="/app/privacy-policy" component={Privacypolicy} />
          </Switch>
          {/*<Box*/}
          {/*  mt={5}*/}
          {/*  width={"100%"}*/}
          {/*  display={"flex"}*/}
          {/*  alignItems={"center"}*/}
          {/*  justifyContent="space-between"*/}
          {/*>*/}
          {/*</Box>*/}
        </div>
      </>
    </div>
  );
}

export default withRouter(Layout);
