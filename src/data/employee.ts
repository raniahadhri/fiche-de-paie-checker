
export interface Deduction {
  label: string;
  amount: number;
}

export interface Period {
  month: string;
  year: number;
}

export interface Employee {
  employeeName: string;
  employeeId: string;
  period: Period;
  contractType: string;
  grossSalary: number;
  netSalary: number;
  deductions: Deduction[];
  employerContributions: Deduction[];
  paymentDate: string;
  bankAccount: {
    iban: string;
    bic: string;
  };
}

const employeeData: Employee = {
  employeeName: "Jean Dupont",
  employeeId: "EMP123456",
  period: {
    month: "mai",
    year: 2025
  },
  contractType: "CDI",
  grossSalary: 3200.0,
  netSalary: 100.0,
  deductions: [
    { label: "Sécurité sociale", amount: 250.0 },
    { label: "Assurance chômage", amount: 90.0 },
    { label: "Retraite complémentaire", amount: 310.0 },
    { label: "CSG/CRDS", amount: 280.0 },
    { label: "Mutuelle", amount: 60.0 }
  ],
  employerContributions: [
    { label: "Cotisation patronale retraite", amount: 420.0 },
    { label: "Assurance chômage employeur", amount: 160.0 },
    { label: "Formation professionnelle", amount: 75.0 },
    { label: "Accidents du travail", amount: 85.0 }
  ],
  paymentDate: "2025-06-01",
  bankAccount: {
    iban: "FR76 3000 6000 0112 3456 7890 189",
    bic: "AGRIFRPPXXX"
  }
};

export default employeeData;
