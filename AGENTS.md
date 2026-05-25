# STRICT PROJECT CONSTRAINTS AND RED FLAGS

1. **NO TYPOGRAPHY/FONT CHANGES**: 
   - Never change the fonts defined in the project unless explicitly requested.
   - Do not override or remove variables like `--font-sans`, `--font-heading`, or import new fonts from Google Fonts in global files like `layout.tsx` or `index.css` unless instructed.

2. **NO METADATA/BRANDING CHANGES**:
   - Never modify the website title, description, or favicon unless explicitly requested. The title should remain "Intent Studios" and the favicon should remain `favicon.svg`.

3. **ANIMATION SAFEGURADS**:
   - Do not haphazardly mass-revert or mass-replace Framer Motion props (`animate`, `initial`, `whileInView`, `viewport`) using shell scripts or regex replacements unless absolutely necessary and thoroughly tested, as this previously caused elements to disappear.
   - Ensure elements using `whileInView` have a valid `viewport` configuration (e.g. `once: true`) and correct initial and animate states.
   - Test animation changes carefully before leaving a task.

If any future request inadvertently asks for or requires modifying these core global parameters, **STOP** and ask the user for confirmation before proceeding. These are marked as HARD NO RED FLAGS.
