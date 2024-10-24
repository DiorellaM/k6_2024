export const baselineOptions = {
  vus: 1,
  duration: "10000",
  thresholds: {
    http_req_duration: [
      { threshold: "avg<2000", abortOnFail: true },
      { threshold: "p(95)<2000", abortOnFail: true },
    ],
  },
};
