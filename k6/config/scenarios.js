export const quickValidation = {
  scenarios: {
    ramp_up_scenario: {
      executor: "ramping-vus",
      startVUs: 0,
      stages: [
        { duration: "1m", target: 5 },
        { duration: "2m", target: 10 },
        { duration: "1m", target: 5 },
      ],
    },
  },
  thresholds: {
    http_req_duration: ["p(95)<2000", "avg<1000"],
    http_req_failed: ["rate<0.01"],
  },
};

export const oneHourValidation = {
  scenarios: {
    ramp_up_scenario: {
      executor: "constant-arrival-rate",
      rate: 8,
      timeUnit: "1m",
      duration: "1h",
      preAllocatedVUs: 5,
      maxVUs: 10,
    },
  },
  thresholds: {
    http_req_duration: ["p(95)<2000", "avg<1000"],
    http_req_failed: ["rate<0.01"],
  },
};
