export default [
  {
    id: "lineageiq",
    title: "LineageIQ – Data Pipeline Observability & AI Blast Radius Engine",
    roles: ["ai", "analytics", "data-eng"],
    summary:
      "End‑to‑end data pipeline observability platform with lineage tracking, schema drift detection, data quality monitoring, and an AI-powered blast radius ranker.",
    tech: "Snowflake · dbt · Airflow · Python · NetworkX · Mistral/Claude · Postgres · Docker",
    kpis: [
      "17 lineage nodes · 15 edges parsed",
      "5-phase ELT + dbt + Airflow pipeline",
      "AI severity ranking with LLM reasoning",
      "Pipeline Health dashboard in Metabase"
    ]
  },
  {
    id: "smoke-smog",
    title: "Smoke & Smog – Fire Incidents & Air Quality Data Platform",
    roles: ["data-eng", "analytics", "swe"],
    summary:
      "End-to-end ELT platform combining NASA fire data, weather, and air-quality metrics into Snowflake with dbt and Power BI dashboards.",
    tech: "Airflow · dbt · Snowflake · SQL · Docker · Power BI",
    kpis: [
      "4M+ environmental records",
      "25 U.S. cities",
      "15+ dbt data-quality tests",
      "Environmental Distress Score"
    ]
  },
  {
    id: "weavenet",
    title: "WeaveNet – Communication Graph Analytics Platform",
    roles: ["data-eng", "ai", "swe", "analytics"],
    summary:
      "Graph-based analytics engine over enterprise emails with sub-100ms query latency and LLM-powered topic modeling.",
    tech: "FastAPI · Python · Graph DB · ANN search",
    kpis: [
      "517K+ emails processed",
      "764K+ nodes · 2.86M edges",
      "40+ analytical workflows",
      "79× faster index lookups than Neo4j"
    ]
  },
  {
    id: "earthquake",
    title: "Real-Time Earthquake Impact Prediction & Advisory",
    roles: ["analytics", "data-eng", "ai"],
    summary:
      "Spark-based batch + streaming pipelines with Random Forest magnitude prediction and news-enriched impact advisories.",
    tech: "PySpark · Spark Streaming · MLlib · Flask",
    kpis: [
      "100K+ seismic records",
      "R² = 0.91 · RMSE = 0.29",
      "2,000+ news records enriched",
      "Real-time Flask dashboard"
    ]
  },
  {
    id: "travel-bot",
    title: "AI Travel Assistant – Full-Stack Planning Chatbot",
    roles: ["swe"],
    summary:
      "Full-stack travel assistant that unifies flights, hotels, and weather into a single conversational interface.",
    tech: "React · FastAPI · REST · JWT · External APIs",
    kpis: [
      "4 planning tasks unified",
      "3 external APIs integrated",
      "JWT-based auth & sessions"
    ]
  },
  {
    id: "vision-multiagent",
    title: "Multi-Agent Vision → Prompt → Generation System",
    roles: ["ai"],
    summary:
      "A multi-agent system that analyzes images, engineers prompts, generates variations, and critiques outputs using CLIP scoring.",
    tech: "Python · CLIP · DALL·E 3 · Claude Sonnet · PyTorch",
    kpis: [
      "Vision agent → Prompt agent → Generation agent → Critique agent",
      "Structured prompt refinement",
      "CLIP-based evaluation"
    ]
  }
];
