export type Business = {
  id: string;
  business_reference: string;
  name: string;
  type: string;
  trading_status: string;
  risk_assessment_score: string;
  compliance_status: string;
  address: string;
  contact_name: string;
  contact_email: string;
  contact_phone: string;
  business_sector: string;
  created_at: string;
  updated_at: string;
};

export type Inspection = {
  id: string;
  inspection_reference: string;
  business_id: string;
  date: string;
  type: string;
  status: string;
  findings: string;
  inspector: string;
  score: number;
  recommendations: string;
  created_at: string;
  updated_at: string;
};

export type Equipment = {
  id: string;
  business_id: string;
  name: string;
  type: string;
  serial_number?: string;
  last_inspection_date?: string;
  next_inspection_date?: string;
  status?: string;
  notes?: string;
  created_at: string;
  updated_at: string;
};

export type Complaint = {
  id: string;
  business_id: string;
  complaint_reference: string;
  date_received: string;
  complainant_name?: string;
  complainant_contact?: string;
  description: string;
  status: string;
  priority: string;
  assigned_to?: string;
  resolution?: string;
  resolved_date?: string;
  created_at: string;
  updated_at: string;
};

export type Legislation = {
  id: string;
  title: string;
  reference_number: string;
  description?: string;
  effective_date?: string;
  category?: string;
  status?: string;
  requirements?: string;
  created_at: string;
  updated_at: string;
};

export type Investigation = {
  id: string;
  investigation_reference: string;
  business_id: string;
  start_date: string;
  status: string;
  lead_investigator: string;
  description?: string;
  findings?: string;
  conclusion?: string;
  close_date?: string;
  related_complaint_id?: string;
  created_at: string;
  updated_at: string;
};

export type UserRole = "admin" | "manager" | "inspector" | "user";

export type ResourcePermission = {
  resource: string;
  actions: Array<"list" | "show" | "create" | "edit" | "delete">;
};

export const rolePermissions: Record<UserRole, ResourcePermission[]> = {
  admin: [{ resource: "*", actions: ["list", "show", "create", "edit", "delete"] }],
  manager: [
    { resource: "businesses", actions: ["list", "show", "create", "edit"] },
    { resource: "inspections", actions: ["list", "show", "create", "edit"] },
    { resource: "equipment", actions: ["list", "show", "create", "edit"] },
    { resource: "complaints", actions: ["list", "show", "create", "edit"] },
    { resource: "legislation", actions: ["list", "show"] },
    { resource: "investigations", actions: ["list", "show", "create", "edit"] },
  ],
  inspector: [
    { resource: "businesses", actions: ["list", "show"] },
    { resource: "inspections", actions: ["list", "show", "create", "edit"] },
    { resource: "equipment", actions: ["list", "show"] },
    { resource: "complaints", actions: ["list", "show", "create"] },
    { resource: "legislation", actions: ["list", "show"] },
    { resource: "investigations", actions: ["list", "show"] },
  ],
  user: [
    { resource: "businesses", actions: ["list", "show"] },
    { resource: "inspections", actions: ["list", "show"] },
    { resource: "equipment", actions: ["list", "show"] },
    { resource: "complaints", actions: ["list", "show", "create"] },
    { resource: "legislation", actions: ["list", "show"] },
  ],
};
