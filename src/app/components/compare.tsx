import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState} from "react";
import link from 'next/link';

const Compare = () =>{
    return (

        <main>
    <h1>Lets Compare</h1>
    <link href="/pagedivider">
        <a>Page Divider</a>
        </link>
    <div className="grid">
    <div className="flex rounded-[54px] bg-[#09131F] h-full w-[768] grid grid-cols-2 gap-16 items-center justify-center p-16">
      {["1", "2"].map((e: any, index: number) => (
        <Card key={index}className="w-56 h-56 rounded-lg">
            {" "}
            <p className="font-medium">Solar Panel {e} </p>
        </Card>
      ))} 
      </div> 
    </div>
</main>
    );
};

export default Compare;

