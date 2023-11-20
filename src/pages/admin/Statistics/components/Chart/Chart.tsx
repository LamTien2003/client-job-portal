import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { useGetJobMonthlyQuery } from '@/services/statisticApiSlice';
import { StatisticJobMonthly } from '@/types/Statistic';
import { useState, useEffect } from 'react';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const ChartStatis = () => {
    const { data: jobMonthlyData, isLoading, isError } = useGetJobMonthlyQuery();
    const [job, setJob] = useState<StatisticJobMonthly[]>([]);

    useEffect(() => {
        if (!isLoading && !isError && jobMonthlyData?.data?.data) {
            setJob(jobMonthlyData?.data?.data);
        }
    }, [jobMonthlyData?.data?.data, isError, isLoading]);

    const data = {
        labels: job.map((item) => `Tháng ${item.month}`).reverse(),
        datasets: [
            {
                label: 'Công việc',
                data: job.map((item) => item.amountJob).reverse(),
                borderColor: 'rgb(0, 167, 172)',
                backgroundColor: 'rgb(0, 167, 172)',
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: 'Biểu đồ thống kê công việc được tạo theo tháng',
            },
        },
    };

    return (
        <div className="w-[80%]">
            <Line data={data} options={options} />
        </div>
    );
};

export default ChartStatis;
