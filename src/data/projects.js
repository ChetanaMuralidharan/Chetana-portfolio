export default [
  {
    "id": "lineageiq",
    "placeholderIcon": "🔗",
    "image": "lineageiq.png",
    "github": "https://github.com/ChetanaMuralidharan/Lineage-iq",
    "title": "LineageIQ – Data Pipeline Observability & AI Blast Radius Engine",
    "roles": ["data-eng", "analytics", "ai"],
    "summary":
      "Data teams find out pipelines are broken when dashboards go blank. LineageIQ tells you what will break before it does.",
    "tech": "Airflow · dbt · Snowflake · Python · NetworkX · Claude API · Metabase · Docker",
    "kpis": [
      "🔍17 lineage nodes · 15 dependency edges parsed",
      "🎛️ 5‑phase ETL + ELT + dbt + Airflow pipeline",
      "🤖 LLM produces a CRITICAL-to-LOW blast radius report before anything downstream breaks",
      "📈 Pipeline Health dashboard built in Metabase"
    ]
  },
  {
    "id": "weavenet",
    "placeholderIcon": "🕸️",
    "image": "weavenet.png",
    "github": "https://github.com/ChetanaMuralidharan/WeaveNet-Hierarchical-GraphDB",
    "title": "WeaveNet – Graph Intelligence Engine for Enterprise Email Analytics",
    "roles": ["ai", "data-eng", "swe"],
    "summary":
      "517K enterprise emails hold the story of an organization. Keyword search can't read it. A graph can.",
    "tech": "Python · FastAPI · React Flow · Qwen2.5-14B · BAAI/BGE · HDBSCAN · FAISS · HNSW · ScaNN · NetworkX",
    "kpis": [
      "🧹 517K → 226K  curated emails via 6‑stage pipeline",
      "🕸️ 764K nodes · 2.86M edges spanning people, threads, topics, and organizations in custom graph engine",
      "🧠 121K LLM topics → 5K clean canonical nodes via embeddings and clustering",
      "⚡ 0.943 Recall@K at sub-100ms · 6–79× faster than Neo4j in index queries"
    ]
  },
  {
    "id": "agentlens",
    "placeholderIcon": "🖼️",
    "image": "agentlens.png",
    "github": "https://github.com/ChetanaMuralidharan/AgentLens-Multimodal-MultiAgent-System",
    "title": "AgentLens – Multimodal Multi‑Agent Image Understanding & Generation",
    "roles": ["ai", "ml", "swe"],
    "summary":
      "\"Make this cinematic\" means nothing to a single model. Four specialized agents working in sequence means everything.",
    "tech": "Python · Claude Sonnet · DALL-E 3 · CLIP · Anthropic API · Multi-agent orchestration",
    "kpis": [
      "👁️ Vision Agent reads the scene so the user doesn't have to describe it",
      "✍️ Prompt Agent turns vague instructions into precise generation-ready prompts",
      "🎨 DALL-E 3 generates the transformation, CLIP + LLM decides if it worked",
      "🏆 4.4 to 5.0 / 5 across all test cases, every run an ACCEPT"
    ]
  },
  {
    "id": "doculens",
    "placeholderIcon": "📄",
    "image": "doculens.png",
    "github": "https://github.com/ChetanaMuralidharan/DocuLens-Multimodal-RAG",
    "title": "DocuLens – Multimodal RAG for Document Intelligence",
    "roles": ["ai", "ml", "swe"],
    "summary":
      "The answer is in the chart on page 14. Standard RAG never finds it. DocuLens retrieves text, figures, and tables as equals.",
    "tech": "Python · FAISS · BM25 · BAAI/bge-large-en-v1.5 · ms-marco-MiniLM · RAG · Vector Databases",
    "kpis": [
      "🔎 Hybrid BM25 + FAISS with HyDE, RRF fusion, and cross-encoder reranking",
      "🖼️ Figures and tables treated as first-class retrieval objects, not invisible noise",
      "🎯 Zero hallucinated citations across all 15 evaluation questions"
    ]
  },
  {
    "id": "smoke-smog",
    "placeholderIcon": "🌫️",
    "image": "smoke-smog.png",
    "github": "https://github.com/ChetanaMuralidharan/SmokeAndSmog",
    "title": "Smoke & Smog – Fire Impact on Air Quality & Weather",
    "roles": ["data-eng", "analytics"],
    "summary":
      "Wildfires don't just burn. They poison air across cities for days. This platform tracks exactly where, when, and how badly.",
    "tech": "Airflow · dbt · Snowflake · Power BI · DAX · Docker · Python",
    "kpis": [
      "🛰️ 4M+ records from NASA satellites, weather feeds, and AQ indices across 25 US cities",
      "⏱️ Captures AQI degradation 1-3 days post-fire that a naive pipeline would completely miss",
      "📊 A single Environmental Distress Score that ranks regional risk across 6 metrics",
      "✅ 15+ dbt quality tests keeping every transformation honest"
    ]
  },
  {
    "id": "guardnet",
    "placeholderIcon": "🎥",
    "image": "guardnet.png",
    "github": "https://github.com/ChetanaMuralidharan/GuardNet-Shoplifting-Detection",
    "title": "GuardNet – Shoplifting Detection with Explainable LLM Summaries",
    "roles": ["ml", "ai", "swe"],
    "summary":
      "Retail loses $100B/year to shoplifting. GuardNet catches what tired eyes miss.",
    "tech": "Python · PyTorch · MobileNetV2 · BiLSTM · YOLOv8 · Mistral LLM",
    "kpis": [
      "📊 92.19% accuracy, 96.92% recall, 96.48% ROC-AUC vs 61.9% CNN-LSTM baseline",
      "🎬 Motion-peak sampling + MobileNetV2-BiLSTM-MIL flags suspicious clips",
      "🦾 YOLOv8 + Pose tracks wrist-to-pocket interactions frame by frame",
      "📝 Mistral LLM auto-generates a human-readable incident report for every theft"
    ]
  },
  {
    "id": "neurospeak",
    "placeholderIcon": "🧠",
    "image": "neurospeak.png",
    "github": "https://github.com/ChetanaMuralidharan/NeuroSpeak-Brain-to-Text",
    "title": "NeuroSpeak – Brain‑to‑Text Neural Speech Decoding",
    "roles": ["ml", "ai"],
    "summary":
      "People with ALS or stroke can't speak. NeuroSpeak listens to their brain instead.",
    "tech": "Python · PyTorch · Conformer · CTC · BiLSTM · KenLM · HDF5 · Mixed Precision Training",
    "kpis": [
      "🏆 0.348 WER on Kaggle Brain-to-Text '25, decoding 10,948 sentences from 256 implanted electrodes",
      "🧠 8‑layer Conformer encoder with CTC",
      "🔍 Beam search + 4-gram LM cuts raw phoneme WER by 30-40%",
      "⚙️ Custom PyTorch pipeline handles electrode drift, Gaussian smoothing, and z-score normalization across 20 months of recordings"
    ]
  },
  {
    "id": "quakealert",
    "placeholderIcon": "🌎",
    "image": "quakealert.png",
    "github": "https://github.com/ChetanaMuralidharan/ai-powered-earthquake-alert-system",
    "title": "AI‑Powered Earthquake Prediction & Alerting System",
    "roles": ["data-eng", "ml", "analytics"],
    "summary":
      "Earthquakes don't warn you. This system does.",
    "tech": "Apache Spark · PySpark · MLlib · Random Forest · VADER · Flask · USGS API · Python",
    "kpis": [
      "🎯R² 0.91 · RMSE 0.29 · MAE 0.21",
      "⚡Dual batch + streaming Spark architecture",
      "📰VADER sentiment + keyword NLP on news articles adds a human impact layer",
      "🚨 Flask + Gmail API lets operators trigger enriched alerts in one click"
    ]
  },
  {
    "id": "travel-bot",
    "placeholderIcon": "✈️",
    "image": "travel-bot.png",
    "github": "https://github.com/ChetanaMuralidharan/ai_travel_planning_chatbot",
    "title": "AI Travel Assistant – Full-Stack Planning Chatbot",
    "roles": ["swe"],
    "summary":
      "Full-stack travel assistant that unifies flights, hotels, and weather into a single conversational interface.",
    "tech": "React · FastAPI · REST · JWT · External APIs",
    "kpis": [
      "4 planning tasks unified",
      "3 external APIs integrated",
      "JWT-based auth & sessions"
    ]
  }
];