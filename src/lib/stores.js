import { writable } from 'svelte/store';
import { calculateSunData, fetchGeolocationFromIP } from './utils';
import { DEFAULT_LAT, DEFAULT_LON, SUN_UPDATE_MS } from './constants';

/**
 * Create a sun data store that automatically updates based on location
 */
function createSunStore() {
	const { subscribe, set, update } = writable({
		color: '#ffffff',
		elevation: 0,
		isNight: false,
		lat: DEFAULT_LAT,
		lon: DEFAULT_LON
	});

	let updateInterval;

	function updateSunData(lat, lon) {
		const sunData = calculateSunData(lat, lon);
		update((state) => ({
			...state,
			...sunData,
			lat,
			lon
		}));
	}

	async function initialize() {
		// Try to get user location from IP
		const location = await fetchGeolocationFromIP();
		const lat = location?.lat ?? DEFAULT_LAT;
		const lon = location?.lon ?? DEFAULT_LON;

		// Initial calculation
		updateSunData(lat, lon);

		// Set up periodic updates
		if (typeof window !== 'undefined') {
			updateInterval = window.setInterval(() => {
				updateSunData(lat, lon);
			}, SUN_UPDATE_MS);
		}
	}

	function destroy() {
		if (updateInterval) {
			clearInterval(updateInterval);
		}
	}

	return {
		subscribe,
		initialize,
		destroy
	};
}

export const sunStore = createSunStore();
