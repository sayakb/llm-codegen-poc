---
description: Generates code from mockup
auto_execution_mode: 3
---

---
title: Generate HTML from Mockup with Directory Inference
description: Analyzes a mockup and infers a project structure from the `cascadegen` directory to create a single, self-contained HTML file.
steps:
  - step: 1
    prompt: |
        Analyze the file structure within `/cascadegen`

  - step: 2
    prompt: |
        Create a "howdy world" HTML file that matches the rest of the files (naming, folder structure, similar content etc)