import "./App.css";
import { Button, ChakraProvider } from "@chakra-ui/react";

export default function App() {
    return (
        <ChakraProvider>
            <Button>ボタン</Button>
        </ChakraProvider>
    );
}
