import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { useLoaderData } from "react-router";
import Heading from "../components/Heading";

const Statistics = () => {
  const products = useLoaderData();
  //   const categoryCount = products.reduce((acc, product) => {
  //     acc[product.category] = (acc[product.category] || 0) + 1;
  //     return acc;
  //   }, {});
  const chartData = products.map((product) => ({
    name: product.product_title,
    price: product.price,
  }));

  return (
    <div className="container mx-auto px-4 my-12">
      {/* Heading */}
      <section className="mb-10">
        <Heading title="Statistics" description='Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'></Heading>
      </section>

      {/* Chart Card */}
      <section className="bg-white p-6 rounded-2xl ">
        <h1 className="text-2xl font-bold">Statistics</h1>
        <div className="bg-white p-6 rounded-2xl shadow-xl">

          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="name"
                tick={{ fontSize: 12 }}
                interval={0}
                textAnchor="end"
              />
              <YAxis />
              <Tooltip />

              <Bar
                dataKey="price"
                fill="#9333EA" // Purple
                radius={[8, 8, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>
    </div>
  );
};

export default Statistics;
