# Workflow


### Pipelines

Each column ("pipeline") has a specific meaning:

- **New Issues:** issues that have not yet been categorized.
- **Icebox:** features that are not yet ready to be worked on, owing either to their low priority or
  to lacking sufficient detail.
- **Backlog:** features that are spec'd out and are ready to be developed.
- **In Progress:** features currently in development and assigned to a particular engineer.
- **QA:** features whose code is complete and is awaiting sign-off from iFeis staff.
- **Code Review:** features that are complete and are ready to be reviewed for quality.
- **Ready to Ship:** features that are complete and approved but that have not yet been deployed to
  any environments.
- **Dev Env:** features that are currently running on the dev/staging environment, but that are not
  yet running on the QA or production environments.
- **QA Env:** features that are currently running on the QA environment, but that are not yet
  running on the production environments.

Once a feature is merged to master and deployed to production, the pull request and associated
feature will close, so there is no pipeline for the production/stable environment.

## Git & GitHub

### Issues

All code submitted should be connected to a particular issue, maintaining a 1:1 relationship. There
should neither be a pull request submitted without a corresponding issue it solves or implements,
nor an issue with more than one pull request connected to it.

### Feature Branches

As described in the [Git Best Practices](./git-best-practices.md) guide, you should perform all work
on feature branches off the most recent master. Branches should be named after the issue on
which you are working as well as the repository of the issue. If you are working issue #123 on the
`app` repository, you should call the feature branch `app123`. Other examples include `api456` and
`isomorphic789`.

### Pushing Branches to GitHub

Before pushing any code up to GitHub, it is your responsibility to ensure the code is up to date and
functions with the most recent master branch on the repository in which you're working. This usually
involves checking out the master branch, pulling down its changes, and doing a simple rebase from
your feature branch. E.g.:

```
$ git checkout master
$ git pull
$ git checkout app123
$ git rebase master
```

If this introduces any conflicts, you will need to resolve them manually. At this point, you should
have only one commit on your feature branch that is not on master (absent special circumstances),
and it should conform to the guidelines.

When all is ready, push your branch up to GitHub directly; you should not use a fork of the
repository.

### Submitting a Pull Request

Once your branch is up on GitHub, you will need to create a Pull Request that asks us to merge your
code into the master branch. When you create a Pull Request, GitHub will automatically populate the
field with the [pull request template](../.github/PULL_REQUEST_TEMPLATE.md), which contains the
basic template you should use to indicate the work that has been done and what you expect the result
to be - as well as what we can expect when testing it.

Any PR is associated with a single issue. There will never be any pull request that is not
associated with an issue. Per the above, the issue should be appropriately tagged in the commit. To
make our lives easier, you'll also want to connect your PR to an issue in ZenHub. This will cause
the issue and PR to "follow" each other through the pipelines.

To connect an issue to a pull request, there is a button at the bottom of any pull request that you
can click to choose an issue to which you want to connect:


## Work Queues

When work is assigned to you, it will appear in the In Progress column and have you listed as the
assignee. Anything in the In Progress column is on your plate to complete or revise, subject to the
priorities identified by the team.

When frontend issue is finished for the first time, it should be moved to the adjacent QA column for
the business leaders to review the issue and PR descriptions to ensure they match their
expectations. UI work will usually contain screenshots for verification. If they do not pass QA, the
issue will be moved back to In Progress, where it is on your plate to continue work, likely with an
accompanying comment on the PR or issue.

When an item passes QA, the business leaders move it Code Review, where someone will review the
engineering to ensure it meets criteria, matches technical expectations, and is accompanied by
appropriate automated tests. If a PR fails Code Review, it is moved back to In Progress, where you
will have to address (or respond to) any issues identified in the review. Upon completion, the item
may bypass the QA column as those criteria likely did not change.

When an item passes Code Review, it will move on to the Dev/Staging environment to be tested
manually. Some issues may require additional styling or new features, but the vast majority of
features that make it to Dev/Staging should be feature-complete.

