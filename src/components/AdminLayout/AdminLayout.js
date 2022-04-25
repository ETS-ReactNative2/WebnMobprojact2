import React from "react";
import {
  Route,
  Switch,
  Redirect,
  withRouter,
} from "react-router-dom";
import classnames from "classnames";
import {Box, IconButton, Link} from '@material-ui/core'
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
import Notifications from "../../pages/notifications";
import Maps from "../../pages/maps";
import Tables from "../../pages/tables";
import Icons from "../../pages/icons";
import Charts from "../../pages/charts";
import Merchant from "../Modules/Admin/Merchant/Merchant";
import AddMerchants from "../Modules/Admin/Merchant/AddMerchants";
import EditMerchant from "../Modules/Admin/Merchant/EditMerchant";
import EndUser from "../Modules/Admin/EndUser/EndUser";
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
              <Route path="/app/notifications" component={Notifications} />
              <Route
                exact
                path="/app/ui"
                render={() => <Redirect to="/app/ui/icons" />}
              />
              <Route path="/app/ui/maps" component={Maps} />
              <Route path="/app/ui/icons" component={Icons} />
              <Route path="/app/ui/charts" component={Charts} />
            </Switch>
            <Box
              mt={5}
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
