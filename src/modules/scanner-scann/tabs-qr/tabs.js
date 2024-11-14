import { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import CreateQr from '../create-qr/create-qr';
import AddQr from '../add-qr/add-qr';
import ScannerQr from "../scanner-qr/scanner-qr";

export default function HomePage() {
  const [tabSelected, setTabsSelected] = useState(0);

  const handleChange = (event, newValue) => {
    setTabsSelected(newValue);
  };
  return (
    <>
      <Tabs
        value={tabSelected}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        <Tab label="Создать QR Code" />
        <Tab label="Добавить QR Code" />
        <Tab label="Сканировать QR Code" />
      </Tabs>
      {tabSelected === 0 && <CreateQr />}
      {tabSelected === 1 && <AddQr />}
      {tabSelected === 2 && <ScannerQr />}
    </>
  );
}