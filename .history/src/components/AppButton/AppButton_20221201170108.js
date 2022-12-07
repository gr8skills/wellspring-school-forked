import { Button, ButtonGroup } from "@chakra-ui/react";
import "./_app-button.scss";
export const AppButton =(props)=>{
    return (
      <Button colorScheme="blue" size="lg">
        {props.text}
      </Button>
    );
}