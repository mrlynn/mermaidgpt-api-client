// src/MermaidGPTClient.js
import axios from 'axios';

class MermaidGPTClient {
    /**
     * Initialize the client with the base URL and API key.
     * @param {string} apiUrl - The base URL for the diagram API.
     * @param {string} apiKey - The user's API key.
     */
    constructor(apiUrl, apiKey) {
        if (!apiUrl || !apiKey) {
            throw new Error('Both apiUrl and apiKey are required.');
        }
        this.apiUrl = apiUrl;
        this.apiKey = apiKey;
    }

    /**
     * Generate a Mermaid diagram based on a prompt.
     * @param {string} prompt - The prompt describing the diagram.
     * @returns {Promise<string>} - The generated Mermaid diagram code.
     */
    async generateDiagram(prompt) {
        if (!prompt) {
            throw new Error('Prompt is required to generate a diagram.');
        }

        try {
            const response = await axios.post(`${this.apiUrl}/generate-diagram`, {
                apiKey: this.apiKey,
                prompt: prompt,
            });
            if (response.data.mermaidCode) {
                return response.data.mermaidCode;
            } else {
                throw new Error(response.data.error || 'Failed to generate diagram');
            }
        } catch (error) {
            console.error('Error generating diagram:', error.message);
            throw new Error(error.response?.data?.error || 'API request failed');
        }
    }
}

export default MermaidGPTClient;
