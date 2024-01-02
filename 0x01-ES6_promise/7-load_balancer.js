// 7-load_balancer.js

/**
 * Returns the value of the promise that resolves first between China and US downloads.
 * @param {Promise} chinaDownload - The Promise representing the download from China.
 * @param {Promise} USDownload - The Promise representing the download from the US.
 * @returns {Promise} A Promise that resolves to the value of the first resolved promise.
 */
export default function loadBalancer(chinaDownload, USDownload) {
  return Promise.race([chinaDownload, USDownload]);
}
