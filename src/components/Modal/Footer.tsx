
import { Button } from "../Button"
import { FooterContentStyle } from "./ModalStyles"

export interface FooterProps {
  onAccept?: ()=>void;
  onReject?: ()=>void;
  cancelButtonLabel?: string;
  continueButtonLabel?: string;
};

export const Footer: React.FC<FooterProps>= (props) => {
  return (
      <FooterContentStyle>
        <Button 
          color="secondary" 
          variant="outlined"
          onClick={props?.onReject}
          >
          {props?.cancelButtonLabel}
        </Button>
        <Button 
          color="primary" 
          variant="contained"
          onClick={props?.onAccept} 
          >
          {props?.continueButtonLabel}
        </Button>
      </FooterContentStyle>      
  )
}

Footer.defaultProps = {
  cancelButtonLabel: "Cancel",
  continueButtonLabel: "Continue"
}
