import { useState, useRef } from "react";
import QrReader from 'react-qr-reader';
import { Button } from '@mui/material';

function AddQr () {
    const [scaneResult, setScaneResult] = useState('');
    const qrRef = useRef(null);

    const handleErrorFile  = (error) => {
        console.log(error);
    } 

    const handleScanFile = (res) => {
    if(res) {
        setScaneResult(res);
    }
    }
    const onScaneFile  = () => {
        qrRef.current.openImageDialog();
    } 
  
    return (
        <>
            <Button
                variant="outlined"
                color="secondary"
                className="qr__btn"
                onClick={onScaneFile}
            > Добавить QR Code
            </Button>
            <QrReader
                ref={qrRef}
                delay={300}
                style={{ width: '100%' }}
                onError={handleErrorFile}
                onScan={handleScanFile}
                legacyMode
            >
            </QrReader>
            <h3>Просканированный код: {scaneResult} </h3>
        </>
    );
}

export default AddQr;