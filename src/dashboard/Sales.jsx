import React, { useState } from 'react';
import { Chart as ChartJS } from 'chart.js/auto';
import { Bar, Doughnut } from 'react-chartjs-2';

const Sales = () => {

    return (
        <div className="flex justify-around  ">
            <div  className="border border-black bg-white rounded-xl drop-shadow-md ">
                <div className="flex justify-between p-2">
                    <h1>Orders</h1>
                    <button id="button">
                        View All
                        </button>
                </div>
                <div style={{ width: '600px', height: '250px' }} className="flex justify-center" >
                <Bar
                    data={{
                        labels: ["A", "B", "C"],
                        datasets: [
                            {
                                label: "revenue",
                                data: [200, 300, 400],
                            },
                            {
                                label: "loss",
                                data: [40, 300, 4000],
                            }
                        ]

                    }}
                />
                </div>
            </div>
            <div className="border border-black bg-white rounded-xl drop-shadow-md h-96 ">
                <div className="flex justify-between p-2">
                    <h1>Orders</h1>
                    <button id="button">
                        View All
                        </button>
                </div>
                <div style={{ width: '400px', height: '300px' }} className="mx-auto">
                    <Doughnut
                        data={{
                            labels: ["A", "B", "C"],
                            datasets: [
                                {
                                    label: "revenue",
                                    data: [200, 300, 400],
                                },
                                {
                                    label: "loss",
                                    data: [40, 300, 4000],
                                }
                            ]

                        }}
                    />
                </div>
            </div>

        </div>
    )
}

export default Sales
