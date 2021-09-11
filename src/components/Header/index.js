import React from "react";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import { useTranslation } from "react-i18next";
import Button from "@material-ui/core/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import style from "./style.scss";

const Header = ({
  selectedItem,
  onSelect,
  history,
  route: { path },
  ...props
}) => {
  const handleChange = (event, newValue) => {
    history.push(newValue);
  };

  const { t } = useTranslation();
  return (
    <Paper className={style.container}>
      <Tabs
        value={path}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
      >
        <Tab
          classes={{ root: style.firstTab, labelIcon: style.labelIconFirst }}
          icon={<FontAwesomeIcon className={style.homeIcon} icon={faHome} />}
          label={""}
          value="/"
        />
        <Tab value="/resume" label={t("tab_resume")} />
        <Tab value="/portfolio" label={t("tab_portfolio")} />
        <Tab value="/contacts" label={t("tab_contact")} />
      </Tabs>
      <Button variant="contained" color="primary">
        {t("button_hire_me")}
      </Button>
    </Paper>
  );
};

Header.propTypes = {
  selectedItem: PropTypes.number,
};

export default Header;
