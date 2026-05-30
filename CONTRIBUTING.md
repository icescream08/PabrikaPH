# Contributing to PabrikaPH

Thank you for your interest in contributing to PabrikaPH! This document provides guidelines and instructions.

## Code of Conduct

- Be respectful and professional
- Focus on improving the project
- Help other contributors
- Report bugs responsibly

## Getting Started

### 1. Fork the Repository

```bash
# Fork on GitHub, then clone your fork
git clone https://github.com/YOUR_USERNAME/PabrikaPH.git
cd PabrikaPH
```

### 2. Create a Branch

```bash
# Create a new branch for your feature
git checkout -b feature/amazing-feature

# Or for bug fixes
git checkout -b fix/bug-description
```

### 3. Make Your Changes

- Write clean, readable code
- Follow existing code style
- Add comments for complex logic
- Update TypeScript types as needed

### 4. Test Your Changes

```bash
# Run development server
npm run dev

# Test the specific feature
# Navigate to the relevant page and test

# Type check
npm run type-check

# Lint code
npm run lint
```

### 5. Commit Your Changes

```bash
# Format code
npm run format

# Stage changes
git add .

# Commit with clear message
git commit -m "feat: Add amazing feature

- Describe what you changed
- Explain why you changed it
- Reference any related issues #123"
```

### 6. Push and Create Pull Request

```bash
# Push your branch
git push origin feature/amazing-feature
```

Go to GitHub and create a pull request with:
- Clear title
- Detailed description
- Screenshots if UI change
- Reference to related issues

## Code Style Guidelines

### Naming Conventions

```typescript
// Components: PascalCase
const MyComponent = () => { ... };

// Functions: camelCase
const myFunction = () => { ... };

// Constants: UPPER_SNAKE_CASE
const API_URL = 'https://...';

// Files: match export
// Component file: MyComponent.tsx
// Utility file: format.ts
// Hook file: useAuth.ts
```

### TypeScript Usage

```typescript
// Always type props
interface MyComponentProps {
  title: string;
  count?: number;
}

// Always type function returns
function getValue(): string {
  return 'value';
}

// Use proper types, not 'any'
const items: string[] = [];
const config: Record<string, string> = {};
```

### Imports Organization

```typescript
// 1. External imports
import React from 'react';
import Link from 'next/link';

// 2. Internal imports
import { createClient } from '@/lib/supabase/client';
import { Manufacturer } from '@/types';

// 3. Component imports
import Footer from '@/components/Footer';
```

## Component Structure

```typescript
'use client'; // if using hooks/interactivity

import React from 'react';
import Link from 'next/link';
import { SomeIcon } from 'lucide-react';

interface MyComponentProps {
  title: string;
  onSubmit: (value: string) => void;
}

export default function MyComponent({
  title,
  onSubmit,
}: MyComponentProps) {
  const [value, setValue] = React.useState('');

  const handleSubmit = () => {
    onSubmit(value);
  };

  return (
    <div className="flex flex-col gap-4">
      <h1>{title}</h1>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
```

## Commit Message Format

Follow conventional commits:

```
feat: Add user authentication
fix: Resolve homepage layout bug
docs: Update deployment guide
style: Format code with prettier
refactor: Simplify API route logic
test: Add unit tests for utils
chore: Update dependencies
```

## Pull Request Process

1. **Describe your changes** clearly
2. **Reference issues** using #123
3. **Add screenshots** for UI changes
4. **Test thoroughly** before submitting
5. **Keep commits clean** and logical
6. **Be responsive** to review feedback

### PR Title Format

```
[TYPE] Brief description

feat: Add new feature
fix: Fix specific bug
docs: Update documentation
refactor: Improve code quality
```

## Testing Guidelines

### Manual Testing

- Test in development: `npm run dev`
- Test different screen sizes
- Test on different browsers
- Test all user flows

### What to Test

- Feature works as expected
- No console errors or warnings
- Mobile responsive
- Accessibility (keyboard navigation)
- Loading states
- Error states
- Edge cases

## Documentation

Update documentation for:
- New features
- API changes
- Configuration changes
- User-facing features

## File Structure

```
PabrikaPH/
├── app/
│   ├── api/              # API routes
│   ├── (auth)/           # Authentication pages
│   ├── admin/            # Admin pages
│   ├── manufacturers/    # Public pages
│   └── page.tsx          # Homepage
├── components/           # Reusable components
├── lib/                  # Utilities
├── types/                # TypeScript types
├── utils/                # Helper functions
├── docs/                 # Documentation
└── public/               # Static assets
```

## Areas for Contribution

### High Priority

- [ ] Complete admin dashboard
- [ ] Implement messaging system
- [ ] Add RFQ (Request for Quotation) feature
- [ ] Improve search/filtering
- [ ] Add analytics

### Medium Priority

- [ ] Improve UI/UX
- [ ] Add animations
- [ ] Mobile app
- [ ] Performance optimization
- [ ] SEO improvements

### Low Priority

- [ ] Documentation improvements
- [ ] Code refactoring
- [ ] Tests
- [ ] Accessibility improvements

## Reporting Issues

### Bug Report Template

```markdown
## Description
Brief description of the bug

## Steps to Reproduce
1. Step one
2. Step two
3. Step three

## Expected Behavior
What should happen

## Actual Behavior
What actually happens

## Environment
- Browser: Chrome 100
- OS: macOS 12
- Node: 18.17
```

### Feature Request Template

```markdown
## Description
Brief description of the feature

## Problem It Solves
Why this feature is needed

## Proposed Solution
How it could be implemented

## Alternative Solutions
Other approaches
```

## Getting Help

- Check existing documentation
- Search closed issues
- Ask in GitHub discussions
- Review code comments
- Check commit history

## Resources

- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React Documentation](https://react.dev)
- [Next.js Guide](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Git Documentation](https://git-scm.com/doc)

## Recognition

Contributors will be recognized in:
- README.md (Contributors section)
- GitHub contributors page
- Release notes

## Questions?

- Open a GitHub issue
- Start a GitHub discussion
- Join our community

Thank you for contributing to PabrikaPH! 🚀
