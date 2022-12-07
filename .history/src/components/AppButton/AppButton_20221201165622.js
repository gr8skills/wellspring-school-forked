import { Button, ButtonGroup } from "@chakra-ui/react";
import "./_app-button.scss";
export const AppButton =(props)=>{
    return <Button colorScheme="blue"  size='xs'>{props.text}</Button>;
}