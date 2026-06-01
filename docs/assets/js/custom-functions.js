$(document).ready(() => {
  function toggleContent(button, contentDiv) {
    // Close other sections
    $('.expandable').not(button).removeClass('active');
    $('.content').not(contentDiv).slideUp();

    // Toggle the active state of the button and content
    button.toggleClass('active');
    contentDiv.slideToggle();
  }

  $('#experience').click((e) => {
    e.preventDefault();
    const content = `
      <p><strong>Buildables (Bytewise) Fellowship</strong> | AI Track Lead | Jun 2025 – Present<br>
      Mentoring AI fellows on GenAI, agent frameworks, and practical automation projects.</p>
      <p><strong>Canteen Stores Department (CSD)</strong> | Software Engineer Intern | Jul 2025 – Sept 2025<br>
      Designed & deployed HRMS (FastAPI, Next.js, PostgreSQL) for 1k+ staff.</p>
      <p><strong>NIC Islamabad - League of Launchers</strong> | 🥉 Runner-up | Jul 2025 – Sept 2025<br>
      Top 3 out of 17 finalist teams in 8-week mentor-led startup acceleration program.</p>
      <p><strong>Self-Employed</strong> | AI/ML Engineer | Jan 2024 – Present<br>
      Developing ML systems using Python, FastAPI, and Docker.</p>`;
    $('#experience-content').html(content);
    toggleContent($('#experience'), $('#experience-content'));
  });

  $('#certifications').click((e) => {
    e.preventDefault();
    const content = `
      <p><strong>2025:</strong> AWS Educate Generative AI, AWS Solutions Architecture Job Simulation, COMPPEC-2025, Google Cloud (Analyze Sentiment, Analyze Speech, BigQuery ML, Monitor & Manage, Basics of Compute)</p>
      <p><strong>2024:</strong> HackerRank (SQL, Python), NUST AR/VR & Gaming Workshop, Google Cloud Computing Foundations</p>
      <p><strong>2023:</strong> Coursera (Generative AI with LLMs, Intro to LLMs)</p>`;
    $('#certifications-content').html(content);
    toggleContent($('#certifications'), $('#certifications-content'));
  });

  $('#skills').click((e) => {
    e.preventDefault();
    const content = `
      <p><strong>Languages:</strong> Python, SQL, Java, C++</p>
      <p><strong>ML/DL:</strong> PyTorch, TensorFlow, Hugging Face, scikit-learn</p>
      <p><strong>GenAI:</strong> LLM Fine-tuning, LangChain, LangGraph, RAG</p>
      <p><strong>Backend:</strong> FastAPI, Flask, REST APIs, CI/CD, Next.js</p>
      <p><strong>MLOps:</strong> Docker, Kubernetes, MLflow, W&B</p>
      <p><strong>Data:</strong> Pandas, NumPy, PostgreSQL, MongoDB, Vector DBs</p>
      <p><strong>Cloud:</strong> GCP, AWS, Azure</p>
      <p><strong>Tools:</strong> Git/GitHub, Prometheus, Grafana, Supabase</p>`;
    $('#skills-content').html(content);
    toggleContent($('#skills'), $('#skills-content'));
  });
});