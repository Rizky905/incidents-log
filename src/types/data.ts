export interface Incident {
  id: number;
  application_name: string;
  module_name: string;
  request_date: string;
  request_by: string;
  email_pic: string;
  category: string;
  type_incident: string;
  incident_status: "PROCESSING" | "DONE";
  closed_at: string;
  closed_by: string;
  type_solution: string;
  root_cause: string;
  solution: string;
  required_urf: "YES" | "NO";
}

export interface Application {
  id: number;
  name: string;
  pic: string;
}
