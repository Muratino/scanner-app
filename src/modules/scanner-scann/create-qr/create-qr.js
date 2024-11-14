import { TextField } from '@mui/material';
import { useState } from 'react';
import QRCode from 'qrcode';
import { Button } from '@mui/material';

function CreateQr () {
    const [text, setText] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const generateQrCode = async () => {
        try {
            const respons = await QRCode.toDataURL(text);
            setImageUrl(respons)
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <Button
                variant="outlined"
                color="secondary"
                className="qr__btn"
                onClick={() => generateQrCode()}
            > Создать QR Code
            </Button>
            <TextField
                label="Enter Text Here"
                className="text__put"
                onChange={(e) => setText(e.target.value)}
            >
            </TextField>
            {imageUrl ? (<a href={imageUrl} download ><img src={imageUrl} alt="img" />
            </a>) : null}
        </>
    );
}

export default CreateQr;