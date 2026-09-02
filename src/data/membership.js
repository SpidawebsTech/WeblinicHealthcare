export const MEMBERSHIP_PLANS = [
  {
    id: "basic",
    name: "Basic",
    price: 999,
    period: "month",
    perks: ["2 free consultations/month", "10% off pharmacy orders", "Standard support"],
  },
  {
    id: "plus",
    name: "Plus",
    price: 1999,
    period: "month",
    perks: ["5 free consultations/month", "20% off pharmacy orders", "15% off lab tests", "Priority support"],
    popular: true,
  },
  {
    id: "family",
    name: "Family",
    price: 3499,
    period: "month",
    perks: ["Unlimited consultations", "25% off pharmacy & lab", "Up to 4 family members", "24/7 priority support"],
  },
];