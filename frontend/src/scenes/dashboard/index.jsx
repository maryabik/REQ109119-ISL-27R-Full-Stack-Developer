import {Box, Button, useTheme} from "@mui/material";
import { tokens } from "../../theme";

import Contacts from "../contacts";
import * as React from "react";

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
