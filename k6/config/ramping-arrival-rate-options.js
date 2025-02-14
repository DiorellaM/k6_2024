export const quickValidation = {
  scenarios: {
    ramping_arrival_scenario: {
      executor: "ramping-arrival-rate",
      startRate: 100,
      timeUnit: "1m",
      preAllocatedVUs: 60,
      stages: [
        { target: 100, duration: "1m" },
        { target: 300, duration: "2m" },
        { target: 30, duration: "1m" },
      ],
    },
  },
  thresholds: {
    http_req_duration: ["p(95)<2000", "avg<1000"],
    http_req_failed: ["rate<0.01"],
  },
};
