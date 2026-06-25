// Deployment config for the IDS-DRR India deployment. Asset references
// are TS imports rather than URL strings so Next.js bundles them and
// emits content-hashed URLs automatically — no /assets/* URL routing,
// no public-dir bind mount.
//
// `.src` extracts the URL from a StaticImageData object so consumers
// keep receiving plain strings (e.g. for CSS `url(...)`).
//
// Types come from the shared ids-drr-branding-types package; if the
// stub adds or changes a field, this file will fail to type-check
// until updated to match.

import type { DeploymentConfig } from "ids-drr-branding-types";

import glossaryCsv from "../data/glossary.csv";
import appleIcon from "./assets/apple-touch-icon.png";
import heroBackground from "./assets/brand/heroBackground.png";
import heroForeground from "./assets/brand/heroForeground.svg";
import logo from "./assets/brand/logo.svg";
import darkLogo from "./assets/brand/logo-dark.svg";
import favicon from "./assets/favicon.ico";
import openGraphImage from "./assets/og.png";
import assamIcon from "./assets/states/Assam.svg";
import biharIcon from "./assets/states/Bihar.svg";
import hpIcon from "./assets/states/Hp.svg";
import odishaIcon from "./assets/states/Odisha.svg";
import upIcon from "./assets/states/Up.svg";
import messagesEn from "./messages/en.json";

export const config: DeploymentConfig = {
    logo,
    darkLogo,
    heroForeground,
    heroBackground: heroBackground.src,
    favicon: favicon.src,
    appleIcon: appleIcon.src,
    openGraphImage: openGraphImage.src,
    states: [
        {
            name: "Assam",
            slug: "assam",
            icon: assamIcon,
            status: "active",
        },
        {
            name: "Himachal Pradesh",
            slug: "himachal-pradesh",
            icon: hpIcon,
            status: "active",
            overlay: () => import("./assets/geo_json/himachal-pradesh.json"),
        },
        {
            name: "Odisha",
            slug: "odisha",
            icon: odishaIcon,
            status: "active",
        },
        {
            name: "Bihar",
            slug: "bihar",
            icon: biharIcon,
            status: "active",
        },
        {
            name: "Uttar Pradesh",
            slug: "uttar-pradesh",
            icon: upIcon,
            status: "active",
        },
    ],
    resources: [
        {
            title: "Assam Tenders Dashboard",
            source: "Assam Government eProcurement System",
            lastUpdated: "2024-10-01",
            updateFrequency: "NA",
            referencePeriodFrom: "2017-01",
            referencePeriodTo: "2024-08",
            tags: ["Financial Data", "Government Response"],
            url: "https://supersetv2.civicdatalab.in/superset/dashboard/p/Od0XQzvMNmr/",
        },
    ],
    stories: [
        {
            title: "Using Data for Disaster Risk Reduction(DRR) and enhanced Climate Adaptation",
            description:
                "Today, it is essential that we look at Disaster Risk Reduction (DRR) that goes beyond rescue and relief for building resilient communities",
            date: "2024-05-16",
            image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*MYJWdHX-BuGX0UB5bgEbkg.jpeg",
            url: "https://medium.com/civicdatalab/using-data-for-disaster-risk-reduction-drr-and-enhanced-climate-adaptation-f2465a91446c",
        },
        {
            title: "Establishing a Resilient Climate Data Environment",
            description:
                "In order to harness the potential of the data-for-public-good ecosystem for addressing the growing impact of Climate Change, data-based",
            date: "2024-04-01",
            image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*_UlVG5lEb8ChOgFrthHp_w.jpeg",
            url: "https://medium.com/civicdatalab/establishing-a-resilient-climate-data-environment-ebe680ba7a9a",
        },
        {
            title: "Critical Role of Local Communities for DRR",
            description:
                "Evidence based interventions for climate action and disaster risk reduction (DRR) must engage communities to ensure resilience.",
            date: "2024-09-25",
            image: "https://miro.medium.com/v2/resize:fit:720/format:webp/0*RWVURinKnqLkvZbZ",
            url: "https://medium.com/civicdatalab/critical-role-of-local-communities-for-drr-3cae00f6c89c",
        },
        {
            title: "Introducing ‘Intelligent (Open) Data Ecosystem for Assam — Flood Response and Management (IDEA-FRM)’",
            description:
                "How we identified and curated relevant datasets which can be used to study, model and address the issue of floods in the state of Assam.",
            date: "2023-05-22",
            image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*KzBOx8poqVyG4m1JY4PsMQ.jpeg",
            url: "https://medium.com/civicdatalab/introducing-intelligent-open-data-ecosystem-for-assam-flood-response-and-management-ca5481908dd4",
        },
    ],
    languages: [
        { label: "English", value: "en" },
        { label: "हिन्दी", value: "hi" },
        { label: "অসমীয়া", value: "as" },
    ],
    messages: {
        en: messagesEn,
    },
    userManualLink: "https://ids-drr-user.readthedocs.io/en/latest/",
    docsLink: "https://ids-drr.readthedocs.io/en/latest/architecture/overview.html",
    glossaryCsv,
    tileLayers: {
        light: {
            url: "https://api.mapbox.com/styles/v1/tech-civicdatalab/cm16if6hx020101qyeijacngt/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoidGVjaC1jaXZpY2RhdGFsYWIiLCJhIjoiY20xNmk2Z2MyMGpldjJxcXY0NjlmcnZkZCJ9.8jTki9brBl78_VIHImdLow",
            attribution:
                '&copy; <a href="https://www.mapbox.com/about/maps/">Mapbox</a> | &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> | <a href="https://labs.mapbox.com/contribute/">Improve this map</a>',
        },
        dark: {
            url: "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
            attribution: '&copy; <a href="https://carto.com/attributions">CARTO</a>',
        },
        satellite: {
            url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
            attribution: "Tiles &copy; Esri",
        },
    },
    features: {
        aboutUs: true,
        reports: true,
        privacyPolicy: true,
    },
};
