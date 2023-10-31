export type TableHeaderLabel =
  | "registrationNumber"
  | "applicant"
  | "education"
  | "phoneNumber"
  | "email"
  | "email"
  | "track"
  | "documentEvaluation"
  | "personalityEvaluation"
  | "writtenEvaluation";

export type Order = "asc" | "desc";

export interface TableHeader {
  label: TableHeaderLabel;
  value: string;
}

export interface TableRowData {
  registrationNumber: number;
  applicant: string;
  education: string;
  phoneNumber: string;
  email: string;
  track: string;
  documentEvaluation: number;
  personalityEvaluation: string;
  writtenEvaluation: number;
}
