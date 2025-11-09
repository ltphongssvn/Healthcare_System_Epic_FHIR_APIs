# Git Hooks Setup for Healthcare System
# File: /GIT_HOOKS_SETUP.md

## Overview
Prevents node_modules, large files, and secrets from entering Git through automated hooks.

## Required Files
- `.gitignore` - Node.js/React exclusions and .backups/
- `.pre-commit-config.yaml` - Pre-commit hook configurations
- `git-clean-commit.sh` - Helper script for pristine directory
- `GIT_HOOKS_SETUP.md` - This documentation

## Installation Steps

### 1. Install pre-commit framework
```bash
pip install pre-commit --break-system-packages
```

### 2. Install pre-commit hooks
```bash
pre-commit install
```

### 3. Create secrets baseline
```bash
detect-secrets scan > .secrets.baseline
```

## Usage

### Clean commit workflow:
```bash
./git-clean-commit.sh  # Moves untracked files to .backups/
git add <specific-files>  # Stage only relevant files explicitly
git commit -m "message" && git push origin main && git status  # Commit, push, verify
```

### Test hooks:
```bash
pre-commit run --all-files
```

## What Each Component Does

- **detect-secrets**: Prevents credential leaks
- **block-large-files**: Prevents files >1MB (hard fail)
- **check-node-modules**: Blocks node_modules/ commits
- **auto-clean-untracked**: Moves untracked to .backups/
- **git-clean-commit.sh**: Automates pristine directory maintenance
