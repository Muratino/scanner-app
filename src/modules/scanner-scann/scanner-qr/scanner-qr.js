import { useState } from 'react'
import QrReader from 'react-qr-reader';


function ScannerQr() {
    const [scanCam, setScanCum] = useState('');
    const handleErrorCam = (error) => {
        if(error) {
            alert('Доступ к камере закрыт');
        }       
    }

    const handleScanCam = (result) => {
        if (result) {
            setScanCum(result);
            console.log(scanCam);
        }
    }

    return (
        <>
            <QrReader
                delay={300}
                style={{ width: '100%' }}
                onError={handleErrorCam}
                onScan={handleScanCam}
            />
        </>
    );
}

export default ScannerQr;