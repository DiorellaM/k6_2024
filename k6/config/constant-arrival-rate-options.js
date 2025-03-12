export const oneHourValidation = {
  scenarios: {
    constant_arrival_rate_scenario: {
      executor: "constant-arrival-rate",
      rate: 8,
      timeUnit: "1m",
      duration: "1m",
      preAllocatedVUs: 5,
      maxVUs: 10,
    },
  },
  thresholds: {
    http_req_duration: ["p(95)<2000", "avg<1000"],
    http_req_failed: ["rate<0.01"],
  },
};
