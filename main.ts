import getStatus, {
  computeAverage,
  EnrollmentStatus
} from "./gradeUtils";

interface Enrollee {
  name: string;
  prelim: number;
  midterm: number;
  final: number;
}

interface EligibilityReport {
  name: string;
  average: number;
  status: EnrollmentStatus;
  remarks?: string;
}

const enrollees: Enrollee[] = [
  { name: "Ana Cruz", prelim: 85, midterm: 90, final: 88 },
  { name: "Bea Santos", prelim: 70, midterm: 65, final: 60 },
  { name: "Cid Ramos", prelim: 95, midterm: 92, final: 97 },
  { name: "Dex Alonzo", prelim: 60, midterm: 55, final: 50 },
  { name: "Eli Tan", prelim: 78, midterm: 80, final: 76 }
];

let batchId: string | number = "IT313-2026";

if (typeof batchId === "string") {
  console.log(`Batch ID: ${batchId}`);
} else {
  console.log(`Batch ID: ${batchId}`);
}

function groupBy<T>(
  items: T[],
  keyFn: (item: T) => string
): Record<string, T[]> {
  return items.reduce((groups, item) => {
    const key = keyFn(item);

    if (!groups[key]) {
      groups[key] = [];
    }

    groups[key].push(item);
    return groups;
  }, {} as Record<string, T[]>);
}

function getEnrollees(): Promise<Enrollee[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(enrollees);
    }, 1000);
  });
}

async function main(): Promise<void> {
  try {
    const data = await getEnrollees();

    console.log(
      "=== IT313 Enrollment Eligibility Report (TypeScript) ==="
    );

    const reports: EligibilityReport[] = data.map((student) => {
      const average = computeAverage(
        student.prelim,
        student.midterm,
        student.final
      );

      const status = getStatus(average);

      return {
        name: student.name,
        average,
        status,
        ...(status === EnrollmentStatus.Probation
          ? { remarks: "Needs consultation" }
          : {})
      };
    });

    reports.forEach((report) => {
      const remarks = report.remarks
        ? ` - ${report.remarks}`
        : "";

      console.log(
        `${report.name} - Average: ${report.average.toFixed(2)} - ${report.status}${remarks}`
      );
    });

    const classAverage =
      reports.reduce(
        (total, report) => total + report.average,
        0
      ) / reports.length;

    const grouped = groupBy(
      reports,
      (report) => report.status
    );

    console.log(
      `Class Average: ${classAverage.toFixed(2)}`
    );

    console.log(
      `Passing: ${
        grouped[EnrollmentStatus.Passing]?.length ?? 0
      } / ${reports.length}`
    );
  } catch (error) {
    console.error(
      "Failed to get enrollee data:",
      error
    );
  }
}

main();