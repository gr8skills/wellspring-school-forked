import { Button, ButtonGroup } from "@chakra-ui/react";
import "./_app-button.scss";
export const AppButton =(props)=>{
    return (
      <button className="app-button">
        {props.text}
      </button>
    );
}