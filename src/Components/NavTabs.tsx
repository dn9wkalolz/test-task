import React, { useState } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import ImageFinder from './ImageFinder';
import Bookmarks from './Bookmarks';
import { BUTTONS_NAME } from '../constants/appconstants';

interface ITabPanel {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  tabs: {
    minWidth: '100px',
  },
  tab: {
    minWidth: 'calc(100% - 100px)',
  },
  main: {
    minHeight: 'calc(88vh - 116px)',
  },
}));

const TabPanel: React.FC<ITabPanel> = ({ children, index, value }) => {
  const classes = useStyles();
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      className={classes.tab}
    >
      {value === index && (
      <Box p={3}>
        {children}
      </Box>
      )}
    </div>
  );
};

const NavTabs: React.FC = () => {
  const classes = useStyles();
  const [value, setValue] = useState<number>(0);
  const { TAB_BUTTONS } = BUTTONS_NAME;

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        className={classes.tabs}
        orientation="vertical"
        value={value}
        onChange={handleChange}
      >
        {TAB_BUTTONS.map((button) => (<Tab key={button.label} icon={<button.icon />} />))}
      </Tabs>
      <TabPanel value={value} index={0}>
        <main className={classes.main}>
          <ImageFinder />
        </main>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <main className={classes.main}>
          <Bookmarks />
        </main>
      </TabPanel>
    </div>
  );
};

export default NavTabs;
