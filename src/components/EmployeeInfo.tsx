import type { Employee } from "../data/employee";

type Props = {
  employee: Employee;
};

export default function EmployeeInfo({ employee }: Props) {
  return (
    <div>
      <p><strong>Nom :</strong> {employee.employeeName}</p>
      <p><strong>Période :</strong> {employee.period.month} {employee.period.year}</p>
      <p><strong>Type de contrat :</strong> {employee.contractType}</p>
      <p><strong>Salaire brut :</strong> {employee.grossSalary} €</p>
      <p><strong>Salaire net :</strong> {employee.netSalary} €</p>
    </div>
  );
}
