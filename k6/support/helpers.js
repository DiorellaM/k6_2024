export function logResponse(response) {
  if (
    (response.status !== 200 && response.status !== 201) ||
    response.timings.duration > 2000
  ) {
    console.error(
      `Status: ${response.status}, Response time: ${response.timings.duration}ms, Body: ${response.body}`
    );
  }
}
