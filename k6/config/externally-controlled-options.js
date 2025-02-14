export const quickValidation = {
  scenarios: {
    externally_controlled_scenario: {
      executor: "externally-controlled",
      vus: 10,
      maxVUs: 50,
      duration: "10m",
    },
  },
  thresholds: {
    http_req_duration: ["p(95)<2000", "avg<1000"],
    http_req_failed: ["rate<0.01"],
  },
};
