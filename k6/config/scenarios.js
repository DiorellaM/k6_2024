export const baselineOptions = {
  vus: 5,
  duration: "3000",
  thresholds: {
    http_req_duration: [
      { threshold: "avg<2000", abortOnFail: true },
      { threshold: "p(95)<2000", abortOnFail: true },
    ],
  },
  cloud: {
    projectID: 3721065,
  },
};
