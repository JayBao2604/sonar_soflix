"use client";

import { Card , CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import { Header } from "./header";
import { Social } from "./social";
import { Car } from "lucide-react";
import { BackButton } from "./back-button";


interface CardWrapperProps {
    children: React.ReactNode;
    headerLabel: string;
    backButtonLabel: string;
    backButtonHref: string;
    showSocial?: boolean;
    topText: string;
}

export const CardWrapper = ({
    children,
    headerLabel,
    backButtonLabel,
    backButtonHref,
    showSocial,
    topText,
}: CardWrapperProps) => {
    return (
        <Card className="w-[400px] shadow-md" style={{backgroundColor: 'black', boxShadow: 'none', border: 'none'}}>
            <CardHeader>
                <Header label={headerLabel} text={topText}/>
            </CardHeader>
            <CardContent>
                {children}    
            </CardContent>    
            {showSocial && (
                <CardFooter>
                    <Social />
                </CardFooter>
            )}
            <CardFooter>
                <BackButton
                    label={backButtonLabel}
                    href={backButtonHref}
                />
            </CardFooter>
        </Card>
    )
}