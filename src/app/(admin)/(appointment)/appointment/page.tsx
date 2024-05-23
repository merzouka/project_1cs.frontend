"use client";
import { Title } from "@/app/(admin)/components/title";
import { ProcessData } from "../components/process";
import { useState } from "react";
import { ProcessPopup } from "../components/process-popup";


const PatientPage = () => {

    return (
        <div className="md:px-4 p-2 flex flex-col w-full h-full">
            <Title title={"Les pèlerins"} />
            <div className="flex justify-center items-center flex-grow">
                <ProcessPopup />
            </div>
        </div>
    );
};

export default PatientPage;
