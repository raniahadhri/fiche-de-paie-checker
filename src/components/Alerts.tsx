import { useEffect, useState } from "react";
import "../App.css"

type Deduction = { label: string; amount: number };

type Props = {
  grossSalary: number;
  netSalary: number;
  deductions: Deduction[];
};

export default function Alerts({ grossSalary, netSalary, deductions }: Props) {
  const [alerts, setAlerts] = useState<string[]>([]);

  useEffect(() => {
    const newAlerts: string[] = [];

    if (netSalary < grossSalary * 0.5) {
      newAlerts.push("❗ Salaire net faible : moins de 50% du brut.");
    }

    const totalDeductions = deductions.reduce((sum, d) => sum + d.amount, 0);
    if (totalDeductions > grossSalary * 0.4) {
      newAlerts.push("⚠️ Prélèvements élevés : plus de 40% du brut.");
    }

    setAlerts(newAlerts);
  }, [grossSalary, netSalary, deductions]);

  if (alerts.length === 0) return null;

  return (
    <div className="alerts-container">
      <ul>
        {alerts.map((alert, i) => (
          <li key={i}>{alert}</li>
        ))}
      </ul>
    </div>
  );
}
