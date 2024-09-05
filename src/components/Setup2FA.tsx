import { Button } from "./ui/button";

const Setup2FA = (props: { qrCodeUrl: string; switchForm: () => void }) => {
  const { qrCodeUrl, switchForm } = props;
  return (
    <>
      <div className="p-4">
        {
          // Add image element with qrCodeUrl as src and a Button with switchForm function
        }
        <img src={qrCodeUrl} alt="Authenticator QR Code" />
        <Button onClick={switchForm}>Press here when QR Code is scanned</Button>
      </div>
    </> 
  );
};

export default Setup2FA;
