<img width="1919" height="958" alt="image" src="ARGI 1.png" />
<img width="1898" height="956" alt="image" src="ARGI 2.png" />
<img width="1912" height="963" alt="image" src="ARGI 3.png" />
<img width="1919" height="910" alt="image" src="ARGI 4.png" />



# 🌱 Agrivoltaics – Micro-Zone Shadow Mapping & Precision Irrigation Engine   mahsakjsj cs

An intelligent agrivoltaics planning and monitoring web application that helps users understand solar panel shadows over agricultural fields and plan more precise irrigation for different crop zones.

## 📌 Project Overview

Agrivoltaics combines solar energy generation with agricultural production by placing solar panels above or alongside crops.

However, solar panels create changing shadow patterns that can affect crop sunlight exposure and water requirements.

Our project aims to provide a digital tool for exploring these conditions through:

- Field configuration and panel geometry
- Solar shadow mapping
- Micro-zone analysis
- Precision irrigation planning
- Crop and solar co-optimization

## 🎯 Objectives

- Help users configure agricultural fields and solar panel arrangements.
- Visualize how solar panel shadows change over time.
- Understand sunlight availability across different field zones.
- Support irrigation planning based on crop and field conditions.
- Explore the balance between agricultural productivity and solar energy generation.

## ✨ Key Features

### 1. Field Setup
- Configure field location.
- Set solar panel height and tilt.
- Configure row spacing.
- Select crop type.
- Set target Daily Light Integral (DLI).

### 2. Solar Shadow Mapping
- Explore shadow changes at different times.
- Visualize the relationship between solar panels and crop areas.
- Use the time scrubber to explore different times of day.

### 3. Micro-Zone Analysis
- Divide the agricultural field into smaller analysis zones.
- Explore differences in sunlight exposure.
- Support zone-level agricultural planning.

### 4. Precision Irrigation
- Support irrigation planning for different crop zones.
- Use crop and field configuration as planning inputs.
- Help identify areas that may require different irrigation schedules.

### 5. Dashboard and Analytics
- Present field information and project metrics.
- Bring shadow mapping and irrigation information together.
- Provide a central interface for exploring the project.

## 🛠️ Technology Stack

| Technology | Purpose |
|---|---|
| Next.js | Web application framework |
| React | User interface |
| TypeScript | Type-safe development |
| Tailwind CSS | Styling and responsive design |
| Zod | Input validation |
| Math.js | Mathematical calculations |
| Recharts | Data visualization |
| Lucide React | Interface icons |

## 📂 Project Structure

```text
AGRIVOLTAICS/
│
├── app/
│   ├── page.tsx
│   ├── layout.tsx
│   └── globals.css
│
├── components/
│   ├── setup/
│   │   └── FieldSetupForm.tsx
│   │
│   ├── shadow/
│   │   └── TimeScrubber.tsx
│   │
│   ├── irrigation/
│   │
│   ├── analytics/
│   │
│   └── layout/
│
├── lib/
│   ├── validations/
│   │   └── setupSchema.ts
│   │
│   ├── shadow/
│   └── irrigation/
│
├── types/
│
├── public/
│
├── package.json
├── package-lock.json
├── tsconfig.json
├── next.config.js
└── README.md
```

Some folders shown above are planned locations for team development. Create them if they do not already exist.

## ⚙️ Installation and Setup

### Prerequisites

Install the following:

- Node.js 20.9 or later
- npm
- Git
- Visual Studio Code

### 1. Clone the repository

```bash
git clone https://github.com/PrajapatiMan/AGRIVOLTAICS.git
```

### 2. Open the project

```bash
cd AGRIVOLTAICS
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

### 5. Open the application

Visit:

```text
http://localhost:3000
```

### 6. Create a production build

```bash
npm run build
```

## 👥 Team Members and Responsibilities

| No. | Team Member | Responsibility |
|---|---|---|
| 1 | Man Prajapati | Project Lead, Dashboard and Integration |
| 2 | TakshKumar Patel | Field Setup and Configuration |
| 3 | Aryan Patel | Solar Shadow Mapping |
| 4 | Tanvi Ohja | Precision Irrigation |
| 5 | Yashumati Jangid | Analytics, Testing and Documentation |

## 🌿 Expected Outcome

The project provides an interactive environment for exploring the relationship between solar panel arrangements, crop sunlight exposure and irrigation planning.

It is intended as a planning and analysis prototype. Its calculations and recommendations should be validated against real field measurements before being used for actual agricultural decisions.

## 🚀 Future Enhancements

- Weather API integration.
- Real-time soil moisture sensor integration.
- Live environmental monitoring.
- More crop profiles.
- Improved solar radiation calculations.
- Automated irrigation recommendations.
- Database integration.
- Cloud deployment.

## 📜 License

This project is developed for academic and educational purposes. A separate open-source license can be added if the team decides to publish the project under specific reuse terms.

---

**Developed by Team Agrivoltaics**  
**Repository:** https://github.com/PrajapatiMan/AGRIVOLTAICS

