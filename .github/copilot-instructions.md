<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# Webpack Microfrontend Project Instructions

## Project Overview
This workspace contains a webpack microfrontend architecture with:
- Shell/Host Application: Main container app that loads microfrontends
- Microfrontend App 1: First Angular micro-application  
- Microfrontend App 2: Second Angular micro-application

## Technology Stack
- Angular 17+
- Webpack 5 with Module Federation
- TypeScript
- Angular CLI

## Architecture Notes
- All applications use Module Federation for runtime integration
- Shell app serves as the host and loads remote modules
- Each microfrontend exposes specific components/modules
- Development servers run on different ports for isolation

## Development Guidelines
- Use Angular best practices for component development
- Follow microfrontend principles for loose coupling
- Ensure proper error boundaries and fallbacks
- Test microfrontends both in isolation and integrated

## Build and Deployment
- Each app has independent build pipeline
- Shell app aggregates and serves all microfrontends
- Production builds should be optimized for loading performance