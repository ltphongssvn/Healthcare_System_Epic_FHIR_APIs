# GitFlow Branching Strategy
# File: /BRANCHING_STRATEGY.md

## Branch Structure

### Main Branches (Permanent)
- **main**: Production-ready code only
- **develop**: Integration branch for features

### Supporting Branches (Temporary)

#### Feature Branches
- **Naming**: `feature/<feature-name>`
- **From**: develop
- **Merge to**: develop
- **Example**: `feature/patient-summary-endpoint`

#### Release Branches
- **Naming**: `release/<version>`
- **From**: develop
- **Merge to**: main AND develop
- **Example**: `release/1.0.0`

#### Hotfix Branches
- **Naming**: `hotfix/<issue>`
- **From**: main
- **Merge to**: main AND develop
- **Example**: `hotfix/security-patch`

## Workflow

### Feature Development
```bash
git checkout develop
git pull origin develop
git checkout -b feature/my-feature
# ... work and commit ...
git push -u origin feature/my-feature
# Create PR to develop
```

### Release Process
```bash
git checkout develop
git checkout -b release/1.0.0
# ... version bumps, final testing ...
git checkout main
git merge release/1.0.0
git tag -a v1.0.0 -m "Release 1.0.0"
git checkout develop
git merge release/1.0.0
git branch -d release/1.0.0
```

### Hotfix Process
```bash
git checkout main
git checkout -b hotfix/critical-bug
# ... fix and commit ...
git checkout main
git merge hotfix/critical-bug
git tag -a v1.0.1 -m "Hotfix 1.0.1"
git checkout develop
git merge hotfix/critical-bug
git branch -d hotfix/critical-bug
```

## Commit Message Convention
```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types**: feat, fix, docs, style, refactor, test, chore

**Examples**:
- `feat(patient): add aggregated summary endpoint`
- `fix(fhir): handle null medication responses`
- `docs(readme): update setup instructions`

## Pull Request Guidelines

1. Create PR from feature branch to develop
2. Include description and testing notes
3. Link related issues
4. Request code review
5. Ensure CI/CD passes
6. Squash and merge

## Branch Protection

**Recommended settings for main and develop**:
- Require pull request reviews (1+ approvers)
- Require status checks to pass
- Require branches to be up to date
- Include administrators in restrictions
