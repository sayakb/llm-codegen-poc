## Component structure guidelines

Each component must have 5 files (no more, no less):
1. <name>.component.ts - containing the primary component code,
2. <name>.config.ts - containing the config data,
3. <name>.component.html - containing the HTML markup,
4. <name>.component.css - stylesheets,
5. <name>.component.spec.ts - unit tests.

Non-negotiable requirements:
- All components must import CommonModule and FormsModule.
- Bootstrap is globally present so no need to import any Bootstrap related module or component.
- Analyze the files that match the pattern `../src/app/**` and use them as examples on how the components should look, what to import, how they reference other components, etc.
- Do not skip generating any of the above 5 files.
- Do not respond back with any explanation in the beginning or end. Stop responding as soon as the last line of the code is output.
- Strictly follow the following response template within the code block:

```
/*-- <filename> --*/
<generated code>
```