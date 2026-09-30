# WebRTC Mesh Group Call Application

A lightweight, real-time multi-peer video and audio group calling application built with native WebRTC APIs and a custom Socket.io signaling server using a full-mesh peer-to-peer network topology.

---

## Overview

This project demonstrates how to implement WebRTC multi-peer networking from scratch without relying on third-party WebRTC wrapper libraries. Every participant in a room creates a dedicated `RTCPeerConnection` instance for every other participant (1-on-1 mesh topology), while Socket.io handles the room management and signaling handshake (SDP Offers/Answers and ICE Candidates).

---

## Features

- **Full-Mesh P2P Connections:** Direct 1-on-1 media streaming between all participants in a room.
- **Custom Socket.io Signaling:** Robust routing for room events (`join-room`, `existing-peers`, `user-joined`, `user-left`).
- **Dynamic Room Routing:** Dynamic room support via URL query parameters (e.g., `?room=room-1`).
- **Dynamic DOM Management:** Video grid elements are created and removed dynamically as peers join or disconnect.
- **Graceful Cleanup:** Automatically closes `RTCPeerConnection` pipelines and frees hardware/memory resources when a peer leaves.

---

## Tech Stack & Protocols

- **Frontend:** HTML5, CSS3, Vanilla JavaScript (`RTCPeerConnection`, `navigator.mediaDevices`)
- **Backend:** Node.js, Express, Socket.io
- **Protocols & Concepts:** WebRTC, SDP (Session Description Protocol), ICE Candidates, STUN (Google Public STUN)

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- npm (Node Package Manager)

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/Farhad8797/webrtc-socketio-mesh.git
```
2. **Install the modules:**
```bash
npm install
```
3. **Run server:**

```bash
npm run dev
```

4. **Generate dummy https link:**

```bash
npx localtunnel --port 3000
```
