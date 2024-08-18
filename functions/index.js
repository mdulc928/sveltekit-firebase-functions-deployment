/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import { onRequest } from 'firebase-functions/v2/https';
import { Server } from './build/server/index.js';
import { manifest, prerendered } from './build/server/manifest.js';
import { installPolyfills } from '@sveltejs/kit/node/polyfills';
import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

installPolyfills();

const app = new express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static(join(__dirname, 'build', 'prerendered')));

export const helloWorld = onRequest({ region: 'us-east1' }, async (req, res) => {
	// logger.info("Hello logs!", {structuredData: true});
	if (prerendered.has(req.url)) {
		return app(req, res);
	}

	const server = new Server(manifest);
	await server.init({ env: process.env });

	const rendered = await server.respond(toSvelteKitRequest(req));

	if (!rendered) {
		return res.writeHead(404, 'Not Found').end();
	}

	/** @type {ArrayBuffer} */
	const body = await rendered.arrayBuffer();

	return res
		.writeHead(rendered.status, Object.fromEntries(rendered.headers))
		.end(Buffer.from(body));
});

/**
 * @param {Request} request
 * @returns {Request}
 */
function toSvelteKitRequest(request) {
	// Firebase sometimes omits the protocol used. Default to http.
	const protocol = request.headers['x-forwarded-proto'] || 'http';
	// Firebase forwards the request to sveltekit, use the forwarded host.
	const host = `${protocol}://${request.headers['x-forwarded-host']}`;
	const { href } = new URL(request.url || '', host);
	return new Request(href, {
		method: request.method,
		headers: toSvelteKitHeaders(request.headers),
		body: request.rawBody ? request.rawBody : null
	});
}

/**
 * @param {IncomingHttpHeaders} headers
 */
function toSvelteKitHeaders(headers) {
	/** @type {Record<string, string>} */
	const finalHeaders = {};

	// Assume string | string[] types for all values
	for (const [key, value] of Object.entries(headers)) {
		if (value) {
			finalHeaders[key] = Array.isArray(value) ? value.join(',') : value;
		}
	}

	return finalHeaders;
}
