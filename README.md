# MermaidGPT API Client

`mermaidgpt-api-client` is a powerful Node.js library that allows you to generate complex Mermaid diagrams directly from plain English descriptions. Built to simplify the creation of visual documentation, this library leverages OpenAI's capabilities to interpret natural language prompts and generate accurate, readable Mermaid syntax. Ideal for developers looking to integrate diagram creation into documentation tools, visual editors, and automated reporting systems.

## Table of Contents

- [Installation](#installation)
- [Setup](#setup)
- [Usage](#usage)
  - [Generate Diagrams with Prompts](#generate-diagrams-with-prompts)
  - [Predefined Diagram Functions](#predefined-diagram-functions)
- [Configuration](#configuration)
- [Examples](#examples)
- [License](#license)

## Installation

Install `mermaidgpt-api-client` via npm:

```bash
npm install mermaidgpt-api-client
```
## Setup

To use `mermaidgpt-api-client`, you will need:

1. **API URL**: The URL of your Mermaid diagram generation API.
2. **OpenAI API Key**: This is required to authenticate and use OpenAI's services.

Set these values in your environment or pass them directly when creating a client instance.

## Usage

### Initialize the Client

To start, import and initialize the `MermaidGPTClient` with your API URL and OpenAI API key:

```javascript
import MermaidGPTClient from 'mermaidgpt-api-client';  
const client = new MermaidGPTClient('https://your-api-url.com', process.env.OPENAI_API_KEY);
```

### Generate Diagrams with Prompts

You can generate a custom diagram by providing a natural language description as a prompt:

```javascript

(async () => {
    try {
        const mermaidCode = await client.generateDiagramFromPrompt('A flowchart for processing user data');
        console.log('Generated Mermaid Code:', mermaidCode);
    } catch (error) {
        console.error('Error:', error.message);
    }
})();

```

### Predefined Diagram Functions

`mermaidgpt-api-client` provides several helper functions for common diagram types, making it even easier to generate specific diagrams.

- **Flowcharts**: Use `generateFlowchart` to create flowcharts from an ordered array of steps.
- **Sequence Diagrams**: Use `generateSequenceDiagram` to create sequence diagrams with specific actors and actions.

#### Example: Flowchart

```javascript
(async () => {
    try {
        const flowchartCode = await client.generateFlowchart(['Start', 'Verify User', 'Process Payment', 'End']);
        console.log('Generated Flowchart Code:', flowchartCode);
    } catch (error) {
        console.error('Error:', error.message);
    }
})();

```

#### Example: Sequence Diagram

```javascript
(async () => {
    try {
        const sequenceCode = await client.generateSequenceDiagram('User Login', ['User requests login', 'System validates', 'User receives confirmation']);
        console.log('Generated Sequence Diagram Code:', sequenceCode);
    } catch (error) {
        console.error('Error:', error.message);
    }
})();

```

## Configuration

To configure the client:

1. **API URL**: The base URL of your Mermaid diagram generation API.
2. **API Key**: Each client instance requires an OpenAI API key to generate diagrams.

## Examples

### Basic Prompt-Based Diagram

```javascript

const client = new MermaidGPTClient('https://your-api-url.com', process.env.OPENAI_API_KEY);  (async () => {     try {         const diagramCode = await client.generateDiagramFromPrompt('An organizational chart for the marketing team');         console.log('Generated Diagram Code:', diagramCode);     } catch (error) {         console.error('Error:', error.message);     } })();
```

### Flowchart with Steps

```javascript

(async () => {
    try {
        const flowchartCode = await client.generateFlowchart(['Define Goals', 'Develop Strategy', 'Execute Campaign', 'Analyze Results']);
        console.log('Generated Flowchart Code:', flowchartCode);
    } catch (error) {
        console.error('Error:', error.message);
    }
})();
```
# License
This project is licensed under the MIT License. See the LICENSE file for details. 