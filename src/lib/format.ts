import type { Period } from "@/types/portfolio";

/** "2022-03" → "2022.03" */
function formatYearMonth(ym: string): string {
  const [year, month] = ym.split("-");
  return `${year}.${month}`;
}

/** { start: "2022-03", end: null } → "2022.03 — 현재" */
export function formatPeriod(period: Period, presentLabel = "현재"): string {
  const start = formatYearMonth(period.start);
  const end = period.end ? formatYearMonth(period.end) : presentLabel;
  return `${start} — ${end}`;
}

/** { start: "2022-03", end: null } → "3년 11개월" */
export function formatDuration(period: Period): string {
  const [startYear, startMonth] = period.start.split("-").map(Number);
  const now = new Date();
  const endYear = period.end
    ? Number(period.end.split("-")[0])
    : now.getFullYear();
  const endMonth = period.end
    ? Number(period.end.split("-")[1])
    : now.getMonth() + 1;

  const totalMonths =
    (endYear - startYear) * 12 + (endMonth - startMonth) + 1;
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  if (years === 0) return `${months}개월`;
  if (months === 0) return `${years}년`;
  return `${years}년 ${months}개월`;
}
