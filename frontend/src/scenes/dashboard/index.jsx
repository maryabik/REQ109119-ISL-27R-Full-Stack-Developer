import {Box, Button, useTheme} from "@mui/material";
import { tokens } from "../../theme";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../components/Header";
import StatBox from "../../components/StatBox";
import Contacts from "../contacts";
import * as React from "react";
import AddClient from "../form/AddClient";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
      <Box m="20px">

          {/* GRID & CHARTS */}
          <Box
              display="grid"
              gridTemplateColumns="repeat(12, 1fr)"
              gridAutoRows="140px"
              gap="20px"
          >
          </Box>
          <br />

          <Box>
              <Contacts/>
          </Box>
      </Box>
  );
};

export default Dashboard;
