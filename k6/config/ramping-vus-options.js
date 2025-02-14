export const quickValidation = {
  scenarios: {
    ramp_vus_scenario: {
      executor: "ramping-vus",
      startVUs: 10,
      stages: [
        { duration: "1m", target: 5 },
        { duration: "2m", target: 10 },
        { duration: "1m", target: 5 },
      ],
      gracefulRampDown: "1s",
    },
  },
  thresholds: {
    http_req_duration: ["p(95)<2000", "avg<1000"],
    http_req_failed: ["rate<0.01"],
  },
};
