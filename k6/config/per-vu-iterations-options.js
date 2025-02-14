export const quickValidation = {
  scenarios: {
    per_vu_scenario: {
      executor: "per-vu-iterations",
      vus: 10,
      iterations: 20,
      maxDuration: "40s",
    },
  },
  thresholds: {
    http_req_failed: ["rate<0.01"],
    http_req_duration: ["p(95)<200"],
    checks: ["rate>0.9"],
  },
};
