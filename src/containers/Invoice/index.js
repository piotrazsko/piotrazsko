import React from "react";
import style from "./style.scss";

import { Typography, Divider, Box } from "@material-ui/core";

const Invoice = () => {
  return (
    <div className={style.container}>
      <div className={style.title}>
        <Typography variant="h4">Faktura / Invoice</Typography>
        <Typography variant="h3">nr FS/1/08/2022/MCG</Typography>
      </div>
      <Divider />
      <Box className={style.dateDostawa}>
        <Typography variant="subtitle2">
          Data wystawienia / Issue date: 03-08-2022
        </Typography>
        <Typography variant="subtitle2">
          Data dostawy / Data wykonania usługi / Delivery date / Service
          performance date: 29-07-2022
        </Typography>
      </Box>
      <Divider />
      <Box>
        <Typography variant="h5">Sprzedawca / Seller:</Typography>
        <Typography variant="subtitle2">SIARHEI PETRASHKA</Typography>
        <Typography variant="subtitle2">
          gen. Meriana C. Coopera 12A/8 01-315, Warszawa, Polska
        </Typography>
        <Typography variant="subtitle2">NIP:5223230478</Typography>
        <Typography variant="subtitle2">Bank:PKO Bank Polski</Typography>{" "}
        <Typography variant="subtitle2">
          Nr rachunku / Bank account number:
        </Typography>
        <Typography variant="subtitle2">
          94 1020 4900 0000 8102 3463 2698
        </Typography>
        <Typography variant="subtitle2">SWIFT:BPKOPLPW</Typography>
      </Box>
    </div>
  );
};

export default Invoice;
