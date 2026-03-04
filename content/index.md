---
title: Applications of the Python Package
---

Welcome to applications of the `Ergodic-Insurance` Python package, designed to help risk professionals make more informed decisions about insurance coverage limits and risk retention strategies.

## Learn the Framework

[mostlyoptimal.com/tutorial](https://mostlyoptimal.com/tutorial) — a guide to get started applying the framework to your specific use cases.

[mostlyoptimal.com/research](https://mostlyoptimal.com/research) — a research paper describing the framework in detail.

**Install the Framework**:

```python
pip install ergodic-insurance
```

## Start Here

Short on time? These three posts give you the core argument. Read them in order.

1. **[Insurance Limit Selection Through Ergodicity](insurance-limit-selection-through-ergodicity-when-the-99p9th-percentile-isnt-enough.md)** — The foundation: why time-average growth changes everything about limit selection.
2. **[Volatility Drag vs Premium Drag](volatility-drag-vs-premium-drag.md)** — The core insight: why insurance works even when it’s actuarially “unfair.”
3. **[The Objective Frontier](objective-frontier.md)** — The practical payoff: multi-objective optimization narrows the defensible deductible range.

## All Posts by Topic

Each post includes a downloadable notebook so you can adapt the analysis to your own business.

### The Ergodic Foundation

Why your company’s single trajectory through time behaves nothing like the industry average, and where classical statistics breaks down entirely.

- **[Insurance Limit Selection Through Ergodicity](insurance-limit-selection-through-ergodicity-when-the-99p9th-percentile-isnt-enough.md)** — Why the 99.9th percentile isn’t enough over 50-year horizons.
- **[When Variance Doesn’t Exist: Infinite Moments](infinite-moments.md)** — Where Pareto $\alpha$ drops below 2, standard deviation is an artifact of sample size, not a property of the risk.

### Loss Modeling and Tail Uncertainty

Your severity model is only as good as the data behind it. These posts address estimation under scarce data and deep tail uncertainty.

- **[Loss Severity Estimation and the Shadow Mean](severity-estimation.md)** — Five years of company history can’t see the catastrophic tail; the Hill estimator with industry data recovers what’s hiding.
- **[Stochasticizing Tail Uncertainty With Sobol Sequences](stochasticizing-tail-risk.md)** — Nobody knows their tail shape; sweep 25,000 configurations across 1,000 tail scenarios to find the patterns.

### Risk Measurement

Standard risk metrics miss the tail. These posts show why, and what to use instead.

- **[VaR vs CTE Under Catastrophic Tail Variation](risk-measures-under-cat-tail.md)** — Break a distribution’s variance and VaR barely notices; CTE more than doubles.
- **[Exploring Expectiles](exploring-expectiles.md)** — The only law-invariant risk measure that is both coherent and backtestable, and 5x more responsive to tail thickening than VaR.

### Deductible and Retention Optimization

From the mechanics of volatility drag to multi-objective frontiers, these posts build a complete framework for retention decisions.

- **[Volatility Drag vs Premium Drag](volatility-drag-vs-premium-drag.md)** — The tug-of-war between premium cost and variance destroying compounding power.
- **[The Insurance Cliff](insurance-cliff-by-risk-profile.md)** — Capital vs. limits vs. bankruptcy risk doesn’t form a gentle slope; it’s a cliff.
- **[Exploring Volatility: Optimal Deductibles Under Dual Uncertainty](all-about-volatility.md)** — Operational volatility drives optimal deductible 5x more than loss volatility.
- **[The Objective Frontier](objective-frontier.md)** — Frame deductible selection as multi-objective optimization and the defensible range is far narrower than most renewal conversations suggest.
- **[The Decision Cloud](objectives-and-loss-volatility.md)** — Stress-test the frontier under Bayesian severity uncertainty; at both extremes of loss volatility, optimal retention rises.

---

*Additional applications will be added regularly as we explore new use cases and risk scenarios.*
