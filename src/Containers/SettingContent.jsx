import { useTheme } from "@emotion/react";
import { Box } from "@mui/material";
import React from "react";
import AccountSettings from "../components/Settings/AccountSettings";
import DataSettings from "../components/Settings/DataSettings";
import EmailPreferenceSettings from "../components/Settings/EmailPreferenceSettings";
import PaymentSettings from "../components/Settings/PaymentSettings";
import SecuritySettings from "../components/Settings/SecuritySettings";

const SettingContent = ({ ongletActive }) => {
  const { palette } = useTheme();
  const contentStyle = {
    width: "65%",
    margin: "0 0 0 5%",
    backgroundColor: palette.secondary.light,
    border: "1px solid ",
    borderColor: palette.secondary.main,
    borderRadius: "10px",
    padding: "10px 2.5%",
  };

  return (
    <Box sx={contentStyle}>
      {ongletActive === 0 && <AccountSettings />}
      {ongletActive === 1 && <SecuritySettings />}
      {ongletActive === 2 && <PaymentSettings />}
      {ongletActive === 3 && <EmailPreferenceSettings />}
      {ongletActive === 4 && <DataSettings />}
    </Box>
  );
};

export default SettingContent;
