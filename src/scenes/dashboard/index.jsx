import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import StatBox from "../../components/StatBox";
import Integrations from "../../components/Integrations";
import Users from "../../components/Users";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Dashboard" subtitle="Welcome to your dashboard" />
      </Box>

      {/* GRID & CHARTS */}
      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="50px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="2 / span 3" // Start vanaf de 4e kolom
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox title="Actions" subtitle="182" action="Completed" />
        </Box>
        <Box
          gridColumn="5 / span 3" // Vervolgt direct na de eerste box
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox title="Integrations" subtitle="11" action="Active" />
        </Box>
        <Box
          gridColumn="8 / span 3" // Vervolgt direct na de tweede box
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox title="Users" subtitle="6" action="Using" />
        </Box>
        {/* INTEGRATIONS ROW */}
        <Box
          gridColumn=" 2 / span 9"
          gridRow="span 2"
          backgroundColor={colors.grey[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h3"
                fontWeight="600"
                sx={{ color: colors.grey[100] }}
              >
                Integrations
              </Typography>
            </Box>
          </Box>

          <Box height="250px">
            <Integrations />
          </Box>
        </Box>

        {/* Users ROW */}
        <Box
          gridColumn=" 2 / span 9"
          gridRow="span 2"
          backgroundColor={colors.grey[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h3"
                fontWeight="600"
                sx={{ color: colors.grey[100] }}
              >
                Users
              </Typography>
            </Box>
          </Box>

          <Box height="250px">
            <Users />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
