export type SignupPayload = {
  firstName: string;
  lastName: string;
  companyName?: string;
  email: string;
  phone?: string;
  selectedPlan?: string;
  billingAnnual?: boolean;
};

 
export function mapToQuickBooksClient(payload: SignupPayload) {
  // QuickBooks Customer JSON shape (simplified example)
  const customer = {
    DisplayName: payload.companyName || `${payload.firstName} ${payload.lastName}`,
    PrimaryEmailAddr: { Address: payload.email },
    PrimaryPhone: payload.phone ? { FreeFormNumber: payload.phone } : undefined,
    GivenName: payload.firstName,
    FamilyName: payload.lastName,
    CustomerTypeRef: { value: payload.selectedPlan || "standard", name: "Subscription Plan" },
    CustomFields: [
      { DefinitionId: "plan", Name: "Selected Plan", Type: "StringType", StringValue: payload.selectedPlan || "N/A" },
      { DefinitionId: "billing", Name: "Billing Cycle", Type: "StringType", StringValue: payload.billingAnnual ? "Annual" : "Monthly" },
    ],
  };

 
  return customer;
}

 