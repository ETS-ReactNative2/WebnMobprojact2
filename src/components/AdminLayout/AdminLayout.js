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
import AdminHeader from "../AdminHeader";
import AdminSidebar from "../AdminSidebar";

// pages
import Dashboard from "../../pages/dashboard";
import Typography from "../../pages/typography";
// import Notifications from "../../pages/notifications";
import Maps from "../../pages/maps";
import Tables from "../../pages/tables";
import Icons from "../../pages/icons";
import Charts from "../../pages/charts";
import Merchant from "../Modules/Admin/Merchant/Merchant";
import AddMerchants from "../Modules/Admin/Merchant/AddMerchants";
import EditMerchant from "../Modules/Admin/Merchant/EditMerchant";
import EndUser from "../Modules/Admin/EndUser/EndUser";
import Settings from "../Modules/Admin/Settings/Settings";
import DevelopersKey from "../Modules/Admin/Developerskey/Developerskey"
import Notifications from "../Modules/Admin/Notifications/Notifications"
import Contactus from "../Modules/Admin/Contactus/Contactus";
import FAQ from "../Modules/Admin/FAQ/FAQ";
import Termsandservices from "../Modules/Admin/Terms and services/Termsandservices";
import Privacypolicy from "../Modules/Admin/Privacy Policy/Privacypolicy";

// context
import { useLayoutState } from "../../context/LayoutContext";

function AdminLayout(props) {
  var classes = useStyles();

  // global
  var layoutState = useLayoutState();

  return (
    <div className={classes.root}>
      <>
        <AdminHeader history={props.history} />
        <AdminSidebar />
        <div
          className={classnames(classes.content, {
            [classes.contentShift]: layoutState.isSidebarOpened,
          })}
        >
          <div className={classes.fakeToolbar} />
          <Switch>
            <Route path="/app/dashboard" component={Dashboard} />
            <Route path="/app/typography" component={Typography} />
            <Route path="/app/admin/merchant" component={Merchant} />
            <Route path="/app/admin/add-merchant" component={AddMerchants} />
            <Route path="/app/admin/edit-merchant/:id" component={EditMerchant} />
            <Route path="/app/admin/enduser" component={EndUser} />
            <Route path="/app/tables" component={Tables} />
            {/* <Route path="/app/notifications" component={Notifications} /> */}
            <Route exact path="/app/ui" render={() => <Redirect to="/app/ui/icons" />} />
            <Route path="/app/ui/maps" component={Maps} />
            <Route path="/app/ui/icons" component={Icons} />
            <Route path="/app/ui/charts" component={Charts} />
            <Route path="/app/settings" component={Settings} />
            <Route path="/app/developers-key" component={DevelopersKey} />
            <Route path="/app/notifications" component={Notifications} />
            <Route path="/app/contact-us" component={Contactus} />
            <Route path="/app/faq" component={FAQ} />
            <Route path="/app/terms-and-services" component={Termsandservices} />
            <Route path="/app/privacy-policy" component={Privacypolicy} />
          </Switch>
          <Box
            mt={0}
            width={"100%"}
            display={"flex"}
            alignItems={"center"}
            justifyContent="space-between"
          >
          </Box>
        </div>
      </>
    </div>
  );
}

export default withRouter(AdminLayout);
