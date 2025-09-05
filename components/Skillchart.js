import { Pie } from "react-chartjs-2";

export default function SkillChart({ skills }) {
  const data = {
    labels: Object.keys(skills),
    datasets: [{
      data: Object.values(skills),
      backgroundColor: ["#FF6384","#36A2EB","#FFCE56","#4BC0C0","#9966FF"],
    }],
  };
  return <Pie data={data} />;
}

