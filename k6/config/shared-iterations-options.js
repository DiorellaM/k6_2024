export const quickValidation = {
  scenarios: {
    shared_iterations_scenario: {
      executor: "shared-iterations",
      vus: 10,
      iterations: 10,
      maxDuration: "30s",
    },
  },
  thresholds: {
    http_req_failed: ["rate<0.01"],
    http_req_duration: ["p(95)<200"],
    checks: ["rate>0.9"],
  },
};
