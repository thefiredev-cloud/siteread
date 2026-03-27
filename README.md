<div align="center">

# SiteRead

[![Build Status](https://img.shields.io/github/actions/workflow/status/thefiredev/siteread/ci.yml?branch=main&style=for-the-badge&logo=github)](https://github.com/thefiredev/siteread/actions)
[![Coverage](https://img.shields.io/codecov/c/github/thefiredev/siteread?style=for-the-badge&logo=codecov)](https://codecov.io/gh/thefiredev/siteread)
[![Version](https://img.shields.io/npm/v/@thefiredev/siteread?style=for-the-badge&logo=npm)](https://www.npmjs.com/package/@thefiredev/siteread)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![Discord](https://img.shields.io/discord/1234567890?style=for-the-badge&logo=discord&label=Discord)](https://discord.gg/thefiredev)

**Point a camera at any physical space. Get an operations manual in minutes.**

[Landing Page](https://thefiredev.com/siteread) · [Documentation](https://docs.thefiredev.com/siteread) · [Discord](https://discord.gg/thefiredev) · [Report Bug](https://github.com/thefiredev/siteread/issues)

</div>

---

## What is SiteRead?

SiteRead turns video feeds into operational intelligence. Point any camera — phone, IP cam, drone — at a restaurant, warehouse, or construction site. Within minutes, SiteRead delivers a full operations manual, identifies every bottleneck, and runs simulations of proposed improvements before you touch anything.

**See your operations. Fix them instantly.**

---

## Key Value Props

| | Capability | Impact |
|---|---|---|
| 📷 | **Any camera source** | Phone, IP, RTSP, drone, dashcam |
| 📋 | **Auto-generated ops manual** | No consultant, no clipboard, no waiting |
| 🚨 | **Bottleneck detection** | Real-time identification of flow blockers |
| 🔮 | **Improvement simulation** | See outcomes before you reorganize |
| 🏭 | **Multi-vertical** | Restaurants, warehouses, construction, retail |
| ⚡ | **Minutes, not months** | Full analysis from raw video in < 15 min |

---

## Features

### 🎥 Universal Video Ingestion
- RTSP / RTMP / HLS stream support
- File upload (MP4, MOV, AVI, MKV)
- Direct phone camera via mobile SDK
- Drone footage API integration
- Frame extraction at configurable intervals

### 🧠 Scene Understanding
- Object detection and classification (people, equipment, inventory, vehicles)
- Activity recognition (idle, working, blocked, moving)
- Spatial mapping — floor plan generation from video
- Temporal analysis — what happens when, for how long

### 📊 Bottleneck Analysis
- Queue depth measurement over time
- Throughput calculation per station / zone
- Idle time attribution by role and location
- Critical path identification

### 📋 Operations Manual Generation
- Auto-structured SOP documents
- Role-specific procedure breakdowns
- Equipment utilization logs
- Shift-by-shift performance snapshots

### 🔮 Improvement Simulation
- Propose layout changes → simulate traffic flow
- Staffing model adjustments → projected throughput delta
- Equipment additions → ROI estimate
- A/B scenario comparison

---

## Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                         SiteRead Platform                        │
├─────────────────────────────────────────────────────────────────┤
│                                                                   │
│   Video Sources          Ingestion Layer         Analysis Core   │
│   ┌──────────┐          ┌─────────────┐         ┌────────────┐  │
│   │ IP Cams  │──────────│  Stream     │─────────│  Vision    │  │
│   │ Phones   │          │  Processor  │         │  Engine    │  │
│   │ Drones   │          │  (FFmpeg)   │         │  (CV/ML)   │  │
│   │ Files    │          └─────────────┘         └─────┬──────┘  │
│   └──────────┘                                        │          │
│                                                        ▼          │
│                          ┌─────────────────────────────────┐     │
│                          │         Scene Graph DB           │     │
│                          │   (objects, activities, time)    │     │
│                          └─────────────┬───────────────────┘     │
│                                        │                          │
│              ┌─────────────────────────┼──────────────────┐      │
│              ▼                         ▼                   ▼      │
│      ┌──────────────┐         ┌──────────────┐   ┌──────────────┐│
│      │  Bottleneck  │         │   Manual     │   │  Simulation  ││
│      │  Detector    │         │  Generator   │   │   Engine     ││
│      └──────┬───────┘         └──────┬───────┘   └──────┬───────┘│
│             │                        │                   │        │
│             └────────────────────────┴───────────────────┘        │
│                                      │                             │
│                              ┌───────▼──────┐                     │
│                              │   API Layer  │                     │
│                              │  (REST/WS)   │                     │
│                              └───────┬──────┘                     │
│                                      │                             │
│                    ┌─────────────────┼────────────────┐           │
│                    ▼                 ▼                 ▼           │
│             ┌────────────┐   ┌─────────────┐   ┌───────────┐     │
│             │  Web App   │   │ Mobile SDK  │   │  Reports  │     │
│             │ Dashboard  │   │ (iOS/Android│   │  Export   │     │
│             └────────────┘   └─────────────┘   └───────────┘     │
└─────────────────────────────────────────────────────────────────┘
```

---

## Tech Stack

[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-20+-339933?style=flat-square&logo=nodedotjs)](https://nodejs.org/)
[![Python](https://img.shields.io/badge/Python-3.11+-3776AB?style=flat-square&logo=python)](https://www.python.org/)
[![OpenCV](https://img.shields.io/badge/OpenCV-4.x-5C3EE8?style=flat-square&logo=opencv)](https://opencv.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-4169E1?style=flat-square&logo=postgresql)](https://www.postgresql.org/)
[![Redis](https://img.shields.io/badge/Redis-7.x-DC382D?style=flat-square&logo=redis)](https://redis.io/)
[![Docker](https://img.shields.io/badge/Docker-24+-2496ED?style=flat-square&logo=docker)](https://www.docker.com/)
[![AWS](https://img.shields.io/badge/AWS-S3%2FLambda%2FRekognition-FF9900?style=flat-square&logo=amazonaws)](https://aws.amazon.com/)

---

## Getting Started

### Prerequisites

- Node.js 20+
- Docker & Docker Compose
- AWS account (for Rekognition)
- GPU recommended (CUDA 12+ for local vision processing)

### Quick Start

```bash
# Clone the repository
git clone https://github.com/thefiredev/siteread.git
cd siteread

# Install dependencies
npm install

# Configure environment
cp .env.example .env
# Edit .env with your API keys

# Start infrastructure
docker-compose up -d

# Run database migrations
npm run db:migrate

# Start development server
npm run dev
```

The API will be available at `http://localhost:3000`.

### Process Your First Video

```bash
# Upload a video file
curl -X POST http://localhost:3000/api/v1/analyze \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -F "video=@/path/to/your/video.mp4" \
  -F "vertical=restaurant"

# Check job status
curl http://localhost:3000/api/v1/jobs/{job_id} \
  -H "Authorization: Bearer YOUR_API_KEY"

# Get results
curl http://localhost:3000/api/v1/jobs/{job_id}/report \
  -H "Authorization: Bearer YOUR_API_KEY"
```

---

## API Reference

### Authentication

All API requests require a Bearer token in the `Authorization` header.

```
Authorization: Bearer sr_live_xxxxxxxxxxxxxxxxxxxxxxxx
```

### Endpoints

#### `POST /api/v1/analyze`
Submit a video for analysis.

**Request body (multipart/form-data):**
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `video` | file | Yes* | Video file (MP4, MOV, AVI) |
| `stream_url` | string | Yes* | RTSP/RTMP/HLS stream URL |
| `vertical` | string | No | `restaurant`, `warehouse`, `construction`, `retail` |
| `options` | JSON | No | Analysis configuration |

*One of `video` or `stream_url` required.

#### `GET /api/v1/jobs/{id}`
Get job status and progress.

#### `GET /api/v1/jobs/{id}/report`
Get the full analysis report (JSON or PDF).

#### `POST /api/v1/simulate`
Run improvement simulations against an existing analysis.

#### `GET /api/v1/streams`
List active stream monitors.

#### `POST /api/v1/streams`
Register a live stream for continuous monitoring.

Full API documentation at [docs.thefiredev.com/siteread/api](https://docs.thefiredev.com/siteread/api).

---

## Contributing

We welcome contributions. See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

```bash
# Fork the repo, then:
git checkout -b feature/your-feature-name
npm run test
npm run lint
git commit -m "feat: your feature description"
git push origin feature/your-feature-name
# Open a pull request
```

---

## Security

Found a vulnerability? See [SECURITY.md](./SECURITY.md) or email security@thefiredev.com.

---

## License

MIT © [The Fire Dev LLC](https://thefiredev.com)

---

<div align="center">

Built by **[The Fire Dev LLC](https://thefiredev.com)** — Agent-as-a-Service for the physical world.

[thefiredev.com](https://thefiredev.com) · [Discord](https://discord.gg/thefiredev) · [Twitter/X](https://x.com/thefiredev)

</div>
