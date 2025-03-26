import { Button } from "@heroui/button";
import { ForkKnife } from "lucide-react";
import React from "react";

export default function Home(){
    return(
        <div className="flex">
            <Button color="secondary" startContent={<ForkKnife/>}>Alimentame</Button>
        </div>
    )
}