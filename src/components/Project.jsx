import React from "react";
import { Button } from "@/components/ui/button"
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const Project = () => {


    return (
        <div className="md:flex md:space-x-40  md:justify-center justify-center">
            <div className="mt-10">
                <Card className='md:w-[400px] max-w-fit m-3'>
                    <CardHeader>
                        <CardTitle>Java Classification Dataset Predictor using ML techniques</CardTitle>
                        <CardDescription>(Oct 2024 - Dec 2024)</CardDescription>

                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col gap-6">
                            <div className="grid gap-2 ">
                                <ul className="list-disc pl-5 space-y-2 text-base">
                                    <li>Implemented classification technique of supervised learning enhancing real-life dataset prediction accuracy by 96.2%</li>
                                    <li>Utilised matrices to train & predict and created a method to compare results (actual vs pred) using neural network concepts</li>
                                    <li>Developed a Dataset Reader class which extracts data using File Reader and creates matrices to train and test
                                    </li>
                                </ul>
                            </div>

                        </div>

                    </CardContent>
                    <CardFooter>
                        <Button className='cursor-pointer'>Github</Button>
                    </CardFooter>
                </Card>
            </div>
            <div className="mt-10">
                <Card className='max-w-fit m-3 md:w-[400px]'>
                    <CardHeader>
                        <CardTitle>Excel Housing Construction Forecast</CardTitle>
                        <CardDescription>(Dec 2024)</CardDescription>

                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col gap-6">
                            <div className="grid gap-2">
                                <ul className="list-disc pl-5 space-y-2 text-base">
                                    <li>Applied the PED framework to analyze and organize 60 FRED datasets on new housing construction across 51 states
                                    </li>
                                    <li>Utilised Linear Regression to predict new housing construction licenses which gave valuable insights to housing investors
                                    </li>
                                    <li>Developed dynamic charts and an interactive dashboard to aid prospective homeowners in efficient data interpretation
                                    </li>
                                </ul>
                            </div>

                        </div>

                    </CardContent>
                    <CardFooter>
                        <Button className='cursor-pointer'>Github</Button>
                    </CardFooter>
                </Card>
            </div>
            <div className="mt-10">
                <Card className='md:w-[400px] max-w-fit m-3'>
                    <CardHeader>
                        <CardTitle>Project 2</CardTitle>
                        <CardDescription>Java,Python</CardDescription>

                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col gap-6">
                            <div className="grid gap-2">
                                <ul>
                                    <li>Implemented classification technique of supervised learning enhancing real-life dataset prediction accuracy by 96.2%</li>
                                </ul>
                            </div>

                        </div>

                    </CardContent>
                    <CardFooter>
                        <Button className='cursor-pointer'>Github</Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}

export default Project