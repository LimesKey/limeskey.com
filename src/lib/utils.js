import SunCalc from 'suncalc';
import { DEFAULT_LAT, DEFAULT_LON } from './constants';

// take kelvin temp and turn it into a hex color
export function colorTempToHex(kelvin) {
	const temp = Math.max(1000, Math.min(40000, kelvin)) / 100;
	let red, green, blue;

	if (temp <= 66) {
		red = 255;
		green = temp;
		green = 99.4743696 * Math.log(green) - 161.1195681;
	} else {
		red = temp - 60;
		red = 329.698727466 * Math.pow(red, -0.1332047592);
		green = temp - 60;
		green = 288.1221695 * Math.pow(green, -0.0755148492);
	}

	if (temp >= 66) {
		blue = 255;
	} else if (temp <= 19) {
		blue = 0;
	} else {
		blue = temp - 10;
		blue = 138.5177312 * Math.log(blue) - 305.0447927;
	}

	const toHex = (value) => {
		const hex = Math.round(Math.max(0, Math.min(255, value))).toString(16);
		return hex.length === 1 ? '0' + hex : hex;
	};

	return `#${toHex(red)}${toHex(green)}${toHex(blue)}`;
}

// figure out how warm/cool the sun should look based on how high it is
export function elevationToColorTemp(elevationAngle) {
	if (elevationAngle < -6) {
		return 1800; // Night - deep warm red/orange
	} else if (elevationAngle < 0) {
		// Twilight
		const twilightProgress = (elevationAngle + 6) / 6;
		return 1800 + (7500 - 1800) * twilightProgress;
	} else if (elevationAngle < 30) {
		// Morning/Evening glow
		const glowProgress = elevationAngle / 30;
		return 7500 + (2500 - 7500) * glowProgress;
	} else {
		// Daytime - cool blue
		return 7500;
	}
}

// get all the sun info we need for rendering
export function calculateSunData(lat, lon) {
	const now = new Date();
	
	try {
		const pos = SunCalc.getPosition(now, lat, lon);
		const elevationAngle = (pos.altitude * 180) / Math.PI;
		const colorTemp = elevationToColorTemp(elevationAngle);
		
		return {
			elevation: elevationAngle,
			color: colorTempToHex(colorTemp),
			isNight: elevationAngle < 0
		};
	} catch (err) {
		console.warn('SunCalc failed, using fallback model', err);
		return calculateSunDataFallback(lat, lon);
	}
}

// if suncalc dies, use this basic math instead
function calculateSunDataFallback(lat, lon) {
	const now = new Date();
	const hours = now.getHours() + now.getMinutes() / 60;
	const solarNoon = 12;
	const hourAngle = (hours - solarNoon) * 15;

	const start = new Date(now.getFullYear(), 0, 0);
	const diff = now.getTime() - start.getTime();
	const oneDay = 1000 * 60 * 60 * 24;
	const dayOfYear = Math.floor(diff / oneDay);

	const declination = 23.44 * Math.sin((2 * Math.PI * (dayOfYear - 81)) / 365);
	const elevationAngle =
		Math.asin(
			Math.sin((declination * Math.PI) / 180) * Math.sin((lat * Math.PI) / 180) +
			Math.cos((declination * Math.PI) / 180) * Math.cos((lat * Math.PI) / 180) * 
			Math.cos((hourAngle * Math.PI) / 180)
		) * (180 / Math.PI);

	const colorTemp = elevationToColorTemp(elevationAngle);
	
	return {
		elevation: elevationAngle,
		color: colorTempToHex(colorTemp),
		isNight: elevationAngle < 0
	};
}

// get user's rough location from their ip (no permission popup)
export async function fetchGeolocationFromIP() {
	try {
		const res = await fetch('https://ipapi.co/json/');
		if (!res.ok) return null;
		
		const data = await res.json();
		const lat = data.latitude ?? data.lat;
		const lon = data.longitude ?? data.lon;
		
		if (lat && lon) {
			return {
				lat: parseFloat(lat),
				lon: parseFloat(lon)
			};
		}
		return null;
	} catch (err) {
		console.warn('IP geolocation failed:', err);
		return null;
	}
}

// make dates look nice
export function formatDate(dateString) {
	if (!dateString) return '';
	return new Intl.DateTimeFormat(undefined, {
		month: 'short',
		day: 'numeric',
		year: 'numeric'
	}).format(new Date(dateString));
}

// smooth animation helper for the sticker scaling
export function animateValue(start, target, duration, onUpdate) {
	const delta = target - start;
	const startTime = performance.now();
	let rafId;

	function step(now) {
		const elapsed = now - startTime;
		const t = Math.min(elapsed / duration, 1);
		const eased = 1 - Math.pow(1 - t, 3); // Cubic ease-out
		
		onUpdate(start + delta * eased);
		
		if (t < 1) {
			rafId = requestAnimationFrame(step);
		}
	}

	rafId = requestAnimationFrame(step);
	
	return () => cancelAnimationFrame(rafId);
}
